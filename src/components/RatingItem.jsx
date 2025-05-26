const RatingItem = ({listRate}) =>{
    return(
        <>       
            {
                listRate.map((item,index)=>{
                    const isMid = index !== 1;
                    return isMid
                    ?(
                    <div key={item.id} className="text-center box-limit_l">
                        <p className="m-0 fw-bold fs-4">{item.count}</p>
                        <span className="text-color_subscription text-fs_l">{item.title}</span>
                    </div>  
                    )
                    :(
                    <div key={item.id} className="text-center box-limit_l border-start border-end">
                        <p className="m-0 fw-bold fs-4">{item.count}</p>
                        <span className="text-color_subscription text-fs_l">{item.title}</span>
                    </div>  
                    )
                })
            }     
        </>
    )
}
export default RatingItem;