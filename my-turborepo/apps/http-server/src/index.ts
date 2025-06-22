import express from 'express';
import {client} from '@repo/db/client';
const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello from HTTP server");
});

app.post( "/signup",async (req , res)=>{
      const {name  , password} = req.body; 
     const user= await client.user.create({
            data:{
                 name, 
                 password
            }
     })
     res.json({
         message:"User Created Successfully",
        id: user.id, 
     })
    
})
app.listen(3000,()=>{
     console.log("server is running on port 3000");
})