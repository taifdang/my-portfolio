import Card from "../components/cardProject";
import { useEffect,useState } from "react";
import { _fetchData } from "../server";
import WaveAnimation from "../components/WaveEffect";
const Projects = () =>{
    const[projects,setProjects] = useState([]);
    // const getData = async()=>{
    //     const {data,error} = await _fetchData('projects');
    //     if(error || data == null) console.log("error");
    //     setProjects(data);
    // }
    useEffect(()=>{    
      var timer =  setTimeout( async () => {
        const {data,error} = await _fetchData('projects');
        if(error || data == null) console.log("error");
        setProjects(data);
      }, 1000);
      return()=> clearTimeout(timer);
    },[]);
    return(
        <>
        {
          projects && projects.length > 0
          ?
          (
            <>
              <div className="d-flex">
                <span className="text-fs_m text-color_subscription">{projects.length} repository found</span>
                <div className="ms-auto">
                  <select class="form-select">
                    <option defaultValue=''>All</option>               
                  </select>
                </div>
              </div>
              <div className="row">
                <Card projects = {projects}/>        
              </div>        
            </>
          )
          :
          (
            <div className="box-empty">
              <WaveAnimation/>
            </div>
          )
        }
        
        </>
    )
}
export default Projects;