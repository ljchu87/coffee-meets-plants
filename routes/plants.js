import { Router } from 'express'
import * as plantsCtrl from '../controllers/plants.js'

const router = Router()

// GET localhost:3000/plants
router.get('/', plantsCtrl.index)

export {
  router
}