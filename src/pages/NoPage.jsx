import Card from "../components/cardProject";
import { useEffect,useState } from "react";
import { _fetchData } from "../server";
import WaveAnimation from "../components/WaveEffect";
const NoPage = () =>{
    
    return(
        <>
            <div className="">
               <div className="d-flex justify-content-center">
                     <img  className="" src="./src/assets/404animation.gif"/>
               </div>
            </div>
        </>
    )
}
export default NoPage;