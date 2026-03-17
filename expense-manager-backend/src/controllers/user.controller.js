import * as  userService from '../services/user.service.js';
import {generateToken} from '../utils/generateToken.js';



export const createUser = async (req,res)=>{
    try{
        
        const user = await userService.createUser(req.body);
        
        res.status(201).json({
            success : true,
            data : user,
            message : 'user created successfully'
        });
    }
    catch(err){
        
        res.status(400).json(`error is ${err}`)
    }
}


export const getUsers = async (req,res)=>{
    const Users = await userService.getAllUser();
    res.json(Users)
}


export const getUser = async (req,res)=>{
    const user = await userService.getUserById(req.params.id);
    if(!user){
        return res.status(404).json({message : "user Not Found"});

    }
    res.json(user);
};



export const updateUser = async (req,res)=>{
    const updateUser = await userService.updateUser(req.params.id,req.body);
    if(!updateUser){
        res.status(404).json({message : 'user not found'})
    }
    res.json(updateUser);
}


export const deleteUser = async (req,res)=>{
    const deleteUser = await userService.deleteUser(req.params.id);

    if(!deleteUser){
        res.status(404).json({message:'user not Found'});
    };
    res.json({message:'user deleted Successfully'});
};


export const login = async (req,res)=>{
    try{
    const {emailAddress ,password}= req.body;
    
    const user = await userService.loginUser(emailAddress,password);

    res.json({
        _id : user._id,
        userName : user.userName,
        emailAddress : user.emailAddress,
        token : generateToken(user._id)
    });
    }catch(err){
        res.status(400).json({message : err.message});
    }
};
