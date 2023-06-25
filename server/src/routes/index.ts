import express from 'express'
import { getStreamers, createStreamer, deleteStreamer } from '../controllers'

const router = express.Router()

router.get('/streamers', getStreamers)

router.post('/streamers', createStreamer)

router.delete('/streamers/:id', deleteStreamer)

export default router
