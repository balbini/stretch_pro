const http = require('http');
const port = process.env.PORT || 3000
const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const { Pool, Client } = require('pg')
const pool = new Pool()
const client = new Client()
const format = require('pg-format')

client.connect();

client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message)
  client.end()
})


app.get('/', function(req, res){
  res.send('hello world');
})



app.listen(port, () => console.log(`Server running on ${port}`));
