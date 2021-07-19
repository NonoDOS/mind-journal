import { Router } from 'express'
import * as apiCtrl from "../controllers/api.js"

export {
  router
}

const router = Router()

router.post("/comments", apiCtrl.createComment)
router.get('/comments', apiCtrl.commentIndex)