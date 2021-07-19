import {Router} from 'express'
import * as journalsCtrl from '../controllers/journals.js'

export {
    router
  }
  
  const router = Router()
  
  router.get("/", journalsCtrl.index)
  router.get("/new", journalsCtrl.new)
  router.get("/:journalId", journalsCtrl.show)
  router.get("/:id/edit", isLoggedIn, journalsCtrl.edit)
  router.post("/", isLoggedIn, journalsCtrl.create)
  router.put("/:id", isLoggedIn, journalsCtrl.update)
  router.put("/:id/flip-interesting", isLoggedIn, journalsCtrl.flipInteresting)
  router.delete("/:id", isLoggedIn, journalsCtrl.delete)
  router.delete('/facts/:id', journalsCtrl.delText)
  router.post('/Texts', isLoggedIn, journalsCtrl.addText)
// Insert this middleware for routes that require a logged in user
   function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/auth/google')
}