import { Request, Response } from 'express'
import pool from '../db'

export const getStreamers = async (req: Request, res: Response) => {
  try {
    const data = await pool.query('SELECT * FROM streamers;')
    res.json(data.rows)
  } catch (error) {
    console.error(error)
  }
}
