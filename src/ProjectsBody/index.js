import React from 'react'
import "./projectsBody.css"
import { Link } from 'react-router-dom'


function ProjectsBody() {
  return (
    <div>
        
    <div className="NavWholeHead">
      {/* <nav style={{ height: '10vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ fontSize: '60px', borderBottom: '2px solid plum', boxShadow: '0 2px 4px plum' }}>
          <a href="index.html" style={{ color: 'rgb(66, 41, 79)' }}> Rani Potla</a>
        </h1>
        <div className="category" style={{ display: 'flex' }}>
          <a className="links" href="#">Resume</a>
          <span style={{ height: '3vh', border: '1px solid black' }}></span>
          <a className="links" href="Projects.html">Projects</a>
          <span style={{ height: '3vh', border: '1px solid black' }}></span>
          <a className="links" href="#">Contact</a>
        </div>
      </nav> */}

      <div className="maindiv">
        <div className="left">
          <ul>
            <li ><h1 style={{textDecoration:'underline', color:''}}>Projects</h1></li>
            <li><Link className="links" to="#reactjs">React.JS</Link></li>
            <li><Link className="links" to="#html">HTML & CSS</Link></li>
            {/* <li><a className="links" href="#css">Css</a></li> */}
            <li><Link className="links" to="#javascript">JavaScript</Link></li>
          </ul>
        </div>
        <div className="right">
          <ul className="rightProjects" id="reactjs">
          <li className="p6">
            <Link to="https://preschoolapp04.netlify.app/">
            <h1 >Little Tots Preschool</h1>
            <sub>I’ve created a website for Little Tot Preschool to provide a
               complete overview of our nurturing environment. Explore photos
                of our daily activities, learn about our programs and curriculum, 
                and find our location with an interactive map. You can also easily
                 contact us, access our online registration form, and submit any
                  inquiries—all from one convenient platform. This site is designed 
                  to give you all the information you need to make the best decision
                   for your child's early education.</sub>
            </Link>
              <img src="https://thumbs.dreamstime.com/b/little-kids-build-block-toys-home-daycare-playing-color-blocks-educational-preschool-kindergarten-wooden-140439764.jpg" alt="Project" />
            </li>
            {/* <li className="p8"></li> */}
          </ul>
          <ul className="rightProjects" id="html">
            <li className="p1">
              <Link to="https://revertweb.netlify.app/">
                {/* <img className="img1" src={img1.png} alt="Project Image" /> */}
              <h1>REVERT 
                {/* <sub>"EcoEssentials: Sustainable Living Made Simple"</sub> */}

</h1>
              <sup >A minimalist website promoting sustainable
                 home essentials. Built with HTML and CSS, it
                  features eco-friendly products and encourages 
                  green living practices. Explore how design meets 
                  sustainability in this innovative showcase.</sup>
              </Link>
              <img src="https://www.shutterstock.com/shutterstock/photos/1915608760/display_1500/stock-photo-open-eco-friendly-cotton-reusable-bag-with-the-different-containers-from-the-wood-and-glass-pastel-1915608760.jpg" alt="" />
            </li>
            <li className="p6">
            <Link to="https://periodictable07.netlify.app/">
            <h1 >Periodic Table</h1>
            <sub>I created a periodic table using HTML and CSS 
              that displays chemical element symbols and atomic
               numbers. Clicking on an element reveals detailed
                information about it, enhancing interactivity and learning.</sub>
            </Link>
              <img src="https://media.istockphoto.com/id/931938148/vector/periodic-table-of-elements.jpg?s=612x612&w=0&k=20&c=r1VnMI3dbTGPIDZaJmUQ2_tSSgzs7-AmW3CtunPzydQ=" alt="Project" />
            </li>
            <li className="p2">
              <Link to="https://allencoach.netlify.app/">
              <h1>ALLEN JOHNSON</h1>
              <sub>Created an engaging and user-friendly interactive
                 website using HTML for structure, CSS for styling and Bootstrap</sub>
              </Link>
              <img src="https://media.istockphoto.com/id/619258412/photo/life-coaching-session-with-group-of-young-participants.jpg
              ?s=612x612&w=0&k=20&c=_fA9YfiWigIsYeaoYb5ukEUKXgWS5zUGNUNPu7XDMEI=" alt="project " />
            </li>
            <li className="p2">
              <Link to="https://brochillclone.netlify.app/">
              <h1>BROCHILL WEBSITE CLONE</h1>
              <sub>Developed a clone of the Brochill website using HTML and
                 CSS, showcasing my front-end development skills and attention 
                 to detail. The project involved replicating the website's layout, 
                 styles, and responsive design to achieve a faithful representation 
                 of the original site.</sub>
              </Link>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXcwV08M-ZxlO7SSzIaAKoDrH8-Ndq1nVv8g&s" alt="project " />
            </li>
            
            {/* <li className="p3">
              <h1>AC maintenance Form</h1>
              <img src="https://i.pinimg.com/564x/80/0a/f0/800af0101b474de67b3d36ea7cac4711.jpg" alt="Project Image" />

            </li> */}
            <li className="p4">
              {/* https://bmicalculatro-blacklillies.netlify.app/ */}
              <Link to="https://bmicalculatro-blacklillies.netlify.app/">
            <h1 >BMI CALCULATOR</h1>
            <sub>This project provides an efficient and user-friendly way
               for customers to book AC maintenance services and receive a 
               cost estimate instantly. By integrating form validation and
                dynamic cost calculation, it ensures accuracy and convenience for users.</sub>
            </Link>
              <img src="https://img.freepik.com/free-vector/body-mass-
              index-weight-control-with-bmi-healthy-unhealthy-lifestyle
              -flat-vector-illustration-fitness-indicator-before-after-diet
              -overall-health-body-fat-scale-concept_88138-795.jpg?w=2000&t=
              st=1722697163~exp=1722697763~hmac=b084e4a9a4bd2b9dadd91e13c042f
              4cf37c2e007fef9de7961451bd1331d422e" alt="Project" />
            </li>
            {/* <li className="p5"></li> */}
          </ul>
          <ul className="rightProjects" id="javascript">
          <li className="p5">
            <Link to="https://memo-app-blacklillies.netlify.app/">
            <h1 >Memo Notes</h1>
            <sub>I developed a responsive memo notes app using HTML,
               CSS, and JavaScript, ensuring seamless functionality 
               on both mobile devices and laptops. The app adapts to 
               different screen sizes for versatile note-taking.</sub>
            </Link>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVdtjGyKKavdcYC6aQgosZkLu2FrWd2gX6N5l4M5qwtubReJox00F5mKZb5u6eGT7ZDk&usqp=CAU" alt="Project" />
            </li>
          <li className="p6">
            <Link to="https://acform.netlify.app/">
            <h1 >AC maintenance Form</h1>
            <sub>This project provides an efficient and user-friendly way
               for customers to book AC maintenance services and receive a 
               cost estimate instantly. By integrating form validation and
                dynamic cost calculation, it ensures accuracy and convenience for users.</sub>
            </Link>
              <img src="https://as2.ftcdn.net/v2/jpg/05/44/41/37/1000_F_544413767_6kV2o4Lpefx0Uw5fMpiBkg5wshDpbQ83.jpg" alt="Project" />
            </li>
          <li className="p7">
            <Link to="https://buffet-form.netlify.app/">
            <h1 >Buffet Booking Form </h1>
            <sub>Easily reserve your spot by selecting your preferred date, 
              time, and number of adults and kids. Specify the number of guests 
              opting for vegetarian and non-vegetarian dishes; if any category 
              doesn't apply, just enter 0. Our system will instantly show 
              availability based on your choices. Enjoy a seamless booking experience!</sub>
            </Link>
              <img src="https://cdn.pixabay.com/photo/2021/11/14/18/29/buffet-6795419_640.jpg" alt="Project" />
            </li>
            <li style={
              {height:'10vh'}
            } className="p7"></li>
            {/* <li className="p8"></li> */}
          </ul>
        </div>
      </div>
    </div>


    </div>
  )
}

export default ProjectsBody