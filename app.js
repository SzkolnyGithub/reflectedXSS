const express = require('express')
const app = express()

app.get('/', (req, res) => {
     let name = req.query.name
     res.send("Witaj " + name + "!")
}) // wykorzystac req.params zamiast req.query

app.get('/test/:name', (req, res) => {
     let name = req.params.name
     if(name.includes("<") || name.includes(">")) {
        return res.send("nie hakowac prosze")
     } else {
        res.send("Witaj " + name + "!") // <script>alert("shakowany")</script>
     }
})

app.listen(3000, () => {
    console.log(`Server is Listening on 3000`)
})