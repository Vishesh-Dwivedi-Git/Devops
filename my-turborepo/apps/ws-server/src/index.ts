import * as ws from 'ws';

const wss=new ws.Server({port: 8080});

wss.on('connection',(ws)=>{
    console.log('new client connected');
    ws.on('message',(message=>{
         console.log('recieved: %s',message);
         ws.send('hell from sever ');
    }))
})