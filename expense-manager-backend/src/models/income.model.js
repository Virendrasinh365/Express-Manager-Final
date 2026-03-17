import mongoose from 'mongoose';

const incomeSchema = mongoose.Schema({
    incomeDate : {
        type : Date,
        required : true
    },
    categoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "category"
    },
    subCategoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "subCategory"
    },
    peopleID :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "people",
        required : true
    },
    projectId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "project"
    },
    amount :{
        type : Number,
        required : true
    },
    incomeDetail : {
        type : String,
        maxlength : 500
    },
    attachmentPath : {
        type : String,
        maxlength : 250
    },
    description : {
        type : String,
        maxlength : 500
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true
    }   
},{
    timestamps : {
        createdAt : 'Created',
        updatedAt : 'Updated'
    },
    toJSON : {
        transform (doc,ret){
            if(ret.incomeDate){
                ret.incomeDate = ret.incomeDate.toISOString().split("T")[0]
            }
            return ret;
        }
    }
})

export default mongoose.model("income",incomeSchema)