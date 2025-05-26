import { _downloadFile } from "../server";
const ResumePage = () =>{
    return(
        <>
            <div className="">
                 <div className="d-flex flex-wrap justify-content-between mb-4 gap-3">           
                    <div className="order-1">
                        <h4 className="fw-bold text-color_header">DANG DUC TAI</h4>
                        <ul className="nav d-flex flex-column gap-2 text-fs_lg">
                            <li className="nav-item d-flex gap-2">                         
                                <h6 className="text-fs_l-bold text-color_title">Backend Developer</h6>
                            </li>
                            <li className="nav-item d-flex gap-2 text-color_title">
                                <i class="bi bi-telephone"></i>
                                <span>+08418141658</span>
                            </li>
                            <li className="nav-item d-flex gap-2 text-color_title">
                                <i class="bi bi-envelope"></i>
                                <span>taidangduc1503@gmail.com</span>
                            </li>
                            <li className="nav-item d-flex gap-2 text-color_title">
                                <i class="bi bi-link-45deg"></i>
                                <a href="https://github.com/taifdang" className="text-link_decoration">https://github.com/taifdang</a>
                            </li>
                            <li className="nav-item d-flex gap-2 text-color_title">
                                <i class="bi bi-geo-alt"></i>
                                <span>Ward 15, District 8, HCM</span>
                            </li>
                            <li className="nav-item">                         
                            <button className="btn btn-primary rounded" onClick={_downloadFile} >Download CV</button>
                            </li>
                        </ul>
                    </div>  
                    <div className="order-0 order-md-1">
                        <img 
                            src="https://ecuzsftaupdixgwvjeoy.supabase.co/storage/v1/object/public/imagestore//avatar.png" 
                            alt=""
                            className='rounded-circle border border-primary object-fit-cover image-limit_2xl'
                            /> 
                    </div>             
                </div>
            <div>
                <h5 className="fw-bold mt-1 text-color_title">About</h5>
                <span className="text-color_subscription">
                    A student and aspiring Software Developer focusing on backend development with .NET. 
                    I am passionate about learning web technologies and the .NET ecosystem. 
                    I specialize in backend development with .NET and am continuously expanding my knowledge of modern web technologies.
                </span>
            </div>
            <div>
                <h5 className="fw-bold mt-1 text-color_title">Education</h5>
                <div className="d-flex w-100 ">                 
                    <span className="fw-semibold text-color_title">HUFLIT University</span>                  
                    <div className="ms-auto">
                        <span className="p-0 m-0 text-color_subscription">2021 - Present</span>
                    </div>
                </div>       
                <div className="">
                   <div>
                        <span className="fw-semibold text-color_title">Major: </span>
                        <span className="text-color_subscription">Software Technology</span>
                   </div>
                   <div >
                        <span className="fw-semibold text-color_title text-fs_content">Certificate: </span>
                        <span className="text-color_subscription">TOEIC 500</span>
                   </div>                   
                </div>                         
            </div>
            <div>
                <h5 className=" fw-bold mt-1 text-color_title">Projects</h5>              
                {/* #P1 */}
                <div>
                    <div className="">                                           
                        <h6 className="mb-0 fw-semibold text-color_title">BurnStore - Backend Developer</h6>
                        <span className="text-color_subscription">Clothes e-commerce with EAV model</span>
                    </div>
                    <div>
                        <h6 className=" fw-semibold text-color_title">Technologies Used</h6>
                        <ul className="my-0  text-color_subscription">
                            <li>Database: Sql Server</li>
                            <li>(.NET) REST API with N-tier architecture</li>
                            <li>Hangfire process background job</li>
                            <li>MailKit send OTP and notification via email for users</li>  
                            <li>Automapper mapping data</li>  
                            <li>Distributed SQL Server Cache</li>                   
                            <li>JWT authorization</li>
                        </ul>
                    </div>
                    <a href={import.meta.env.VITE_GITHUB_LINK1} className="text-link_decoration">View on Github</a>                
                </div>
                {/* #P3 */}
                 <div>
                    <div className="mt-1">
                        <h6 className="fw-semibold mb-0 text-color_title">WhalePhone - Fullstack Developer</h6>
                        <span className="text-color_subscription">Web ecommerce management and sell mobile phone</span>
                    </div>
                    <div className="text-fs_lg">
                        <h6 className="fw-semibold text-color_title">Technologies Used</h6>
                        <ul className="my-0 text-color_subscription">
                            <li>Database: Sql Server</li>
                            <li>(.NET) Razor with MVC</li>                         
                            <li>JQuery</li>                                                                                                                                       
                            <li>Bootstrap</li>                                              
                        </ul>
                    </div>                   
                    <a href={import.meta.env.VITE_GITHUB_LINK2} className="text-link_decoration">View on Github</a>
               
                </div>
            </div>
            <div>           
                <h5 className="fw-bold mt-1 text-color_title">Skills</h5>          
                <div className="row d-flex flex-wrap g-1  ">
                    {/* BE */}
                    <div className="col-12 col-sm-4 ">
                        <span className="fw-semibold text-color_title">Backend</span>
                        <ul className="nav flex flex-column gap-1 text-color_subscription">
                            <li className="nav-item">
                                C#, Winform
                            </li>
                            <li className="nav-item">
                                Javascript
                            </li> 
                            {/* <li className="nav-item">
                                Dart
                            </li>                       */}
                        </ul>
                    </div>
                    {/* FE */}
                    <div className="col-12 col-sm-4 ">
                        <span className="fw-semibold text-color_title">Frontend</span>
                        <ul className="nav flex flex-column gap-1 text-color_subscription">
                            <li className="nav-item">
                                Html
                            </li>
                            <li className="nav-item">
                                Css
                            </li> 
                            <li className="nav-item">
                                Bootstrap
                            </li>                       
                        </ul>
                    </div>   
                     {/*Others  */}
                    <div className="col-12 col-sm-4">
                        <span className="fw-semibold text-color_title">Others</span>
                        <ul className="nav flex flex-column gap-1 text-color_subscription">
                            <li className="nav-item">
                                Git
                            </li>
                            <li className="nav-item">
                                Postman
                            </li> 
                            {/* <li className="nav-item">
                                Souce Tree
                            </li>  */}
                            <li className="nav-item">
                                Docker
                            </li>                       
                        </ul>
                    </div>           
                </div>                 
            </div>
            </div>     
        </>
    )
}
export default ResumePage;