const express = require("express");
const pool = require("./database");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/posts", async (req, res) => {
    try {
        const posts = await pool.query(
            "SELECT * FROM posts ORDER BY timestamp DESC"
        );
        res.json(posts.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/posts/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const posts = await pool.query("SELECT * FROM posts WHERE id = $1", [
            id,
        ]);
        res.json(posts.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/posts/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const post = req.body;
        const updatepost = await pool.query(
            "UPDATE posts SET (text, timestamp) = ($2, $3) WHERE id = $1",
            [id, post.text, post.timestamp]
        );
        res.json(updatepost);
    } catch (err) {
        console.error(err.message);
    }
});

app.delete("/posts/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletepost = await pool.query("DELETE FROM posts WHERE id = $1", [
            id,
        ]);
        res.json(deletepost);
    } catch (err) {
        console.error(err.message)
    }
});

app.delete("/posts", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteposts = await pool.query("DELETE FROM posts")
        res.json(deleteposts)
    } catch (err) {
        console.error(err.message)
    }
});

app.post("/posts", async (req, res) => {
    try {
        const post = req.body;
        const addpost = await pool.query(
            "INSERT INTO posts (id, timestamp, text, author) VALUES (default, $1, $2, $3)",
            [post.timestamp, post.text, post.author]
        );
        res.json(addpost)
    } catch (err) {
        console.error(err.message)
    }
});

//User registration

app.post("/register", async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const user = await pool.query(
            "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
            [email, hashedPassword]
        );

        const userId = user.rows[0].id;

        const token = jwt.sign({ userId, email }, "yourSecretKey", { expiresIn: "1h" });

        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(port, () => {
    console.log("Server is listening to port " + port);
});
