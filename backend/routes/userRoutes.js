const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')

//GET per recuperare tutti gli utenti
router.get('/getAll', (req, res) => {
    User.findAll().then((users) => {
        res.json(users);
    }).catch((err) => {
        res.status(400).json({ message: 'Errore: ' + err });
    });
});


//POST crea un nuovo utente
router.post('/signup', async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    let passwordCypt = ''
    await bcrypt.hash(req.body.password, salt).then(hashedPassword => {
        if (hashedPassword) {
            passwordCypt = hashedPassword
        }
    })
    // crea una nuova istanza del modello
    const newUser = User.build({
        username: req.body.username,
        email: req.body.email,
        password: passwordCypt
    });
    // salva l'istanza nel database
    newUser.save().then(() => {
        res.status(201).json({ message: 'Utente creato con successo!' });
    }).catch((err) => {
        res.status(400).json({ message: 'Errore: ' + err });
    });
});


//TODO LOGIN

//TODO UPDATE User

//TODO DELETE User

module.exports = router