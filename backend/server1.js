var express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var PORT = process.env.PORT || 8080;
var upload = multer({ dest: 'uploads/' })


// use of body parser
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(cors());




app.post('/upload',upload.single('avatar'), function (req, res,next) {
console.log(req.file);
console.log('hello');
res.send({data:'sss'})
});


app.listen(PORT, () => {
    console.log(`App is listening to ${PORT}`);
})