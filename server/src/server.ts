import express, { json } from 'express'
import cors from 'cors'
import streamersRouter from './routes'
import { errorHandler } from './middleware/errorHandler'

const app = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(json())

app.use(streamersRouter)
app.use(errorHandler)

app.listen(port, () =>
  console.log(
    `⚡️[server]: Streamers listening on port http://localhost:${port}!`
  )
)
