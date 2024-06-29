import React from 'react'
import { useParams } from 'react-router-dom'
import supabase from '../../config/connect';
import { useAppSelector } from '../../tools/store';

const Account = () => {
    const {token} = useParams();
    const user = useAppSelector((p:any)=>p.user);
    const filterUser = user.find((p:any)=>p.token == token)

    
  return (
    <div>
        {!filterUser? <p>Loading...</p>:<ul>
        <li>{filterUser.fullname}</li>
        <li>{filterUser.tel}</li>
        <li>{filterUser.birthday}</li>
        <li>{filterUser.email}</li>
        </ul>}
    </div>
  )
}

export default Account