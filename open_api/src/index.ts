import express from "express"
import cors from "cors"

const app = express()
app.use(cors())

app.get('/signin', (req, res) => {
    res.status(200).json({
        message: "This is signin endpoint"
    })
})

app.get('/signup', (req, res) => {
    res.status(200).json({
        message: "This is signout endpoint"
    })
})

app.get('/users', (req, res) => {
    res.status(200).json({
        message: "All users"
    })
})

app.post('/todo', (req, res) => {
    res.json({
        todo: "insert todo after authentication"
    })
})

app.listen(3000, () => {
    console.log("server is running on port 3000")
})
