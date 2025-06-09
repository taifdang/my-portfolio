// import './App.css'
import {Outlet } from 'react-router-dom'
import Footer from './components/Footer';
import './custom/WaveEffect.css'
import { _downloadFile } from './server';
import ToastUI from './components/toast';
import ThemeUI from './components/ThemeUI';
import { useEffect, useState,useRef } from 'react';
import './MyApp.css'
import NavLinkItem from './components/NavLinkItem';
function App() {
  
  const themeObject = ["light","dark"]
  const themeMode = {
    light:{
      title:'light',
      content:'bi bi-moon',
      style:{
        'color':'#030303',
        'background-color':'#fff'
      }
    },
    dark:{
      title:'dark',
      content:'bi bi-sun',
      style:{
        'color':'#fff',
        'background-color':'#030303'
      }
    },
  };
  //
 
  //
  const [theme,SetTheme] = useState(null);
  const renderThemeStorage = useRef(false);
  const changeThemeMode = (theme) =>{
    
   
    var item = theme === "light" ? "light":"dark";
    if(item !== null){
        if(item == 'light'){
          SetTheme('light')
        }
        else{
          SetTheme('dark')
        }
    }
  }
  useEffect(()=>{
    //SET THEME FORM LOCAL STORAGE
    var themeStorage = localStorage.getItem("theme");
    if(!renderThemeStorage.current){
      if(themeObject.includes(themeStorage)){
         SetTheme(themeStorage);
      }
   }
   renderThemeStorage.current = true;
  },[]);
  useEffect(()=>{
      if(theme == "light"){
        document.body.classList.remove("dark");
        localStorage.setItem("theme","light");
      }
      else if(theme == "dark"){
         document.body.classList.add("dark");
         localStorage.setItem("theme","dark");
      }
  },[theme]);
    
  const copyClipboard = () =>{
   navigator.clipboard.writeText(window.location.href);
   showToast();
  }
  const showToast =()=> {
  var toastElList = [].slice.call(document.querySelectorAll('.toast'))
  var toastList = toastElList.map(function(toastEl) {
    return new bootstrap.Toast(toastEl)
  })
  toastList.forEach(toast => toast.show()) 
  }
  return (
    <>   
        <div className="container position-relative px-0">
          <header className='d-flex my-3 '>
            <div>
              <span className='fs-1 fw-bold logo-text'></span>
            </div>           
            <div className='ms-auto'>
              {/* <span className='me-3'><i class="bi bi-translate" style={style.box_icon}></i></span> */}
              {/* <a onClick={()=>Fnc_darkMode()} className='text-dark'><i class="bi bi-sun" style={style.box_icon}></i></a> */}
              <ThemeUI 
                content = {theme == "light" ? themeMode.light:themeMode.dark}
                func_theme = {changeThemeMode}
                //icon = {themeMode[theme].content}
              />
              {/* <button onclick={showColorScheme()}>Kiểm tra chế độ hiện tại</button>  */}
              
            </div>
          </header>
          {/*  */}
           <div class="d-flex flex-row gap-3">        
            <div>
               <img 
                src="https://ecuzsftaupdixgwvjeoy.supabase.co/storage/v1/object/public/imagestore//avatar.png" 
                alt=""
                className='rounded-circle border border-primary object-fit-cover image-limit_xl'               
                 />    
            </div>
            <div class="d-flex flex-column gap-1 justify-content-evenly">       
              <h4 className='fw-bold p-0 m-0'>
                 <span className='text-color_header'>DANG DUC TAI</span>
              </h4>
              <a className='text-color_link text-link_decoration'>@taifdang</a>        
              <a 
              //className='pointer_css fs_sm_css'
              className='text-link_decoration'  
              data-bs-toggle="modal" 
              data-bs-target="#exampleModal">
                <span className='text-color_subscription'>A student and</span>
                <span className='text-color_link'>... see more</span>
              </a>
              <a 
              href="" 
              className='text-link_decoration'>
                <span>console.wx.com</span>
              </a>
              <div className=''>
                <button 
                type='btn' 
                className='mt-1 btn btn-dark rounded-pill py-1 px-3'>Contact
                </button>
              </div>
            </div>
          </div>         
        <NavLinkItem/>
        <Outlet/>    
        <Footer/>         
        </div>   
        <div class="toast toast_box" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="d-flex">
            <div class="">
               <span className='ps-2 text-fs_l'>Đã lưu vào clipboard</span>
            </div>
            <button type="button" class="btn-close me-2 m-auto " data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        </div>
        
         {/* Modals */}
        <div class="modal fade" id="exampleModal" tabIndex="-1"  aria-hidden="false">
        <div class="modal-dialog modal-dialog-top modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header border-0 pb-0">
              <h5 class="modal-title fw-bold" id="exampleModalLabel">DANG DUC TAI</h5>
              <button 
              type="button" 
              class="btn-close" 
              data-bs-dismiss="modal" 
              aria-label="Close"
              >         
              </button>
            </div>
            <div class="modal-body">
              <div>
                <span className='text-fs_xl'>Describe</span><br />
                <span >
                  A student and aspiring Software Developer focusing on backend development with .NET. I am passionate about learning web technologies and the .NET ecosystem. I specialize in backend development with .NET and am continuously expanding my knowledge of modern web technologies.
                </span>
              </div>
              <div>
                <span className='text-fs_xl'>Link</span><br />
                <ul className='list-item_decoration'> 
                  <li>
                    <div className='d-flex flex-row align-items-center gap-2'>
                        <span className='fs-5'><i class="bi bi-globe"></i></span>
                        <div className='d-flex flex-column'>
                          <span>Personal blog</span>
                          <a 
                          className='text-link_decoration'
                          href=''>...</a>
                        </div>
                    </div>
                  </li>
                  <li>
                    <div className='d-flex flex-row align-items-center gap-2'>
                      <span className='fs-5'><i class="bi bi-github"></i></span>
                        <div className='d-flex flex-column'>
                          <span>Github page</span>
                          <a 
                          className='text-link_decoration'
                          href='https://github.com/taifdang'>https://github.com/taifdang</a>
                        </div>
                    </div>
                  </li>
                  <li>
                  <div className='d-flex flex-row align-items-center gap-2'>
                    <span className='fs-5'><i class="bi bi-facebook"></i></span>
                        <div className='d-flex flex-column'>
                          <span>Facebook page</span>
                          <a 
                          className='text-link_decoration'
                          href=''>...</a>
                        </div>
                    </div>
                    </li>
                </ul>
              </div>
              <div>
                <span className='text-fs_xl'>Other information</span>
                <div>
                    <ul className='list-item_decoration d-flex flex-column gap-2'>
                      <li>
                      <div className='d-flex flex-row align-items-center gap-2'>
                      <span className='fs-5'><i class="bi bi-telephone"></i></span>
                      <span>+84818141658</span>
                      </div>
                      </li>
                      <li>
                      <div className='d-flex flex-row align-items-center gap-2'>
                        <span className='fs-5'><i class="bi bi-envelope"></i></span>
                        <span>taidangduc1503@gmail.com</span>
                      </div>
                      </li>
                      <li>
                      <div className='d-flex flex-row align-items-center gap-2'>
                      <span className='fs-5'><i class="bi bi-globe-americas"></i> </span>
                      <span>Viet Nam</span>
                      </div>                
                      </li>    
                      <li>
                        <div className='d-flex flex-row align-items-center gap-2'>
                        <span className='fs-5'><i class="bi bi-info-circle"></i></span>           
                        <span>Joined Oct 10, 2023</span>
                        </div>                
                      </li>          
                    </ul>
                </div>
                <div className='d-flex pt-2 gap-3'>
                   <a  type='btn' className='btn btn-light rounded-pill' onClick={_downloadFile}>
                    <span className='pe-2'><i class="bi bi-download"></i></span>
                    <span>Download CV</span>
                  </a>
                    <button type='btn' className='btn btn-light rounded-pill' onClick={copyClipboard}>
                      <span className='pe-2'><i class="bi bi-share"></i></span>
                      <span>Share page</span>              
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default App
