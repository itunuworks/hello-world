const express = require('express')
const app = express()

const outputText = 'NO! We are certain we are GREAT!!!';
app.get('/', (req, res) => res.send(outputText));

app.listen(3000, () => console.log('Example app listening on port 3000!'));