import axios from "axios";
import React,{useState,useEffect}from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainment.Card";
import HeroCarousel from "../components/HeroCrousal/HeroCrousal.Component";
import PosterSlider from "../PosterSlider/PosterSlider.Component";




function HomePage(){
   
    const [recommendedMovies, setRecommendedMovies]=useState([]);
    const [premiereMovies, setPremiereMovies]=useState([]);
    const [onlineStreamsEvents, setOnlineStreamsEvents]=useState([]);

   useEffect(()=>
   {
    const requestPopularMovies = async () => {
        const getPopularMovies = await axios.get("/movie/popular");
        setRecommendedMovies(getPopularMovies.data.results);
        console.log(getPopularMovies);
    };

    requestPopularMovies();
   },[]);

   useEffect(() => {
    const requestTopRatedMovies = async () => {
        const getTopRatedMovies = await axios.get("/movie/top_rated");
        setPremiereMovies(getTopRatedMovies.data.results);
    };

    requestTopRatedMovies();
}, []);

useEffect(() => {
    const requestUpcomingMovies = async () => {
        const getUpcomingMovies = await axios.get("/movie/upcoming");
        setOnlineStreamsEvents(getUpcomingMovies.data.results);
    };

    requestUpcomingMovies();
}, []);



    return(
    <>
            <HeroCarousel />
            <div className='container mx-auto px-4'>
                <h1 className='text-2xl font-bold text-gray-800 my-3'> The Best Of Entertainment</h1>
                <EntertainmentCardSlider />
              
            </div>

            <div className='container  mx-auto px-4 my-8 md:px-12' >
            <PosterSlider
                title="Recomended Movies"
                subtitle="List of recomended Movies"
                posters={recommendedMovies}
                isDark={false} />
            </div>

            <div className='bg-premiere-700 py-12 text-white  my-8 md:px-12' >
                <div className="container mx-auto px-4 flex-col gap-3">
                    <div className='hidden md:flex'>
                        <img src='https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png' alt='Rupay' className="w-full h-full"/>
                    </div>
                    <PosterSlider
                title="Premier"
                subtitle="Best Every Friday"
                posters={premiereMovies}
                isDark={true} />
                </div>
                </div>
           

            <div className='container  mx-auto px-4 my-8 md:px-12' >
            <PosterSlider
                title="Online Streaming Events"
                subtitle="Best of All"
                posters={onlineStreamsEvents}
                isDark={false}
                 />
            </div>
           


            
    </>      
    );

}
export default HomePage;