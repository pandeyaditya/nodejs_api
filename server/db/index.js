const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 10,
    password: '',
    user: 'root',
    database: 'chirpr',
    host: 'localhost',
    port: '3306'
});

let chirprdb = {};

chirprdb.all = () => {    
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM chirps`, (err,results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

chirprdb.one = (id) => {
    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM chirps WHERE id = ?`, [id], (err,results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};
module.exports = chirprdb;