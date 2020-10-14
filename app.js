const express = require('express')
const generateMessage = require('./generateMessage')
const app = express()
const port = 3000

app.get('/hello-world', (req, res) => {
    generateMessage().then(response => {

        res.send(response);
    });

})

app.listen(port, () => {
    console.log(`server started`)
})
