import { Router } from 'express'
import * as plantsCtrl from '../controllers/plants.js'
// import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/plants
router.get('/', plantsCtrl.index)

// POST localhost:3000/plants
router.post('/', plantsCtrl.create)

export {
  router
}