import Card_Skill from "../components/cardTech";
import { useEffect,useState } from "react";
import { _fetchData } from "../server";
import WaveAnimation from "../components/WaveEffect";
import RatingItem from "../components/RatingItem";

const HomePage = () =>{   
    const[techlist,setTechList] = useState([]);
    const getData = async () =>{
        setTimeout( async () => {
             const {data,error} = await _fetchData('technologies_list');
            if(error || data == null) console.log("error");
            setTechList(data);
        }, 2000);
    }
    //rate
    //temp rate default
    const list_rating = [
        {id:0,title:'Repositories',count:9},
        {id:1,title:'Stars',count:5},
        {id:2,title:'Commits',count:98}
    ]
    const[rating,setRating] = useState([]);  
    //effect
    useEffect(()=>{    
      getData();    
    },[]);
    return(
        <>      
        {
             techlist && techlist.length > 0
            ?(
            <>
            <div className="row mx-0">               
                <div className="col-12 col-md-6 shadow-sm rounded g-1">
                    <div className="m-2 d-flex gap-2 justify-content-center">
                        <RatingItem
                        listRate={list_rating}
                        />
                    </div>
                    <div>
                        <img src="https://github-readme-stats.vercel.app/api?username=taifdang&hide_title=true&hide_rank=true&show_icons=true&include_all_commits=true&count_private=true&disable_animations=true&theme=default&locale=en&hide_border=false&order=1" height="160" width="100%" alt="stats graph"  />
                        <img src="https://github-readme-stats.vercel.app/api/top-langs?username=taifdang&locale=en&hide_title=true&layout=compact&card_width=320&langs_count=3&theme=default&hide_border=true&order=2&custom_title=%20" height="160" width="100%" alt="languages graph"  />
                    </div>           
                </div>
                <div  className="col-12 col-md-6 g-1">
                    <p className="ps-2 text-fs_2xl">Technologies</p>         
                    <div className="container">
                    <div className="row g-3">
                        <Card_Skill listSkill = {techlist} />               
                    </div>
                    </div>
                </div>          
            </div>       
            </>
            )
            :(            
                <div className="box-empty">
                    <WaveAnimation/>
                </div>
            )
        }
        </>
    )
}
export default HomePage;