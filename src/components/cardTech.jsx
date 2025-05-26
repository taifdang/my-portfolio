const CardTech = ({listSkill}) =>{

    return (
        <>
            {
                listSkill.map(item=>(
                    <div key={item.key} className="col-6 col-md-4 col-lg-3 text-center">
                        {/* <div className="h-100  text-center p-3 shadow-sm rounded box-effect"> */}
                        <div className="h-100  text-center p-3 shadow-sm rounded box-cover">
                            <div className="">
                                <img src={item.image} alt="" className="rounded image-limit_m"  />
                            </div>
                            <div className=""> 
                                <span className="text-fs_l text-color_title">{item.title}</span>
                                 {/* <p className="text-fs_l ">{item.title}</p> */}
                            </div>
                        </div>
                     </div>
                ))
            }
        </>
    )
}
export default CardTech;