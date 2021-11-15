import React from "react";
import PlayFilter from "../components/PlayFilter/PlayFilter.Component";
import Poster from "../components/Poster/Poster.Component";

const Plays =() =>{
    return(
        <>
        <div className='container mx-auto px-4 my-10'>
            <div class='w-full lg:flex lg:flex-row-reverse gap-4'>
                <div class='lg:w-3/4 p-4 bg-white rounded '>
                    <h2 className='text:xl font-bold mb-4'
                    > Plays in NCR</h2>
                    <div className='flex flex-wrap'>
                        <div className='w=1/2 md:w-1/3 lg:w-3/12 my-3'>
                            <Poster src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315032-tqdablgqrm-portrait.jpg' 
                            title='Elephant In The Room'
                             subtitle='Akshara Theatre: Delhi'/>
                        </div>
                        <div className='w=1/2 md:w-1/3 lg:w-3/12 my-3'>
                            <Poster src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315032-tqdablgqrm-portrait.jpg' 
                            title='Elephant In The Room'
                             subtitle='Akshara Theatre: Delhi'/>
                        </div>
                        <div className='w=1/2 md:w-1/3 lg:w-3/12 my-3'>
                            <Poster src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315032-tqdablgqrm-portrait.jpg' 
                            title='Elephant In The Room'
                             subtitle='Akshara Theatre: Delhi'/>
                        </div>
                        <div className='w=1/2 md:w-1/3 lg:w-3/12 my-3'>
                            <Poster src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315032-tqdablgqrm-portrait.jpg' 
                            title='Elephant In The Room'
                             subtitle='Akshara Theatre: Delhi'/>
                        </div>
                        <div className='w=1/2 md:w-1/3 lg:w-3/12 my-3'>
                            <Poster src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315032-tqdablgqrm-portrait.jpg' 
                            title='Elephant In The Room'
                             subtitle='Akshara Theatre: Delhi'/>
                        </div>
                    </div>
                </div>
                <div className='lg:w-3/12 p-4 bg-white rounded-md'>
                    <h2 className='text-2xl font-bold mb-4'>Filters</h2>
                    <div>
                        <PlayFilter title='Date' tags={["today",'tomorrow','This Weekd=end']} />
                    </div>
                    <div>
                        <PlayFilter title='Language' tags={["Hindi",'English','Marathi']} />
                    </div>
                </div>
            </div>
        </div>
        
        
        
        </>
    )
}
export default Plays;