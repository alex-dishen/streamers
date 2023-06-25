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

export type UpdatedRequest = Request<ParamsDictionary, unknown, RequestBody>
