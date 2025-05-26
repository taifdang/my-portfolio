import { NavLink } from "react-router-dom";
const Footer = () =>{
    return(
        <>
        <footer className=' mt-2 '>
            <div className='row py-2 '>
              <div className='col-12 col-md-4  '>
                <h6 className='text-center text-fs_xl text-color_title'>DANG DUC TAI</h6>
                <span className="text-fs_m text-color_subscription">A student and aspiring Software Developer focusing on backend development with .NET</span>
              </div>
              <div className='col-12 col-md-4 '>
                <h6 className='text-center text-fs_xl text-color_title'>Quick link</h6>
                <ul className='nav d-flex  gap-2 justify-content-center  '>
                  <li>
                   
                    <a href="/my-portfolio/" className="text-fs_l text-color_link text-link_decoration">Home</a>
                  </li>
                  <li>
                    
                    <a href="/my-portfolio/project" className="text-fs_l text-color_link text-link_decoration">Projects</a>
                  </li>
                  <li>
                   
                    <a href="/my-portfolio/resume" className="text-fs_l text-color_link text-link_decoration">Resume</a>
                  </li>
                </ul>
              </div>
              <div className='col-12 col-md-4'>
                <h6 className='text-center text-fs_xl text-color_title'>Contact</h6>
                <ul className='nav d-flex gap-3 justify-content-center '>
                  <li><a href='' className='text-fs_xl text-color_link text-link_decoration'><i class="bi bi-linkedin"></i></a></li>
                  <li><a href='https://github.com/taifdang' className='text-fs_xl text-color_link text-link_decoration'><i class="bi bi-github "></i></a></li>
                  <li><a href='mailto:taidangduc1503@gmail.com' className='text-fs_xl text-color_link text-link_decoration'><i class="bi bi-envelope"></i></a></li>            
                </ul>
              </div>
            </div>
            <div className="border-top text-fs_medium">
              <span className="text-fs_m text-color_subscription">©2025 Dang Duc Tai. All rights reserved. </span>
            </div>
        </footer>
        </>
    )
}
export default Footer;