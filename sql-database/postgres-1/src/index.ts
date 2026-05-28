import { Client } from "pg";
import express from "express";

const app = express();
app.use(express.json());

const pgClient = new Client( // creating an pg client
  "postgresql://neondb_owner:npg_n7oqXFW0ZAGi@ep-lively-tree-aevi88sp-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
);

app.post("/signup", async function (req, res) {
  const { username, password, email, city, country, street, pincode } =
    req.body;

  try {
    const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`;
    const response = await pgClient.query(insertQuery, [
      username,
      email,
      password,
    ]);

    res.json({
      message: "You have signed up",
    })
  } catch (error) {
    console.log(error);
    res.json({
      message: "Error while signing up",
    });
  }
});

async function main() {
  await pgClient.connect(); // connecting to pg client
  const response = await pgClient.query("SELECT * from weather"); // sending query to pg client
  console.log(response);
}

main();

