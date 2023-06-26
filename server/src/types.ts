import { Request } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'

type RequestBody = {
  name: string
  platform: string
  description: string
  picture_index: number
  upvotes: number
  downvotes: number
  voteType: string
  voteValue: number
}

type PostgresError = {
  length: number
  name: string
  severity: string
  code: string
  detail: string
  schema: string
  table: string
  constraint: string
  file: string
  line: string
  routine: string
}

export type UpdatedError = Error & PostgresError

export type UpdatedRequest = Request<ParamsDictionary, unknown, RequestBody>
