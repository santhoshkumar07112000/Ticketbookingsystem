const Users = require("../Models/Usermodel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()

exports.register = async (req,res) => {

    try {
    
        const { username , email , phoneNumber , password } = req.body

        if(!(username && email && phoneNumber && password)){
            return res.status(404).json({
                error: "please send all the required fields"
            })
        }


        const isUsersWithSameEmail = await Users.findOne({
            email: email
        })
    


        if(isUsersWithSameEmail){
            return res.status(400).json({
                error: "email is not available"
            })
        }

        
       

        const trimmedPassword = password.trim()
        
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

        const isValidPassword = passwordRegex.test(trimmedPassword);

    

        if(!isValidPassword){
            return res.status(400).json({
                error: "password didn't met the expectation"
            })
        }

        const hashedPassword = await bcrypt.hash(password,10);


        if(hashedPassword){

            const newUserData = new Users({
                username: username,
                email: email,
                phoneNumber: phoneNumber,
                Password: hashedPassword
            })

            await newUserData.save();

            return res.status(200).json({
                message: "user registered successfully"
            })

        }

    } catch (error) {

        return res.status(500).json({
            error: error.message
        })
        
    }

}

exports.login = async (req,res) => {
   try {
       const { email , password } = req.body

       if(!(email && password)){
           return res.status(404).json({
              error: "please send all the required fields"
           })
       }

       const isExistingUser = await Users.findOne({
         email: email
       })

       if(!(isExistingUser)){
        return res.status(404).json({
            error: "user not available"
        })
       }


       const isPasswordCorrect = bcrypt.compare(password,isExistingUser.Password);

       if(!(isPasswordCorrect)){
        return res.status(400).json({
            error: "invalid password"
        })
       }

       const payloadData = {
        username: isExistingUser.username,
        email: isExistingUser.email,
        role: isExistingUser.role,
        phoneNumber: isExistingUser.phoneNumber
       }

       const token = jwt.sign(payloadData,process.env.SECRET_KEY,{
        expiresIn: "1hr"
       });

       const response = {
        token: token,
        message: "successfull login",
        data: payloadData,
       }

       return res.status(200).json(response);    
   } catch (error) {

       return res.status(500).json({
            error: error.message
       })
    
   }
}


exports.checktoken = (req,res) => {
   try {

    const token = req.headers.authorization;

    if(!(token)){
        return res.status(404).json({
            error: "token not found"
        })
    } 

    const payloadData = jwt.verify(token,process.env.SECRET_KEY);

    if(!(payloadData)){
        return res.status(400).json({
            error: "invalid token"
        })
    }

    return res.status(200).json({
        ...payloadData
    })
      
   } catch (error) {

    return res.status(500).json({
        error: error.message
    })
    
   }
}


