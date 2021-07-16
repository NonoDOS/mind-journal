import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Journal
}

const journalSchema = new Schema({
  name: String,
  tasty: Boolean,
  owner: {type: mongoose.Schema.Types.ObjectId, ref: "Profile", required: true}
})

const journal = mongoose.model("Journal", journalSchema)