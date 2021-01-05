const fs = require('fs')
const express = require('express')
const app = express()

app.get('/books', function(req,res){
    fs.readFile(process.argv[3], function(err,data){ //doesn't work without err 
      if(err) return console.error(err) // you don't have to use err param
      res.json(JSON.parse(data))
    })
})

app.listen(process.argv[2])
