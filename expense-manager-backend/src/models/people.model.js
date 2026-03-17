import mongoose from 'mongoose';

const peopleSchema = mongoose.Schema({

    peopleCode :{
            type : String,
            maxlength : 50,
            trim : true
    },
    password : {
        type : String,
        required : true,
        minlength : 6
    },
    peopleName : {
        type : String,
        required : true,
        maxlength : 250,
        trim : true
    },
    email :{
        type : String,
        required : true,
        maxlength :150,
        unique : true,
        lowercase : true,
        trim : true
    },
    mobileNo :{
        type : String,
        required : true,
        maxlength : 50,
        trim : true
    },
    description :{
        type : String ,
        maxlength : 500,
        trim : true

    },
    userId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true
    },
    isActive :{
        type : Boolean,
        default : true
    }
    
    
},{
    timestamps : {
        createdAt : "created",
        updatedAt : "Updated",

    }
});

export default mongoose.model("people",peopleSchema)