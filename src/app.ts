import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
const dot = dotenv.config()

import UserRoutes from './routes/UserRoutes'

const app: express.Application = express()

app.use(express.json())
app.use(cors())

app.use('/users', UserRoutes)

export { app }