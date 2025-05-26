function CardProject({projects}){
    return(
       <>
        {         
            projects.map(item=>(             
                <div key={item.id}  className="col-12 col-md-6 col-lg-4 d-flex g-3">
                <div  className=" border-0 w-100 h-100 ">
                <div className="box-card_item">
                    <img 
                    src={item.image_url} 
                    className="object-fit-cover image-focus p-1 image-limit_max" 
                    alt={item.image_url} 
                   
                    />
                </div>
                  <div className="card-body d-flex flex-column p-1">
                    <div className="d-flex align-items-center">                      
                        <h3 className="p-0 m-0">                           
                             <span className="text-fs_l text-color_title">{item.title}</span>
                        </h3>
                        <div class="dropdown dropstart ms-auto">
                            <a className="text-color_description" data-bs-toggle="dropdown"><i class="bi bi-three-dots-vertical"/></a>
                            <ul class="dropdown-menu">
                                 <li>
                                     <div class="dropdown-item" href="#"> 
                                        <span className="p-0" ><i class="bi bi-github"></i></span>
                                        <a href={item.github_url} className="ps-2 text-fs_m text-link_decoration text-color_link">View repository</a>
                                     </div>
                                 </li>
                                 <li>
                                     <div class="dropdown-item" href="#">
                                         <span className=""><i class="bi bi-eye"></i></span>
                                         <a href={item.view_url} className="ps-2 text-fs_m text-link_decoration text-color_link">View demo</a>
                                     </div>
                                 </li>
                              
                             </ul>
                        </div>
                        
                    </div>
                    <span className="card-text p-0 m-0 text-fs_m text-color_subscription">{item.content}</span>                   
                    </div>
                </div>
              </div>
            ))
        }           
       </>
    )
}
export default CardProject;