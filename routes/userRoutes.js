const express = require('express');
const router = express.Router();

const users = [];

// Endpoint to add an user
router.post('/register', (req, res)=>{
    const{name, email} = req.body;
    if(!name || !email){
        return res.status(400).json({message: 'name and email are required'});
    }
    const newUser = {id: users.length + 1, name, email};
    users.push(newUser);
    res.status(201).json(newUser);
});

// Endpoint to get all users
router.get('/list', (req,res)=>{
    res.status(200).json(users);
});

// Endpoint to update a user's information
router.put('/update/:id', (req, res)=>{
    const {id} = req.params;
    const {name, email} = req.body;

    const user = users.find((u)=>u.id === parseInt(id));
    if(!user){
        return res.status(404).json({message: 'User not found'});
    }

    if(name) user.name = name;
    if(email) user.email = email;

    res.status(200).json(user);
})

// Endpoint to delete a user
router.delete('/delete/:id', (req, res)=>{
    const{id} = req.params;

    const userIndex = users.findIndex((u)=>u.id === parseInt(id));
    if(userIndex === -1){
        return res.status(400).json({message: 'User not found'});
    }

    const deletedUser = users.splice(userIndex, 1);
    res.status(200).json({message: 'User deleted successfully', user: deletedUser[0]});
})

module.exports = router;