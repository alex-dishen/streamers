import express from 'express'
import { getStreamers } from '../controllers'

const router = express.Router()

router.get('/', getStreamers)

export default router
