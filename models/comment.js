import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Comment
}

const commentSchema = new mongoose.Schema({
  content: String,
  CommtextEntry: {type: String},
  uniqque : true,
}, {
  timestamps: true})

const Comment = mongoose.model("Comment", commentSchema)