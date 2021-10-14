const express = require('express');
const userRouter = require('./routes/UserRoutes.js');

const SERVER = 8081;
const app = express();
app.use(express.json());

app.use(userRouter);

app.get('/', (req, res) => {
    res.send("<h1>Welcome to me Assignment 1!</h1>");
});

app.listen(SERVER, () => {
    console.log('Server is running at ', SERVER);
});