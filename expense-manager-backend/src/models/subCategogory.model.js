import mongoose from "mongoose";;

const subCategorySchema = mongoose.Schema({
    categoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "category",
        required : true
    },
    subCategoryName : {
        type : String,
        maxlength : 250,
        required : true
    },
    logoPath : {
        type : String,
        maxlength : 250
    },
    isExpense : {
        type : Boolean,
        required : true
    },
    isIncome : {
        type : Boolean,
        required : true
    },
    isActive : {
        type : Boolean,
        required : true
    },
    description : {
        type : String,
        maxlength : 500
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true
    },
    sequence : {
        type : Number
    }
},{
    timestamps : {
        createdAt : "Created",
        updatedAt : "updated"
    }
})
export default mongoose.model("subCategory",subCategorySchema)