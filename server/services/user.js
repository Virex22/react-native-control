
const config = require('../config');
const jwt = require('jsonwebtoken');
const db = require('./bdd');
const { SHA256 } = require('crypto-js');


exports.login =  (email,password) => {
    return new Promise(async(resolve, reject) => {
        let user = await db.query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password]);
            if (user.length === 0){
                reject('User not found');
                return;
            }
        

        jwt.sign({ user : user[0] }, config.jwt.secret, (err, token) => {
            if (err) throw err;
            resolve(token);
        });
    });
}

exports.register = (data) => {
    data.password = SHA256(data.password).toString();
    return new Promise((resolve, reject) => {
        let user = db.query('SELECT * FROM user WHERE email = ?', [data.email]);
            if (user.length > 0)
                reject('User already exists');

        let result = db.query('INSERT INTO user (email, password, username,phone) VALUES (?,?,?,?)', [data.email, data.password, data.username, data.phone]);
            if (result.affectedRows === 0)
                reject('User not created');

        jwt.sign({ user : result.insertId }, config.jwt.secret, (err, token) => {
            if (err) throw err;
            resolve(token);
        });
    });
}

