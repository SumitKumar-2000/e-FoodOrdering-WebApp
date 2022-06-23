const Users = require('../model/userModel')
const bcrypt = require('bcrypt')
const generatetoken = require('../utils/jwt')


// user signUp
const registerUser = async (req,res) =>{
    const {name,email,password,confirmPassword} = req.body;

    if(confirmPassword !== password){
        res.status(404).send("confirm password doesn't match with password");
        return;
    }

    
    if(!name || !email || !password){
        res.status(401).send("Enter Missing Fields")
        return ;
    }
    
    else{
        const userExists = await Users.findOne({email});
        if(userExists){
            res.status(400).send("User already exists, please login!")
        }
        
        else{
            // using bcrypt for creating hash of password
            const salt = await bcrypt.genSalt();
            const hashedpassword = await bcrypt.hash(password,salt);
            
            const user = await Users.create({
                name,email,password:hashedpassword
            })

            if(user){
                res.status(200).json({
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    token: generatetoken(user._id),
                    msg: "User added successfully..."
                })
            }else{
                res.status(403).send("some backend error occured");
            }
       }
    }
}

// user singIn
const loginUser = async (req,res) =>{
    const {email,password} = req.body;  
    const user = await Users.findOne({email})

    if(user && await bcrypt.compare(password,user.password)){
        res.status(202).json({
            id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            token: generatetoken(user._id),
            msg: "user logined successfully"
        })
    }else{
        res.status(400).send("Invalid email or Password!")
    }
}

module.exports = {registerUser,loginUser}