import {client} from '@repo/db/client'; // Adjust the import path as necessary


export default async function Home(){
     const users=await client.user.findFirst();

     return (
        <div>
          First name Hahaha:
          {users?.name}
          password:
          {users?.password}
          </div>
     )
}