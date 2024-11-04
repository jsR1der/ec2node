const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.json({value: 'One'})
})


app.listen(3000, () => {
    console.log(`Server on ${3000}`)
})