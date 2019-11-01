const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  console.log("Endpoint hit!")
  res.send('Hello, Elasticbeanstalk!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))