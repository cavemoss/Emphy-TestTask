import express from 'express'
import cors from 'cors'
import axios from 'axios'
import dotenv from 'dotenv'

const app = express()
dotenv.config()
app.use(cors())

const ACCESS_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImMyMWQ3MmFmZDZkZmMxZjE2ZGE5MWNiOGUwOTM2ZWRhMDE2ZWI5YWUzZjcwZmUyNWUyZjY4YWFlNzMxNjhkMTcyMDgxMTE2MjUyZTNlZTlmIn0.eyJhdWQiOiJjMWM0MjQ5NS1hMTczLTQzOWYtOGI3OS0xNTEzZWU3OWVkOGQiLCJqdGkiOiJjMjFkNzJhZmQ2ZGZjMWYxNmRhOTFjYjhlMDkzNmVkYTAxNmViOWFlM2Y3MGZlMjVlMmY2OGFhZTczMTY4ZDE3MjA4MTExNjI1MmUzZWU5ZiIsImlhdCI6MTcyNzg3MzE1NCwibmJmIjoxNzI3ODczMTU0LCJleHAiOjE3Mjc5NTk1NTQsInN1YiI6IjExNTkyMDAyIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxOTgzNDU0LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiNjczZDkwYTMtZTZkYy00YTNkLWFhMzctMDY0NjBlMzllMmE1IiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.lQBUfmcZgkaWoPqxzaZPsrQLJWeLIB__kUnnm6jxNDVzLkNfrXPU7daGgiZ_5Pkq5AJ45-0F-r3AAEtXGOWjriyo7d7CilZK865qjo2KY-KaZs6orIKGNqqk73sOkDttyvNJeO2epLzTA0Hze-w2NiSWTHOrUHLXUC3SVJ8W_eNNW_dlyRuJS2bZ277MyAdO02pOoJlpOTPPbe0Yt2bhViz_d9-AbinsThok5X6hPefqUBiecjKRADZlr8WK35AZ_FOrfv7TMGK8h_5VZFcepdmFGzSLLT1vRFSwoSDRcmDER3wKQA-iHIMraJpoOTbcJZNUtlxXDJQnDP8dvAG-og"

// http://localhost:8080/api/leads
app.get('/api/leads', async function (req, res) {
    try {
        const response = await axios.get(`https://alexshu1812.amocrm.ru/api/v4/leads?page=${req.query.page}&limit=3`, {
            headers: { 'Authorization': `Bearer ${ACCESS_TOKEN}` }
        })
        res.json(response.data)
    }
    catch { res.status(500).send('Internal Server Error') }
})

// http://localhost:8080/api/full-info
app.get('/api/full-info', async function (req, res) {
    try {
        const response = await axios.get(`https://alexshu1812.amocrm.ru/api/v4/tasks?filter[entity_type]=leads&filter[entity_id]=${req.query.id}`, {
            headers: { 'Authorization': `Bearer ${ACCESS_TOKEN}` }
        })
        res.json(response.data)
    } 
    catch { res.status(500).send('Internal Server Error') }
})

app.listen(8080)