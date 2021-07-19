import { Comment } from "../models/comment.js"


export {
  newComment as new,
  create,
}

function newComment(req, res) {
  Comment.find({}, function(err, comments) {
    res.render("comments/new", {
      title: "Add comment",
      comments: comments,
      err:err,
    })
  })
}

function create(req, res) {
  Comment.create(req.body, function(err, comment){
    res.redirect('/comments/new')
  })
}