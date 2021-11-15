import React from 'react'
import Slider from 'react-slick'
import { NextArrow, PrevArrow } from '../components/HeroCrousal/Arrows.Component';
import Poster from '../components/Poster/Poster.Component';


const PosterSlider=(props)=>{
 
    const settings={
        infinite: false,
        autoplay:false,
        slidesToShow:5,
        NextArrow:<NextArrow />,
        BackArrow:<PrevArrow />,
        slidesToScroll:4,
        initialSlide:0,
        responsive:[
            {
                breakpoints: 1024,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    infinite:true,
                    initialSlide:0
                },},
                {
                breakpoints: 600,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    infinite:true,
                    initialSlide:0
                },},
                {
                breakpoints: 480,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    infinite:true,
                    initialSlide:0
                },
            },
        ],
    };
    const {posters,title,subtitle,isDark,config}=props;
    const currentSettings = config ? config : settings;

    return (
        <>
            <div className=' container flex flex-col items-start my-2 '>
                <h3 className={`text-2xl font-bold ${isDark ? "text-white":"text-black"}`}>{title}</h3>
                <p className={`test-sm  ${isDark ?"text-white":"text-black"}`}>{subtitle}</p>
                </div>
           
                <Slider {...currentSettings}>
                    {posters.map((each) =>(
                        <Poster {...each}isDark={each.isDark}/>
                        // console.log("Poster ",each) 
                        ))}
                
                </Slider>
              
        </>
    );
}
export default PosterSlider;