import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    projectName : {
        type : String,
        required : true,
        maxlength : 250

    },
    projectLogo : {
            type : String,
            maxlength : 250
    },
    projectStartDate : {
        type : Date,
    },
    projectEndDate : {
        type : Date
    },
    projectDetail : {
        type : String,
        maxlength : 500,
    },
    description : {
        type : String,
        maxlength : 500
    },
    userId :{
            type : mongoose.Schema.Types.ObjectId,
            ref : "user",
            required : true
        },
    isActive : {
        type : Boolean
    }
},{
   timestamps : {
        createdAt : " created",
        updatedAt : "Updated",

    },
    toJSON: {
      transform(doc, ret) {
         if (ret.projectStartDate) {
            ret.projectStartDate =
              ret.projectStartDate.toISOString().split("T")[0];
         }

         if (ret.projectEndDate) {
            ret.projectEndDate =
              ret.projectEndDate.toISOString().split("T")[0];
         }

         return ret;
      }
    }
})

export default mongoose.model("project",projectSchema)