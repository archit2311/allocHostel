const express = require("express");
const router = express.Router();
const User = require("../models/user")

router.post("/register", async(req, res) => {
  
    const {name , email ,regno, password, } = req.body

    const newUser = new User({name , email ,regno, password})

    try {
        newUser.save()
        res.send('User Registered successfully')
    } catch (error) {
         return res.status(400).json({ message: error });
    }

});


router.post("/login", async(req, res) => {

    const {email , password} = req.body

    try {
        
        const user = await User.findOne({email , password})

        // if(user.length > 0)
        // {
        //     const currentUser = {
        //         name : user[0].name , 
        //         email : user[0].email, 
        //         isAdmin : user[0].isAdmin, 
        //         _id : user[0]._id
        //     }
        //     res.send(currentUser);
        // }
        if(user)
        {
            const temp={
                name:user.name,
                gender:user.gender,
                email:user.email,
                isAdmin:user.isAdmin,
                _id:user._id
            }
            res.send(temp)
        }
        else{
            return res.status(400).json({ message: 'User Login Failed' });
        }
    } catch (error) {
        console.log(error)
           return res.status(400).json({ message: 'Something went wrong' });
    }
  
});
module.exports = router;