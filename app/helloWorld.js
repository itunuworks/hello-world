const express = require('express')
const app = express()

const outputText = 'Devops is the Bomb. Like the Explosion!!!';
app.get('/', (req, res) => res.send(outputText));

app.listen(3000, () => console.log('Example app listening on port 3000!'));