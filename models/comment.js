import mongoose from 'mongoose'

export {
  Comment
}

const commentSchema = new mongoose.Schema({
  content: String,
  CommtextEntry: {type: String},
}, {
  timestamps: true
})

const Comment = mongoose.model("Comment", commentSchema)