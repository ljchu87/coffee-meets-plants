import { Router } from 'express'
import * as plantsCtrl from '../controllers/plants.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/plants
router.get('/', plantsCtrl.index)

// GET localhost:3000/plants/:id
router.get('/:id', plantsCtrl.show)

// GET localhost:3000/plants:/id/edit
router.get('/:id/edit', isLoggedIn, plantsCtrl.edit)

// POST localhost:3000/plants
router.post('/', isLoggedIn, plantsCtrl.create)

// PUT localhost:3000/plants/:id
router.put('/:id', isLoggedIn, plantsCtrl.update)

export {
  router
}