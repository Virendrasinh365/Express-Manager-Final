import People from '../models/people.model.js';


export const createPeople = async(data)=>{
    return await People.create(data);

}

export const getAllPeople = async (userId)=>{
    return await People.find({userId});
}

export const getPeopleById = async (id,userId)=>{
    return await People.findById({_id : id , userId});
}

export const updatePeople = async (id,userId,data)=>{
    return await People.findByIdAndUpdate({_id : id,userId},data,{new :true})
}


export const deletePeople = async (id,userId)=>{
    return await People.findIdAndDelete({_id : id,userId});
}



