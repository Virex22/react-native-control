const UsersService = require('../services/user');
var SHA256 = require("crypto-js/sha256");

exports.login = (req, res) => {
    const { email, password } = req.body;
    console.log("/user/login called !");
    UsersService.login(email, SHA256(password).toString())
        .then(token => {
            res.status(200).json({ message : "Utilisateur connecté", token : token});
        }
        ).catch(err => {
            res.status(500).json({message : "Utilisateur non connecté", error : err});
        }
    );
}

exports.register = (req, res) => {
    const data = req.body;
    console.log("/user/register called !");
    UsersService.register(data)
        .then(token => {
            res.status(200).json({ message : "Utilisateur enregistré", token : token});
        }
        ).catch(err => {
            res.status(500).json({message : "Utilisateur non enregistré",  error : err});
        }
    );
}
