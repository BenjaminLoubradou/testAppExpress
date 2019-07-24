const express = require('express')
const app = express()
const port = 3000

// datas = {
//     0: {
//         "userId": "34", 
//         "userName": "Hector"
//     },
//     1: {
//         "userId": "78", 
//         "userName": "victor"
//     }
// }




app.get('/', (req, res) => res.send('Hello world'))

app.get('/users', (req, res) => res.send(datas))

app.get('/users/:userId/books/:bookId', (req,res) => res.send(req.params))

app.get('/users/:name.:city', (req,res) => res.send(req.params))

app.listen(port, () => console.log(`Example app listening on port ${port}`))