import express from "express";
const app = express();
const port = 8000;
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello form express server");
});
const database = process.env.DATABASE_URL;
app.listen(port, () => {
    console.log("Server is running on port: ", port);
    console.log(database);
});
//# sourceMappingURL=index.js.map