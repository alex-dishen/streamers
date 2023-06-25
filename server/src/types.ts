import { Request } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'

type RequestBody = {
  name: string
  platform: string
  description: string
  pictureNumber: number
  upvotes: number
  downvotes: number
}

export type UpdatedRequest = Request<ParamsDictionary, unknown, RequestBody>
