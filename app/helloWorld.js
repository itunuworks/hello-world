const express = require('express')
const app = express()

const outputText = 'Now the actual test!';
app.get('/', (req, res) => res.send(outputText));

app.listen(3000, () => console.log('Example app listening on port 3000!'));