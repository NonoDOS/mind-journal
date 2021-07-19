import { Router } from "express"
import * as commentsCtrl from "../controllers/comments.js"

export {
  router
}

const router = Router()

//localhost:3000/comments/new
router.get("/new", commentsCtrl.new)
//localhost:3000/comments
router.post("/", commentsCtrl.create)