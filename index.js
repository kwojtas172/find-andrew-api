const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;
const url = process.env.DB_URL;


app.use(express.json());

app.get('/', (req, res) => {
  res.redirect('/locations')
})

app.get('/locations', (req, res) => {
    if(req.headers.apikey === process.env.API_KEY) {

        MongoClient.connect(url, function(err, dbs) {
            if (err) throw err;
            const db = dbs.db("find-andrew");
            db.collection("locations").find({}).toArray(function(err, result) {
              if (err) throw err;
              dbs.close();
              res.json(result)
            });
          });


    } else res.json({res: 'access denied'})
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})