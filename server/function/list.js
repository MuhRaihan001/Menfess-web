const database = require('../database');

module.exports = () =>{
    const query = 'SELECT * FROM list'
    return new Promise((resolve, reject) =>{
        database.query(query, [], (error, result) =>{
            if(error){
                reject(error);
            }else{
                resolve(result)
            }
        })
    })
}