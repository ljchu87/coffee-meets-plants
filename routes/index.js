import { Router } from 'express'

const router = Router()

router.get('/', function (req, res) {
  res.render('index', { title: 'Home Page' })
})

router.post('')

export {
  router
}
