import { Comment } from '../models/comment.js'

export {
    createComment,
    commentIndex
  }
  
  function commentIndex(req, res) {
    Comment.find({})
    .then(comments => res.json(comments))
    .catch(err => {
      res.json(err)
    })
  }
  
  function createComment(req, res) {
    Comment.create(req.body)
    .then(comment => res.json(comment))
    .catch(err => {
      console.log(err)
      res.json(err)
    })
  }