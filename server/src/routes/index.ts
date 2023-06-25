import express from 'express'
import {
  getStreamers,
  createStreamer,
  deleteStreamer,
  updateUpvotesDownVotes
} from '../controllers'

const router = express.Router()

router.get('/streamers', getStreamers)

router.post('/streamers', createStreamer)

router.put('/streamers/:id/vote', updateUpvotesDownVotes)

router.delete('/streamers/:id', deleteStreamer)

export default router
