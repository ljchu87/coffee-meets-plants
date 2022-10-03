import { Router } from 'express'
import * as plantsCtrl from '../controllers/plants.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/plants
router.get('/', plantsCtrl.index)

// GET localhost:3000/plants/:id
router.get('/:id', plantsCtrl.show)

// POST localhost:3000/plants
router.post('/', isLoggedIn, plantsCtrl.create)

export {
  router
}