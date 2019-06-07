const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');
const app = express();

app.post('/login', (req, res) =>{

    let body = req.body;

    Usuario.findOne({email: body.email}, (err, usuarioDB) =>{
        if(err){
            return res.status(500).json({
                ok:false,
                err
            })
        }

        if( !usuarioDB) {
            return res.status(400).json({
                ok:false,
                err: {
                    message: '(Usuario) o contraseña incorrecto'
                }
            });
        }

        if (bcrypt.compareSync(body.password, usuarioDB.password)){
            return res.status8
        }
    })
    

});

module.exports = app;