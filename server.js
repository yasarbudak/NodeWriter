const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

// Middleware for parsing json
app.use(express.json());

app.get('/', (req, res) =>{
res.send('Welcome to NodeWriter!');
});

app.use('/users', userRoutes);

const PORT = 3000;
app.listen(PORT, ()=>{
console.log("Server is running at http://localhost:${PORT}");
});