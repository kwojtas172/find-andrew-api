const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();


app.use(express.json());

app.get('/', (req, res) => {
  res.redirect('/users')
})

app.get('/users', (req, res) => {
    if(req.headers.apikey === process.env.API_KEY) {
        res.json({
            user: 'example user'
        })
    } else res.json({res: 'access denied'})
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})