import {Router} from 'express'
const router = Router()
import * as journalsCtrl from '../controllers/journals.js'

export {
    router
  }
  
  router.get("/", journalsCtrl.index)
  router.get("/new", journalsCtrl.new)
  router.get("/:journalId", journalsCtrl.show)
  router.get("/:id/edit", isLoggedIn, journalsCtrl.edit)
  router.post("/", isLoggedIn, journalsCtrl.create)
  router.put("/:id", isLoggedIn, journalsCtrl.update)
  router.delete("/:id", isLoggedIn, journalsCtrl.delete)
  router.put("/:id/flip-interesting", isLoggedIn, journalsCtrl.flipInteresting)

  router.post("/:id/comment", isLoggedIn, journalsCtrl.addComment)
  
  router.delete('/:id/texts',  isLoggedIn, journalsCtrl.delText)
  router.post('/:id/texts', isLoggedIn, journalsCtrl.addText)
  
// Insert this middleware for routes that require a logged in user
   function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/auth/google')
}