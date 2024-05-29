import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup= async (req,res)=>{
   try {
    const{fullName,userName,email,password,confirmpassword,gender} = req.body;

    if(password!==confirmpassword) {
        return res.status(400).json({error:"Passwords Don't match"})
    }
    const user= await User.findOne({userName});

    if(user){
        return res.status(400).json({error:"UserName already Exists"})
    }

    //Hashed Password
    const salt = await bcrypt.genSalt(12);
    const hashedPassword= await bcrypt.hash(password, salt);

    const boyProfilePic =`https://avatar.iran.liara.run/public/boy?username=${userName}`
    const girlProfilePic =`https://avatar.iran.liara.run/public/girl?username=${userName}`
    const newUser= new User({
        fullName,
        userName,
        email,
        password: hashedPassword,
        gender,
        profilePic: gender === "male"? boyProfilePic: girlProfilePic
    })
     
    if(newUser){
        //Generate JWT Token
        generateTokenAndSetCookie(newUser._id,res)
        await newUser.save()

    res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        profilePic: newUser.profilePic
    })
    }else{
        res.status(400).json({error:"Invalid User Data"})
    }
   } catch (error) {
    console.log("Error in signup controller",error.message)
    res.status(500).json({error:"Internal Server Error"})
    
   }
}

export const login= async(req,res)=>{
    try {
        const{userName,password}= req.body
        const user = await User.findOne({userName});
        const isPasswordCorrect = await bcrypt.compare(password,user?.password||"")

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"Invalid UserName"})
        }
        generateTokenAndSetCookie(user._id,res)

    res.status(200).json({
        _id: user._id,
        fullName: user.fullName,
        userName: user.userName,
        profilePic: user.profilePic
    })
    } catch (error) {
        console.log("Error in login controller",error.message)
        res.status(500).json({error:"Internal Server Error"})
        
    }
}

export const logout= (req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"Logged out Successfully"})
        
    } catch (error) {
        console.log("Error in logout controller",error.message)
        res.status(500).json({error:"Internal Server Error"})
        
    }
    
}