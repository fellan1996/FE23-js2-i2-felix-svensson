const express = require('express');
const { readFile } = require('fs');

const app = express();

app.get('/', (req, res) => {
    readFile('./home.html', 'utf8', (err, html) => {
        if(err) {
            res.status(500).send('sorry, out of order')
        }
        res.send(html);
    })
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('app available on http://localhost:' + port))
