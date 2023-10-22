const database = require('../database');

async function sendMenfes(sender, receiver, message){
    try{
        const query = 'INSERT INTO list (sender, reciever, message) VALUES (?, ?, ?)';
        await database.query(query, [sender, receiver, message]);
        console.log('Menfes Dikirim')
    }catch(error){
        console.log(error);
    }
}

module.exports = {sendMenfes}