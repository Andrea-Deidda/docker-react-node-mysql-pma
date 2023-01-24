const express = require('express');
const userRouter = require('./routes/userRoutes')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/user', userRouter)

app.get('/', (req, res) => {
    res.send("Hello, World! v3");
});

app.listen(3001, () => {
    console.log('Server started on port 3001 --> http://localhost:3001/');
});