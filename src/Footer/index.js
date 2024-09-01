import React from 'react'
import '../resumeBodyCSS/resumeBody.css'


function Footer() {
  return (
    <div style={{height:'8vh', }}>
        <footer style={{ height: '10vh', width: '100vw', display: 'flex', justifyContent: 'space-around' }}>
        <div className="contact">
          <h3>Phone</h3>
          <p>9490267713</p>
        </div>
        <div className="contact">
          <h3>Email</h3>
          <a href="mailto:ranirp6404@gmail.com">ranirp6404@gmail.com</a>
        </div>
        <div className="contact">
          <h3>Follow Me</h3>
          <p>
            <a href="https://www.linkedin.com/in/rani-potla-992b23220/">
              {/* <i className="fa-brands fa-linkedin-in"></i> */}
              {/* <i class="bi bi-linkedin"></i> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer