const express = require('express')
const app = express()

const outputText = 'Yes! We finally killed it just the way it should be done!!!';
app.get('/', (req, res) => res.send(outputText));

app.listen(3000, () => console.log('Example app listening on port 3000!'));