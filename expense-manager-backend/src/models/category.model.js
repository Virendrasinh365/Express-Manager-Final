import mongoose from  'mongoose';

const categorySchema = mongoose.Schema({

    categoryName : {
        type : String,
        required : true,
        maxlength : 250
    },
    logoPath : {
        type : String,
        maxlength : 250
    },
    isExpense : {
        type : Boolean,
        required : true,
        
    },
    isIncome : {
        type : Boolean,
        required : true,

    },
    isActive : {
        type : Boolean,
        required : true
    },
    description : {
        type : String,
        maxlength : 500,

    },
    userId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required :true
    },
    sequence : {
        type : Number
    }

},{
    timestamps : {
        createdAt : "created",
        updatedAt : "Updated",
    }
});
export default mongoose.model('category',categorySchema);
