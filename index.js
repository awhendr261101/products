import express from 'express'
import { resolve } from 'path'

import { config } from 'dotenv'

config()

const app = express()
const port = process.env.PORT || 4000
// Serve static files

app.use(express.static('./static'))

app.get('/', (req, res) => {
    res.sendFile(resolve('./static/index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(resolve('./static/about.html'))
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
