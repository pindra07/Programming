import express from "express"

const app = express()

app.get("/health", (req, res) => {
    res.status(200).json({
        message: "health endpoint for monitoring"
    })
})

app.get("/cpu", (req, res) => {
    for(let i = 0; i < 10000000; i++) {
        Math.random();
    }
    res.send(Math.random())
})

app.listen(3000, () => {
    console.log("Your application is running on port 3000")
})
