import { NextFunction, Request, Response } from 'express'
import { UpdatedError } from '../types'

export const errorHandler = (
  error: UpdatedError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error.constraint === 'streamers_name_key')
    res.status(400).send('The name is already in use')

  res.status(400).send(error.message)
}
