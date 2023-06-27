import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import { userDetails } from '../redux/UserSlice'

const Home = () => {


    const [userData, setUserData] = useState([])
    const dispatch = useDispatch();



    const fetchUserData = async () => {

        try {

            const res = await axios.get("https://panorbit.in/api/users.json");
            setUserData(res.data.users);

        } catch (error) {
            console.log(error)
        }

    }


    useEffect(() => {
        fetchUserData();
    }, [])

    return (
        <div className="homeContainer">
            <div className='empty'></div>
            <div className='background_wave'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#4c4ac8" fill-opacity="1" d="M0,224L60,234.7C120,245,240,267,360,234.7C480,203,600,117,720,117.3C840,117,960,203,1080,245.3C1200,288,1320,288,1380,288L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                </svg>
            </div>
            <div className='CardContainer'>
                <div className="card" >
                    
                    <div className='cardhead'>
                        <h6>Select an account</h6>
                    </div>

                    {
                        userData.map((eachData) => {
                            return (
                                <>
                                    <Link to={{pathname:`/profile/${eachData.id}`}} className='anger' onClick={()=>dispatch(userDetails(eachData))}>
                                        <div className='cardbody' key={eachData.id} >
                                            <img className='userImg' src={eachData.profilepicture} alt="" />
                                            <h6>{eachData.name}</h6>
                                        </div>
                                    </Link>
                                </>

                            )
                        })
                    }
                </div>



            </div>

        </div>
    )
}

export default Home