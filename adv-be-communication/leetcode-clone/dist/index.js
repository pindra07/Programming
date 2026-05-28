import express from "express";
import { createClient } from "redis";
const app = express();
app.use(express.json());
const client = createClient(); // creating redis client
client.on("error", (err) => console.log("Redis Client Error", err));
app.post("/submit", async function (req, res) {
    const problemId = req.body.problemId;
    const code = req.body.code;
    const language = req.body.language;
    try {
        await client.lPush("problems", JSON.stringify({ code, language, problemId }));
        // store in DB
        res.status(200).send("Submission received and stored");
    }
    catch (error) {
        console.error("Redis Error", error);
        res.status(500).send("Failed to store submission");
    }
});
async function startServer() {
    try {
        await client.connect(); // connecting to redis client
        console.log("Connected to redis");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    }
    catch (error) {
        console.error("Failed to connect to Redis", error);
    }
}
startServer();
//# sourceMappingURL=index.js.map