import { Request, Response } from 'express'
import pool from '../db'
import { UpdatedRequest } from '../types'

export const getStreamers = async (req: Request, res: Response) => {
  try {
    const data = await pool.query('SELECT * FROM streamers;')
    res.json(data.rows)
  } catch (error) {
    console.error(error)
  }
}

export const createStreamer = async (req: UpdatedRequest, res: Response) => {
  const { name, platform, description, pictureNumber, upvotes, downvotes } =
    req.body

  try {
    const response = await pool.query(
      `INSERT INTO streamers (streamer_id, name, description, platform, picture_number, upvotes, downvotes)
       VALUES (uuid_generate_v4(), $1, $2, $3, $4, $5, $6);`,
      [name, description, platform, pictureNumber, upvotes, downvotes]
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
