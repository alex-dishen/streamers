import express from 'express'
import { getStreamers, createStreamer } from '../controllers'

const router = express.Router()

router.get('/streamers', getStreamers)

router.post('/streamers', createStreamer)

export default router
