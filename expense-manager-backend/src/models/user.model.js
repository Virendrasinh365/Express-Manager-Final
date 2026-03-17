import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
    userName :{
        type : String,
        required : true,
        maxlength : 250
    },
    emailAddress : {
        type : String,
        required : true,
        unique : true,
        maxlength : 500
    },
    password : {
        type : String,
        required : true,
      
    },
    mobileNo : {
        type : String,
        required : true,
        maxlength : 50
    },
    profileImage : {
        type : String,
        maxlength : 500
    }
},{
    timestamps : {
        createdAt : "Created",
        updatedAt : "updated"
    }
});
userSchema.pre("save", async function () {

  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

});

userSchema.methods.matchPassword = async function (enterdPassword){
    return await bcrypt.compare(enterdPassword,this.password);
}

export default mongoose.model("User",userSchema)