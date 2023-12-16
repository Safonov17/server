import express from 'express'
import { PrismaClient } from './node_modules/.prisma/client/index'

const prisma = new PrismaClient()
const app = express()
const port = 5000

app.use(express.json())

app.post('/api', async (req, res) => {
	console.log(req.body)

	res.json({ message: 'Hello world!' })
})

const server = app.listen(port, () => {
	console.log(`🚀 Example app listening on port ${port}`)
})
