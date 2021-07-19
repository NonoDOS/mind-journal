import { Journal } from '../models/journal.js'

export {
  index,
  create,
  show,
  flipInteresting,
//   edit,
//   update,
//   deleteJournal as delete,
}

function index(req, res) {
    Journal.find({})
    .then(journals => {
      res.render("journals/index", {
        journals,
        title: "Journal"
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/journals")
    })
  }

  function create(req, res) {
    req.body.owner = req.user.profile
    req.body.interesting = !!req.body.interesting
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
        title: "Journal show"
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/Journals')
    })
  }

  function flipInteresting(req, res) {
    Journal.findById(req.params.id)
    .then(journal => {
      journal.interesting = !journal.interesting
      journal.save()
      .then(()=> {
        res.redirect(`/journals/${journal._id}`)
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/journals')
    })
  }

  function update(req, res) {
    Journal.findById(req.params.id)
    .then(journal => {
      if (journal.owner.equals(req.user.profile._id)) {
        req.body.interesting = !!req.body.interesting
        journal.update(req.body, {new: true})
        .then(()=> {
          res.redirect(`/journals/${journal._id}`)
        })
      } else {
        throw new Error ('🚫 Not authorized 🚫')
      }
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/journals`)
    })
  }