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


//LOGIN
router.post('/login', async (req, res) => {
    email = req.body.email
    password = req.body.password

    const checkUser = await User.findOne({
        where: {
            email: email
        }
    })
    if(checkUser != null){
        console.log('utente esistente', checkUser.email)
        bcrypt.compare(password, checkUser.password, function(err, response){
            if(!err){
                if(response){
                    res.json({status: 'ok', data:{ user: checkUser}})
                } else {
                    res.status(401).send("utente o passwrd errato")
                }
            }
        })
    } else {
        res.status(401).send("utente o passwrd errato")
    }
})

//TODO UPDATE User

//TODO DELETE User

module.exports = router