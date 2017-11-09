const express = require('express')
const app = express()

const outputText = "Their Father! Baasbanks babe just bounced him cos he couldn't afford I-phone";
app.get('/', (req, res) => res.send(outputText));

app.listen(3000, () => console.log('Example app listening on port 3000!'));