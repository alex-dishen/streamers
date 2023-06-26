import { NextFunction, Request, Response } from 'express'
import pool from '../db'
import { UpdatedRequest } from '../types'

export const getStreamers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = await pool.query('SELECT * FROM streamers ORDER BY created_at;')
  res.status(200).json(data.rows)
}

export const getStreamer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params

  const data = await pool.query(
    'SELECT * FROM streamers WHERE streamer_id = $1;',
    [id]
  )

  if (data.rows.length === 0) {
    throw new Error("We didn't find the streamer")
  }
  res.status(200).json(data.rows)
}

export const createStreamer = async (
  req: UpdatedRequest,
  res: Response,
  next: NextFunction
) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { name, platform, description, picture_index, upvotes, downvotes } =
    req.body

  await pool.query(
    `INSERT INTO streamers (streamer_id, name, description, platform, picture_index, upvotes, downvotes)
       VALUES (uuid_generate_v4(), $1, $2, $3, $4, $5, $6);`,
    [name, description, platform, picture_index, upvotes, downvotes]
  )

  await getStreamers(req, res, next)
}

export const deleteStreamer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params

  await pool.query('DELETE FROM streamers WHERE streamer_id = $1', [id])

  await getStreamers(req, res, next)
}

export const updateVotes = async (
  req: UpdatedRequest,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params
  const { voteType, voteValue } = req.body

  await pool.query(
    `UPDATE streamers SET ${voteType} = $1 WHERE streamer_id = $2;`,
    [voteValue, id]
  )

  await getStreamer(req, res, next)
}
