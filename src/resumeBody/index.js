import React from 'react'
import '../resumeBodyCSS/resumeBody.css'
import { Link } from 'react-router-dom'



function resumeBody() {
  return (
    <div>
    
  
    <div>
      {/* <video
        id="comp-k4mkxomb_video"
        className="K8MSra"
        role="presentation"
        crossOrigin="anonymous"
        playsInline
        preload="auto"
        muted
        loop
        tabIndex="-1"
        autoPlay
        src="./1053991_Abstract_blooming_flowers_background_HD_BG.mp4"
      ></video> */}
      
    

      <div style={{ width: '100vw', height: '80vh' }}>
        <table style={{ margin: '20px auto', height: '60vh', width: '60vw', padding: '30px' }}>
          <tbody>
            <tr>
              <td>
                <img className="profileImage" src="RaniAvatar01.PNG" alt="Profile" />
              </td>
              <td style={{ paddingLeft: '20px' }}>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <h2>Hello</h2>
                        <h4>A Bit About Me</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. E amet consectetur reprehenderit dignissimos deleniti deserunt.</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="catDiv" style={{ display: 'flex', padding: '2px' }}>
                          <a href="RaniResume.pdf" className="cat">
                            Resume
                          </a>
                          <Link to="/projectsBody" className="cat" style={{ transitionDuration: '4s' }}>
                            Projects
                          </Link>
                          <a href="#" className="cat" title='Email : ranirp6404@gmail.com,
                          Phone: 9490267713'>
                            Contact
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      
    </div>


    </div>
  )
}

export default resumeBody