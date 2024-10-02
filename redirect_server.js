import express from "express"
const app = express()

app.get('/redirect', async (req, res) => res.status(200).send('success'))
app.listen(3000)