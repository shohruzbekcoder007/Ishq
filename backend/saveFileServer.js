const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

mongoose.connect('mongodb://localhost/posts',{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("ulanish hosil qilindi");
    })
    .catch((err) => {
        console.log("ulanish hosil qilinmadi",err);
    })

const post = new mongoose.Schema({
    data: {
      type: String
    },
    mavzu: {
      type: String
    },
    postMiniText: {
      type: String
    },
    urni: {
      type: String
    },
    postImage: {
      type: String
    },
    postDate: {
      type: Date,
      default: new Date().getDate()
    }
  }, { collation:"miniPosts " });
    
  const Science = mongoose.model("miniPosts", post);
  
  async function createPost(newScience){
  
    const science = new Science(newScience());
  
    const saveScience = await science.save();
    return saveScience;
  }

  async function getPosts(){
  
  
    const saveScience = await Science.find({});
    console.log(saveScience)
    return saveScience;
  }
  
  router.post('/createPost',async function(req,res){
    const science = await createPost(() => {
        return req.body;
    });
    res.status(201).json(science);
  });

  router.get('/getPosts',async function(req,res){
    const science = await getPosts(() => {
        return req.body;
    });
    console.log(science)
    res.status(201).json(science);
  });

  async function getPostsPost(){
  
  
    const saveScience = await Science.find({"urni" : "post"});
    console.log(saveScience)
    return saveScience;
  }

  router.get('/getPosts/post',async function(req,res){
    const science = await getPostsPost(() => {
        return req.body;
    });
    console.log(science)
    res.status(201).json(science);
  });

  async function getPostsLeft(){
  
  
    const saveScience = await Science.find({"urni" : "leftMini"});
    console.log(saveScience)
    return saveScience;
  }

  router.get('/getPosts/postLeft',async function(req,res){
    const science = await getPostsLeft(() => {
        return req.body;
    });
    console.log(science)
    res.status(201).json(science);
  });

  router.get('/getPosts/:soha',async function(req,res){
    console.log(req.params.soha)
    const getScience = await Science.find({"mavzu" : req.params.soha});
    console.log(getScience)
    res.status(201).json(getScience);
  });

 module.exports = router;