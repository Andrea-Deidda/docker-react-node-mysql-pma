const Sequelize = require('sequelize');

// crea una nuova istanza di Sequelize in locale
const sequelize = new Sequelize('demoDb', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
}); 

// //per docker
// const sequelize = new Sequelize('demoDb', 'root', 'rootpassword', {
//     host: 'db',
//     dialect: 'mysql',
// }); 


// definisci il modello della tabella "utenti"
const User = sequelize.define('users', {
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String
    }
});


module.exports = User;