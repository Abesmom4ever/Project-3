const router = require("express").Router();
const { Video, Comment } = require("../../models");
const { ObjectId } = require("mongoose");

const { authMiddleware } = require('../../utils/auth');

//TODO: ROUTE TO GET ALL VIDEOS
router.post("/listall", async (req, res) => {
  try {
    let videos = await Video.find({});
    //.populate('comments')
    console.log(videos);
    res.status(200).json(videos);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//ADD A NEW VIDEO
router.post("/post", async (req, res) => {
  try {

    let validToken = await authMiddleware({ req: req });
    //console.log(validToken);
    if (validToken === true) {
      let videoTitle = req.body.video_title;
      let videoFilename = req.body.video_file;
      let username = req.session.username;
      let createdAt = Date.now();
      let videoData = {
        videoTitle,
        username,
        createdAt,
        videoFilename
      }
      let newVideo = await Video.create(videoData);
      console.log(newVideo);
      res.status(200).json({success:1});
    }
    else
    {
      console.log("not logged in");  
      res.status(200).json({message:'not logged in'});    
    }
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
/*
//TODO: ROUTE TO GET SINGLE VIDEO BASED ON VIDEO ID
router.get("/:videoId", async (req, res) => {
  try {
    Video.findById(req.params.videoId, function (err, video) {
      if (!err) {
        console.log(video);
        res.status(200).json(video);
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//TODO: ROUTE TO UPDATE A VIDEO
router.put("/:videoId", async (req, res) => {
  try {
    const filter = { _id: req.params.videoId };
    const update = req.body;
    let video = await Video.findOneAndUpdate(filter, update, {
      new: true,
    });
    console.log(video);
    res.status(200).json(video);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//TODO: ROUTE TO DELETE A VIDEO BASED ON VIDEO ID
router.delete("/:videoId", async (req, res) => {
  try {
    await Video.deleteOne({ _id: req.params.videoId });
    res.status(200).json({ status: "success" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//TODO: ROUTE TO ADD COMMENT TO A VIDEO
router.post("/:videoId/comments", async (req, res) => {
  try {
    console.log(req.body, req.params.videoId);

    let newComment = await Comment.create(req.body);
    console.log(newComment);

    let updatedVideo = await Video.findOneAndUpdate(
      { _id: req.params.videoId },
      {
        $push: { comments: newComment._id },
      }
    );

    console.log(updatedVideo);
    res.status(200).json("yay");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//TODO: ROUTE TO DELETE A COMMENT ON A VIDEO
router.delete("/:videoId/comments/:commentId", async (req, res) => {
  try {

    let comment = await Video.findOneAndUpdate(
      { _id: req.params.videoId },
      {
        $pullAll: {
          comments: [{ _id: req.params.commentId }],
        },
      }
    );
    console.log(comment);
    res.status(200).json("successful delete");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
*/
module.exports = router;
