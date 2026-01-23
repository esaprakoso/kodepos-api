import { Router } from 'express'
import { healthCheck } from '../controllers/health.controller'
import postalRoutes from './postal.routes'

const router = Router()

router.get('/health', healthCheck)
router.use(postalRoutes)

export default router
