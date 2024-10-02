const express = require('express')
const app = express()

app.get('/redirect', async (req, res) => {
    res.json({ message: "success" })
})

app.listen(3000, () => console.log('http://localhost:3000'))