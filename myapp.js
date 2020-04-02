const express = require('express')
const app = express()
const port = 3000

app.post('/', (req, res) => res.send('Got a POST request'))

app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))



