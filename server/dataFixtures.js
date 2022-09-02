let mysql = require('mysql');

var SHA256 = require("crypto-js/sha256");

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : ''
  });
connection.connect();

// Supprime la base de données "ContactCloud"
connection.query('DROP DATABASE IF EXISTS ContactCloud', function (error, results, fields) {
    if (error) throw error;
    console.log('Database deleted');
} );

// Crée la base de données "ContactCloud"
connection.query('CREATE DATABASE IF NOT EXISTS ContactCloud', function (error, results, fields) {
    if (error) throw error;
    console.log('Database created');
} );  

// Connexion à la base de données "ContactCloud"
connection.query('USE ContactCloud', function (error, results, fields) {
    if (error) throw error;
    console.log('Database connected');
});

// // Crée la table "User"

let reqCreateUserTable = `
CREATE TABLE IF NOT EXISTS User (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    lastPosition VARCHAR(255),
    lastPositionAt DATETIME
)`;
connection.query(reqCreateUserTable, function (error, results, fields) {
    if (error) throw error;
    console.log('User table created');
});

// Crée la table "Contact"
let reqCreateContactTable = `
CREATE TABLE IF NOT EXISTS Contact (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    FOREIGN KEY (userId) REFERENCES User(id)
);
`

connection.query(reqCreateContactTable, function (error, results, fields) {
    if (error) throw error;
    console.log('Contact table created');
});

// Crée 10 User par défaut
let reqCreateDefaultUser = "INSERT INTO User (username, password, email, phone, lastPosition, lastPositionAt) VALUES";
for (let i = 0; i < 10; i++)
    reqCreateDefaultUser += `('user${i}', '${SHA256(`user${i}`).toString()}', 'admin${i}@gmail.com', '060000000${i}', 'Paris', NOW()),`;
reqCreateDefaultUser = reqCreateDefaultUser.slice(0, -1);
connection.query(reqCreateDefaultUser, function (error, results, fields) {
    if (error) throw error;
    console.log('Default users created');
} );

// Crée 100 Contacts par défaut (10 par user)
let reqCreateDefaultContact = "INSERT INTO Contact (userId, name, phone) VALUES";

for (let i = 0; i < 10; i++)
    for (let j = 0; j < 10; j++)
        reqCreateDefaultContact += `(${i}, 'contact${i}${j}', '0600000${i}${j}'),`;

reqCreateDefaultContact = reqCreateDefaultContact.slice(0, -1);
connection.query(reqCreateDefaultContact, function (error, results, fields) {
    if (error) throw error;
    console.log('Default contacts created');
});

connection.end();