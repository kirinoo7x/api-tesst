const { Console } = require('console')
const express = require('express')
const app = express()
const path = require('path')
const port = 9000
const datas = require('./User')
const logger = require('./middleware/logger')




// app.use(logger)


app.get('/api/user/:id', (req, res) => {
    let found = datas.some(data => data.id === parseInt(req.params.id))
    if(found){
        res.json(datas.filter(data => data.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({msg:'NO data'})
    }
})


app.post('/api/user', (req, res) => {
    res.json(datas)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})