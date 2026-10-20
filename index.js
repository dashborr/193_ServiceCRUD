import express from 'express'
import pg from 'pg'
const app = express()
const port = 3000
const { Pool } = pg
app.use(express.json())
app.use(
    express.urlencoded({
        extended: true
    })
)
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mahasiswa',
    password: '212121',
    port: 5432
})

const getBiodata = (req, res) => {
    pool.query('SELECT * FROM biodata')
    .then(testData => {
        res.json(testData.rows);
    })
    .catch(err => {
        console.error(err);
        res.status(500).send('Terjadi kesalahan pada server');
    });
}