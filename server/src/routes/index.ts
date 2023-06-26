import express from 'express'
import {
  getStreamers,
  getStreamer,
  createStreamer,
  updateVotes,
  deleteStreamer
} from '../controllers'

const router = express.Router()

router.get('/streamers', getStreamers)

router.get('/:streamer/:id', getStreamer)

router.post('/streamers', createStreamer)

router.put('/streamers/:id/vote', updateVotes)

router.delete('/streamers/:id', deleteStreamer)

export default router
