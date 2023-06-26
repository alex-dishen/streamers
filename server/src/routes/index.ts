import express from 'express'
import {
  getStreamers,
  getStreamer,
  createStreamer,
  updateVotes,
  deleteStreamer
} from '../controllers'
import tryCatch from '../utils/tryCatch'

const router = express.Router()

router.get('/streamers', tryCatch(getStreamers))

router.get('/:streamer/:id', tryCatch(getStreamer))

router.post('/streamers', tryCatch(createStreamer))

router.put('/streamers/:id/vote', tryCatch(updateVotes))

router.delete('/streamers/:id', tryCatch(deleteStreamer))

export default router
