import React from "react";
import { Link } from "react-router-dom";

const Poster=(props)=>{
    return(
        <Link to={`/movie/${props.id}`}>
            <div className='flex flex-col  items-start gap-2 px-2 py-2 md:px-2 sm:px-2 w-full h-90'>
            <div className='w-full h-full px-3 py-3 rounded-2xl '>
                <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt='poster' className='w-full h-full rounded-md'/></div>
            
            <h3 className={`text-lg font-bold ${props.isDark ?"text-white" :"text-gray-900"}`}>
                {props.title}        </h3>
            <p className={`text-sm   ${props.isDark ?"text-white" :"text-gray-900"}`}>{props.subtitle}</p>
            
        </div>
        
        </Link>
   )
}
export default Poster;