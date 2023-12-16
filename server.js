const express = require('express')
const pool = require('./database')
const cors = require('cors')
const port = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())

app.get('/posts', async(req, res) => {
    try {
        const posts = await pool.query("SELECT * FROM posts")
        res.json(posts.rows)
    } catch (err) {
        console.error(err.message)
    }
})



app.get('/posts/:id', async(req, res) => {
    try {
        const { id } = req.params
        const posts = await pool.query("SELECT * FROM posts WHERE id = $1", [id])
        res.json(posts.rows[0])
    } catch (err) {
        console.error(err.message)
    }
}); 

app.listen(port, () => {
    console.log("Server is listening to port " + port)
})