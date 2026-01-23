import { Router } from 'express'
import { getByProvince, getByPostalCode, getByCity, getByDistrict, getByVillage } from '../controllers/postal.controller'

const router = Router()

router.get('/province', getByProvince)
router.get('/city', getByCity)
router.get('/district', getByDistrict)
router.get('/village', getByVillage)
router.get('/postal-code', getByPostalCode)

export default router
