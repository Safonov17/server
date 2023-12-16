import express from 'express'
import { PrismaClient } from './node_modules/.prisma/client/index'
import cors from 'cors'

const prisma = new PrismaClient()
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.post('/api', async (req, res) => {
	const { email, name } = req.body

	if (!email || !name) {
		return res.status(400).json({ message: 'Name and email required fields!' })
	}

	try {
		const createdEntry = await prisma.waitList.create({
			data: {
				email,
				name,
			},
		})

		res.json(createdEntry)
	} catch (error) {
		res.status(400).send({ message: error })
	}
})

const server = app.listen(port, () => {
	console.log(`🚀 Example app listening on port ${port}`)
})
