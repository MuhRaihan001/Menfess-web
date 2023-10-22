const express = require('express');
const app = express();
const config = require('./config.json');
const bodyParser = require('body-parser');
require('./server/database')

//function
const listMenfes = require('./server/function/list');
const { sendMenfes } = require('./server/function/send');

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/list', async (req, res) =>{
    const list = await listMenfes();
    res.send(list);
});

app.post('/add', async (req, res) =>{
    try{
        const from = req.body.from;
        const to = req.body.to;
        const message = req.body.message;
        await sendMenfes(from, to, message);
        res.send('Berhasil')
    }catch(error){
        res.send('Gagal');
    }
})

app.listen(config.port, () =>{
    console.log(`website run on: http://127.0.0.1:${config.port}`)
})
