import React from 'react'

 function Cast(props) {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <div className='w-32 h-32'>
                    <img src={`https://image.tmdb.org/t/p/original${props.image}`}  className='w-full h-full rounded-full object-center objrct-cover '/>                
                </div>
            
            <h1 className='text-gray-800 text-xl'>{props.castName}</h1>
            <h5 className='text-sm text-gray-500'>as{props.role}</h5>       
         </div>
        </div>
    )
}

export default Cast;
