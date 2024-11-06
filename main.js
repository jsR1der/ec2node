const express = require('express')
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/getReq', (req, res) => {
    res.json({value: 'One'})
})


app.listen(3000, () => {
    console.log(`Server on ${3000}`)
})