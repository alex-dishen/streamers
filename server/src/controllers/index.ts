import { Request, Response } from 'express'
import pool from '../db'
import { UpdatedRequest } from '../types'

export const getStreamers = async (req: Request, res: Response) => {
  try {
    const data = await pool.query(
      'SELECT * FROM streamers ORDER BY created_at;'
    )
    res.json(data.rows)
  } catch (error) {
    console.error(error)
  }
}

export const createStreamer = async (req: UpdatedRequest, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { name, platform, description, picture_index, upvotes, downvotes } =
    req.body

  try {
    const response = await pool.query(
      `INSERT INTO streamers (streamer_id, name, description, platform, picture_index, upvotes, downvotes)
       VALUES (uuid_generate_v4(), $1, $2, $3, $4, $5, $6);`,
      [name, description, platform, picture_index, upvotes, downvotes]
    )
    res.json(response)
  } catch (error) {
    console.error(error)
  }
}

export const deleteStreamer = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const response = await pool.query(
      'DELETE FROM streamers WHERE streamer_id = $1',
      [id]
    )
    res.json(response)
  } catch (err) {
    console.error(err)
  }
}

export const updateUpvotesDownVotes = async (
  req: UpdatedRequest,
  res: Response
) => {
  const { id } = req.params
  const { voteType, voteValue } = req.body

  try {
    const response = await pool.query(
      `UPDATE streamers SET ${voteType} = $1 WHERE streamer_id = $2;`,
      [voteValue, id]
    )
    res.json(response)
  } catch (error) {
    console.error(error)
  }
}
