import express from 'express'
import cors from 'cors'
import axios from 'axios'
import dotenv from 'dotenv'

const app = express()
dotenv.config()
app.use(cors())

try // Acquiring the access token
{
    const response = await axios.post(`https://${process.env.SUB_DOMAIN}.amocrm.ru/oauth2/access_token`, {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        code: process.env.CODE,
        grant_type: "authorization_code",
        redirect_uri: "http://localhost:3000/redirect"
    })
    var ACCESS_TOKEN = response.data.access_token
    console.log('access_token acquired')
}
catch (exception) { 
    if(exception.status) console.log('code expired')
    else console.log('network error')
    process.exit(0)
}


// http://localhost:8080/api/leads
app.get('/api/leads', async function (req, res) {
    if (!ACCESS_TOKEN) return res.status(500).send('Internal Server Error')
    try
    {
        const response = await axios.get(`https://${process.env.SUB_DOMAIN}.amocrm.ru/api/v4/leads?page=${req.query.page}&limit=3`, {
            headers: { 'Authorization': `Bearer ${ACCESS_TOKEN}` }
        })
        res.json(response.data)
    }
    catch { res.status(500).send('Internal Server Error') }
})

// http://localhost:8080/api/full-info
app.get('/api/full-info', async function (req, res) {
    if (!ACCESS_TOKEN) return res.status(500).send('Internal Server Error')
    try 
    {
        const response = await axios.get(`https://${process.env.SUB_DOMAIN}.amocrm.ru/api/v4/tasks?filter[entity_type]=leads&filter[entity_id]=${req.query.id}`, {
            headers: { 'Authorization': `Bearer ${ACCESS_TOKEN}` }
        })
        res.json(response.data)
    } 
    catch { res.status(500).send('Internal Server Error') }
})

app.listen(8080)