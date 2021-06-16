const path = require("path");
const cors = require('cors');
const multer = require("multer");
const crypto = require("crypto");
const express = require("express");
let Grid = require('gridfs-stream');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const GridFsStorage = require("multer-gridfs-storage");

const app = express();

const science = require('./saveFileServer')

app.use(cors());
app.use(cookieParser())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

// DB
const mongoURI = "mongodb://localhost/posts";

// connection
const conn = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// init gfs
let gfs;
conn.once("open", () => {
  // init stream
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "uploads"
  });
});

// Storage
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads"
        };
        resolve(fileInfo);
      });
    });
  }
});
//const storage = new GridFsStorage({ url: mongoURI }) // soddaroq usuli

const upload = multer({
  storage
});


app.get("/allImages", (req, res) => {
  if (!gfs) {
    const error = "Kutilmagan xato yuz berdi.";
    console.log(error);
    res.send(error);
    process.exit(0);
  }
  gfs.find().toArray((err, files) => {
    // check if files
    if (!files || files.length === 0) {
      return res.render("index", {
        files: false
      });
    } else {
      const f = files
        .map(file => {
          if (
            file.contentType === "image/png" ||
            file.contentType === "image/jpeg"
          ) {
            file.isImage = true;
          } else {
            file.isImage = false;
          }
          return file;
        })
        .sort((a, b) => {
          return (
            new Date(b["uploadDate"]).getTime() -
            new Date(a["uploadDate"]).getTime()
          );
        });

      // return res.render("index", {
      //   files: f
      // });
      return res.json(f);
    }

  });
});

// route'la
  
app.post("/upload", upload.single("file"), async (req, res) => {
  await gfs.find().toArray((err, files) => {
    if (!files || files.length === 0) {
      return res.render("index", {
        files: false
      });
    } else {
      const f = files
        .map(file => {
          if (
            file.contentType === "image/png" ||
            file.contentType === "image/jpeg"
          ) {
            file.isImage = true;
          } else {
            file.isImage = false;
          }
          return file;
        })
        .sort((a, b) => {
          return (
            new Date(b["uploadDate"]).getTime() -
            new Date(a["uploadDate"]).getTime()
          );
        });
        // console.log(f,"<---")
      // ggg = f;
      return res.json(f[0]);
    }

  });
});

app.get("/files", async (req, res) => {
  await gfs.find().toArray((err, files) => {
    if (!files || files.length === 0) {
      return res.json({});
    } else {
      const f = files
        .map(file => {
          if (
            file.contentType === "image/png" ||
            file.contentType === "image/jpeg"
          ) {
            file.isImage = true;
          } else {
            file.isImage = false;
          }
          return file;
        })
        .sort((a, b) => {
          return (
            new Date(b["uploadDate"]).getTime() -
            new Date(a["uploadDate"]).getTime()
          );
        });
      return res.json(f);
    }

  });
});

app.get("/files/:filename", (req, res) => {
  gfs.find(
    {
      filename: req.params.filename
    },
    (err, file) => {
      if (!file) {
        return res.status(404).json({
          err: "bunday fayl mavjud emas"
        });
      }

      return res.json(file);
    }
  );
});

app.get("/image/:filename", (req, res) => {
  const file = gfs
    .find({
      filename: req.params.filename
    })
    .toArray((err, files) => {
      if (!files || files.length === 0) {
        return res.status(404).json({
          err: "bunday rasm mavjud emas"
        });
      }
      gfs.openDownloadStreamByName(req.params.filename).pipe(res);
    });
});

// files/del/:id
// faylni database'dan o'chiramiz
app.post("/files/del/:id", (req, res) => {
  gfs.delete(new mongoose.Types.ObjectId(req.params.id), (err, data) => {
    if (err)
      return res.status(404).json({ err: err.message });

    // res.redirect("/");
    console.log(req.send)
    return res.json({bajarilish: "muvofaqiyatli"});
  });
});

app.use('/', science);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`${port} chi portni eshitishni boshladim...`);
});