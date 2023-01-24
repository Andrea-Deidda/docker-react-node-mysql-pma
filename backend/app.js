const express = require('express');
const userRouter = require('./routes/userRoutes')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/user', userRouter)

app.get('/', (req, res) => {
    res.send("Hello, World! v2");
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});