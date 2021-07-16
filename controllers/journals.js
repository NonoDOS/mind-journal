import { Journal } from '../models/journal.js'

export {
  index,
  create,
  show,
//   flipTasty,
//   edit,
//   update,
//   deleteJournal as delete,
}

function index(req, res) {
    Journal.find({})
    .then(journals => {
      res.render("journals/index", {
        journals,
        title: "🌮"
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/journals")
    })
  }

  function create(req, res) {
    req.body.owner = req.user.profile
    req.body.tasty = !!req.body.tasty
    Journal.create(req.body)
    .then(journal => {
      res.redirect('/journals')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/journals')
    })
  }

  function show(req, res) {
    Journal.findById(req.params.JournalId)
    .populate("owner")
    .then(Journal => {
      res.render('Journals/show', {
        Journal,
        title: "🌮 show"
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/Journals')
    })
  }