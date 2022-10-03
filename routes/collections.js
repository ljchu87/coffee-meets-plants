import { Router } from 'express'
import * as collectionsCtrl from '../controllers/collections.js'

const router = Router()

router.get('/', collectionsCtrl.index)

export {
  router
}