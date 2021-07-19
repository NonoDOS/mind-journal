import { Journal } from '../models/journal.js'

export {
  index,
  newJournal as new,
  create,
  show,
  flipInteresting,
  edit,
  update,
  deleteJournal as delete,
  addText,
  delText,
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

  function newJournal(req,res){
    res.render("journals/new", {
      title: "Add Journal",
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
    Journal.findById(req.params.journal)
    .populate("owner")
    .then(journal => {
      res.render('journals/show', {
        journal,
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

  function edit(req, res) {
    Journal.findById(req.params.id)
    .then(journal => {
      res.render('journals/edit', {
        journal,
        title: "edit Journal"
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

  function deleteJournal(req, res) {
    Journal.findById(req.params.id)
    .then(journal => {
      if (journal.owner.equals(req.user.profile._id)) {
        journal.delete()
        .then(() => {
          res.redirect('/journals')
        })
      } else {
        throw new Error ('🚫 Not authorized 🚫')
      }   
    })
    .catch(err => {
      console.log(err)
      res.redirect('/journals')
    })
  }


function addText(req, res, next) {
  Journal.findById(req.user.journalProfile._id, function(err, journal){
    journal.texts.push(req.body)
    journal.save(function (err){
      res.redirect('/journals')
    })
  })
}
function delText(req, res, next) {
  Journal.findById(req.params.id)
    .then(journal => {
      if (journal.owner.equals(req.user.profile._id)) {
        journal.delete()
        .then(() => {
          res.redirect('/journals')
        })
      } else {
        throw new Error ('🚫 Not authorized 🚫')
      }   
    })
    .catch(err => {
      console.log(err)
      res.redirect('/journals')
    })
  }