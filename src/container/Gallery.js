import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Gallery = () => {



  const navigate = useNavigate()

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
      <div className=''>
        coming soon
      </div>
    </div>
  )
}

export default Gallery