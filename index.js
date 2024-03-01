const express = require('express');
const { readFile } = require('fs').promises;

const app = express();

app.get('/', async (req, res) => {
    res.send( await readFile('./home.html', 'utf8', (err, html) => {
        if(err) {
            res.status(500).send('sorry, out of order')
        }
    }))
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('app available on http://localhost:' + port))
