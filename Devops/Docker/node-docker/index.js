const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("Server in Docker has started on port 3000")
})

app.listen(3000, () => {
    console.log(`your server is running on port 3000`)
})

console.log("ENV Variable")
// console.log(process.env.DATABASE_URL)


