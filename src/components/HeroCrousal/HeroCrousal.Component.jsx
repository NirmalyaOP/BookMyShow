import React, { useState , useEffect} from "react";
import HeroSlider from 'react-slick';
import axios from "axios";

import { NextArrow ,PrevArrow} from "./Arrows.Component";


const HeroCarousel = ()=>{
    const [images, setImages] =useState ([
      
    ]);

    useEffect(()=>{
        const requestNowPlayingMovies = async () =>{
            const getImages = await axios.get('/movie/now_playing');
            setImages(getImages.data.results);
        };

        requestNowPlayingMovies();
        
    },[]);

     const settingLG= {
         arrows:true,
         autoplay:true,
         centerMode:true,
         centerPadding: "200px",
         slidesToShow: 1,
         nextArrow:<NextArrow />,
         previousArrow:<PrevArrow />, 
         infinite: true,
         slidesToScroll: 1
        
      };

      const settings= {
        arrows:true,
        speed:500,
        nextArrow:<NextArrow />,
        previousArrow:<PrevArrow />, 
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
     };

    return (
         <>
         <div className='lg:hidden'>
             <HeroSlider {...settings}>
                 {images.map((image)=>(
                     <div className='w-full h-56 md:h-80 py-3'>
                         <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt='Hero Banner' className='w-full h-full object-center '/>
                     </div>
                 ))}
             </HeroSlider>
         </div>
         <div className="hidden lg:block">
             <HeroSlider {...settingLG}>
                 {images.map((image)=>(
                     <div className='w-full h-96 px-2 py-3'>
                         <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt='Hero Banner' className='w-full h-full object-center   rounded-md' />
                     </div>

                 ))}
             </HeroSlider>

         </div>
         </>
    );};

    export default HeroCarousel;