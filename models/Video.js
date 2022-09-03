
const { Schema, model, Types } = require('mongoose');
const commentSchema = require('./Comment');

const videoSchema = new Schema(
  {
    videoTitle: {
      type: String,
      required: 'You need to add a title!',
      minlength: 1,
      maxlength: 280
    },
    videoFilename: {
      type: String,
      required: 'You need to specify file name!',      
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true
    },
    comments: [{
      type: Types.ObjectId,
      ref: 'Comments',
    }],
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

videoSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

const Video = model('Video', videoSchema);

module.exports = Video;

