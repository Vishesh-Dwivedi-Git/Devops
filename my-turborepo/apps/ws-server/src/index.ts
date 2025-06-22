import * as ws from 'ws';
import { client } from '@repo/db/client'; // Adjust the import path as necessary

const wss=new ws.Server({port: 8080});

wss.on('connection',async(ws)=>{
    await client.user.create({
        data:{
            name:Math.random().toString(36) ,
            password:Math.random().toString(36)
        }
    })
    console.log('new client connected');
    ws.send('Welcome to the WebSocket server!');
    
})  