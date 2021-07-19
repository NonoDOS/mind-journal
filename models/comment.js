import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Comment
}

const commentSchema = new Schema({
  content: {type:String},
  textEntry: {type: String},
}, {
  timestamps: true})

const Comment = mongoose.model("Comment", commentSchema)