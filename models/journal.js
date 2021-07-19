import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Journal
}

const textSchema = new Schema({
  content: String,
  entry: {type: String},
}, {
  timestamps: true
})

const journalSchema = new Schema({
  title: String,
  date:{type: Date,
  default: function() {
    return new Date().getDate()
   }
  },
  interesting: {type: Boolean},
  owner: {type: mongoose.Schema.Types.ObjectId, ref: "Profile", required: true},
  texts: {
    type:[textSchema]
    },

  comments: [ 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }
   ]

  }, {
  timestamps: true,
  })


const Journal = mongoose.model("Journal", journalSchema)