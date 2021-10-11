const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;
const url = process.env.DB_URL; //url for db from .env
const apiKey = process.env.API_KEY; //for authorization from .env


app.use(express.json()); //parse json


//main address redirect to /locations
app.get('/', (req, res) => {
  res.redirect('/locations')
})


//getting all documents from db
app.get('/locations', (req, res) => {
    if(req.headers.apikey === apiKey) { //authorization
        MongoClient.connect(url, (err, dbs) => {
                if (err) throw err;
                const db = dbs.db("find-andrew");
                db.collection("locations").find({}).toArray((err, result) => {
                    if (err) throw err;
                    dbs.close();
                    res.json(result);
                });
            });
    } else res.json({res: 'access denied'}); //no authorization response
  });



  //adding new document to db
  app.post('/locations', (req, res) => {
    const data = req.body; //new object
    if(req.headers.apikey === apiKey) { //authorization
        MongoClient.connect(url, (err, dbs) => {
                if (err) throw err;
                const db = dbs.db("find-andrew");
                db.collection("locations").insertOne(data, (err, result) => {
                    if (err) throw err;
                    dbs.close();
                    res.json(result);
                });
            });
    } else res.json({res: 'acces denied'}); //no authorization response
  })

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})