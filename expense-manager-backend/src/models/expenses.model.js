import mongoose from "mongoose";

const expenseSchema = mongoose.Schema({
    expenseDate: {
        type: Date,
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "category"
        
    },
    subCategoryId : {
        type  : mongoose.Schema.Types.ObjectId,
        ref : "subCategory"
    },
    peopleId : {
        type  : mongoose.Schema.Types.ObjectId,
        ref : "people",
        required : true
    },
    projectId  : {
        type  : mongoose.Schema.Types.ObjectId,
        ref : "project"
    },
    amount : {
        type : Number,
        required : true
    },
    expenseDetail : {
        type : String,
        maxlength : 500
    },
    attachmentPath : {
        type : String ,
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
        createdAt : " Created",
        updatedAt : "Updated"
    },
    toJSON : {
        transform(doc,ret){
            if(ret.expenseDate){
                ret.expenseDate = ret.expenseDate.toISOString().split("T")[0];
            }
            return ret;
        }
    }
})
export default mongoose.model("expense",expenseSchema);