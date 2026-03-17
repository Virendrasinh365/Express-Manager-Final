import * as  peopleService from '../services/people.service.js';


export const createPeople = async (req,res)=>{
    try{
        const people = await peopleService.createPeople(
            {
                ...req.body,
                userId : req.userId._id
            }
        );
        res.status(201).json({
            success : true,
            data : people,
            message : 'People created successfully'
        });
    }
    catch(err){
        res.status(400).json(`error is ${err}`)
    }
}


export const getPeoples = async (req,res)=>{
    const peoples = await peopleService.getAllPeople(req.user._id);
    res.json(peoples)
}


export const getPeople = async (req,res)=>{
    const people = await peopleService.getPeopleById(req.params.id,req.user._id);
    if(!people){
        return res.status(404).json({message : "people Not Found"});

    }
    res.json(people);
};



export const updatePeople = async (req,res)=>{
    const updatePeople = await peopleService.updatePeople(req.params.id,req.user._id,req.body);
    if(!updatePeople){
        res.status(404).json({message : 'People not found'})
    }
    res.json(updatePeople);
}


export const deletePeople = async (req,res)=>{
    const deletePeople = await peopleService.deletePeople(req.params.id,req.user._id);

    if(!deletePeople){
        res.status(404).json({message:'People not Found'});
    };
    res.json({message:'people deleted Successfully'});
};
