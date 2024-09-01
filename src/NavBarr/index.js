import React from 'react'
import { Link } from 'react-router-dom'
import '../resumeBodyCSS/resumeBody.css'



function NavBarr() {
  return (
    <div style={{height:'10vh',}}>
          <nav style={{ width: '100vw', height: '10vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ marginLeft:'1rem',fontSize: '50px', borderBottom: '2px solid plum', boxShadow: '10 2px 20px plum', borderRadius:'8px' }}>Rani Potla</Link>
        <div className="category" style={{ display: 'flex' }}>
          <a href="RaniResume.pdf">Resume</a>
          <span style={{ height: '3vh', border: '1px solid black' }}></span>
          <Link  to="/projectsBody"
          >Projects</Link>
          <span style={{ height: '3vh', border: '1px solid black' }}></span>
          <a href="/">Contact</a>
        </div>
      </nav>
    </div>
  )
}

export default NavBarr