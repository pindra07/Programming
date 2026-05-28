import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.json({
        "data": "Hello World"
    })
})

app.post("/", (req, res) => {
    res.json({
        "data": "Hello world form post req on root url"
    })
})

app.listen(3000, () => {
    console.log("Your app is running on port 3000")
})
