import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const SignOutComponents = () => {

    const data = useSelector(store => store.user.items);
    const navigate = useNavigate();
   
    const handleSignOut = ()=>{
        
        navigate("/");
    }

  return (
    <div className='SignOutCard'>
         <img src={data.profilepicture} alt='...' style={{width:"70px",borderRadius:"50px"}}/>
         <h6>{data.name}</h6>
         <h6 style={{color:"#c9c9ce"}}>{data.email}</h6>
         <hr style={{color:"black"}}/>
       <button className='btn btn-danger' style={{cursor:"pointer"}} onClick={handleSignOut} >SignOut</button>
    </div>
  )
}

export default SignOutComponents