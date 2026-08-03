import express from "express";
const app = express();
app.get('/signin', (req, res) => {
    res.status(200).json({
        message: "This is signin endpoint"
    });
});
app.get('/signup', (req, res) => {
    res.status(200).json({
        message: "This is signout endpoint"
    });
});
app.get('/users', (req, res) => {
    res.status(200).json({
        message: "All users"
    });
});
app.listen(3000, () => {
    console.log("server is running on port 3000");
});
//# sourceMappingURL=index.js.map