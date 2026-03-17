import  app from './app.js';
import dotenv from 'dotenv';
import  mongoose from 'mongoose';
dotenv.config();

mongoose.connect(process.env.mongourl)
.then(()=>{
    console.log('DB connected');
    
})
.catch((err)=>{
    console.log(err);
    

})

app.listen(process.env.Port,()=>{
    console.log(`Server Started At @${process.env.Port}`);
    
})