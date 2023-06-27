import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import loctionIcon from "../assets/loct.png";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import SignOutComponents from '../Components/SignOutComponents';
import ChatsComponents from '../Components/ChatsComponents';



const Profile = () => {

  const data = useSelector(store => store.user.items);
  const [signOutPopUp, setSignOutPopUp] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const navigate = useNavigate();



  const customIcon = new Icon({
    iconUrl: [loctionIcon],
    IconSize: [28, 28]
  })

  const handleClickPopUp = () => {
    setSignOutPopUp(!signOutPopUp);
  }

  const handleChat = () => {
    setChatOpen(!chatOpen);
  }

  const handleHome = () => {
    navigate("/")
  }

  return (
    <div className="profileContainer">
      <div className='sidebar'>
        <div className='catogeries'>

          <div className="anger" onClick={handleHome}>
            <h6>Profile</h6>
          </div>

          <hr />
          <Link to="/posts" className="anger">
            <div>
              <h6>Posts</h6>
            </div>
          </Link>
          <hr />
          <Link to="/gallery" className="anger">
            <div>
              <h6>Gallery</h6>
            </div>
          </Link>
          <hr />
          <Link to="/todo" className="anger">
            <div>
              <h6>ToDo</h6>
            </div>
          </Link>
        </div>
      </div>
      <div className='mainContainer'>
        <div className='profilePageHead'>
          <div className='m-3 p-2'>
            <h5 style={{ fontWeight: "bold" }}>Profile</h5>
          </div>
          <div className='userProfileImg'>
            <img className='userImg m-2' src={data.profilepicture} alt={data.name} onClick={handleClickPopUp} />
            <h5 className='p-3'>{data.name}</h5>
          </div>
        </div>
        <hr style={{ color: "black" }} />
        {
          signOutPopUp ? <SignOutComponents /> : ""
        }
        <div className='userInfoContainer'>

          <div className='infoContainer1'>
            <div style={{ textAlign: "center" }}>
              <img className='userInfoImg' src={data.profilepicture} alt={data.name} />
              <h4>{data.name}</h4>
            </div>
            <div className='userInfoDetails'>
              <div style={{ textAlign: "end", color: "#bbbbc0" }}>
                <h6 >Username :</h6>
                <h6 >e-mail   : </h6>
                <h6 >Phone    : </h6>
                <h6 >Website  :</h6>
              </div>

              <div>
                <h6 style={{ color: "black" }}>{data.username}</h6>
                <h6 style={{ color: "black" }}>{data.email}</h6>
                <h6 style={{ color: "black" }}>{data.phone}</h6>
                <h6 style={{ color: "black" }}>{data.website}</h6>
              </div>

            </div>

            <hr style={{ color: "black" }} />
            <h4 style={{ textAlign: "center", color: "#bbbbc0" }}>company</h4>
            <div className='userCompanyDetails'>
              <div style={{ textAlign: "end", color: "#bbbbc0" }}>
                <h6>Name : </h6>
                <h6>catchphrase : </h6>
                <h6>bs : </h6>
              </div>
              <div>
                <h6 style={{ color: "black" }}>{data.company.name}</h6>
                <h6 style={{ color: "black" }}>{data.company.bs}</h6>
                <h6 style={{ color: "black" }}>{data.company.catchPhrase}</h6>
              </div>
            </div>
          </div>

          <div className='insfoContainer2'>
            <h4 style={{ textAlign: "start", color: "#bbbbc0" }}>Address : </h4>
            <div className='userAddressDetails'>
              <div style={{ textAlign: "end", color: "#bbbbc0" }}>
                <h6>Street : </h6>
                <h6>Suite : </h6>
                <h6>City : </h6>
                <h6>Zipcode : </h6>
              </div>
              <div >
                <h6 style={{ color: "black" }}>{data.address.street}</h6>
                <h6 style={{ color: "black" }}>{data.address.suite}</h6>
                <h6 style={{ color: "black" }}>{data.address.city}</h6>
                <h6 style={{ color: "black" }}>{data.address.zipcode}</h6>
              </div>
            </div>

            <div className="mapContainer">
              <MapContainer center={[51.505, -0.09]} zoom={1} scrollWheelZoom={false} style={{ height: "250px", width: "100%", borderRadius: "40px" }}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[data.address.geo.lat, data.address.geo.lng]} icon={customIcon}></Marker>
              </MapContainer>
            </div>
            <div className='geoContainer'>
              <p>Lat :{data.address.geo.lat} </p>
              <p>Long : {data.address.geo.lng}</p>
            </div>

            <div style={{ textAlign: "end" }}>
              <button className='btn btn-primary' style={{ width: "60%" }} onClick={handleChat} >Chat ^</button>
            </div>
            {
              chatOpen ? <ChatsComponents /> : ""
            }
          </div>


        </div>


      </div>
    </div>
  )
}

export default Profile