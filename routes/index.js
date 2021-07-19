import { Router } from 'express'
const router = Router()

export {
  router
}

router.get('/', function (req, res,next) {
  res.render('index', { title: 'Home Page', user: req.user ? req.user : null })
})
