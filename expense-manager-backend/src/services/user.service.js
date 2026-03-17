import User from '../models/user.model.js';


export const createUser = async(data)=>{
    return await User.create(data);

}

export const getAllUser = async ()=>{
    return await User.find();
}

export const getUserById = async (id)=>{
    return await User.findById(id);
}

export const updateUser = async (id,data)=>{
    return await User.findByIdAndUpdate(id,data,{new :true})
}


export const deleteUser = async (id)=>{
    return await User.findByIdAndDelete(id);
}


export const loginUser = async (emailAddress,password)=>{
    const user = await User.findOne({emailAddress});

    if(!user) {
        throw new Error("User Not Found");
    }
    const isMatch = await user.matchPassword(password);
    if(!isMatch){
        throw new Error("Invaild Password ");
    }
    return user;
}



