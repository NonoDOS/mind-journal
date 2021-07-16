import mongoose from 'mongoose'

export {
  Comment
}

const commentSchema = new mongoose.Schema({
  name: {type: String, unique: true}
})

const comment = mongoose.model("comment", commentSchema)