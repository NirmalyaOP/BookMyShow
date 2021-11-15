import React,{useState} from 'react'
import PaymentModal from "../PaymentModal/Payment.Component";
const MovieInfo = ({ movie }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);
    const genres = movie.generes?.map(({name})=>name).join(", ");

    const rentMovies = () => {
        setIsOpen(true);
        setPrice(149);
    };

    const butMovies = () => {
        setIsOpen(true);
        setPrice(599);
    };

    return (
        
        <>
             <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
            
          <div className='flex flex-col lg:gap-8'>
            <h1 className='text-white text-5xl font-bold'>{movie.original_title}</h1>
        </div>
        <div className='flex flex-col gap-5 text-white'> 
        <h4> 4K ratings </h4>
        <h4>English , Hindi , Kanada , Tamil , Telagu</h4>                <h4>{movie.overview}</h4>
        <h4>
                        {movie.runtime} min • {genres}{" "}
                    </h4>
        </div>
        <div className='flex items-center gap-3 w-full'>
        <button  onClick={rentMovies} className="bg-red-600 w-full py-3    text-white font-semibold rounded-md ">
                        Rent ₹ 149
                    </button>
                    <button onClick= {butMovies} className="bg-red-600 w-full py-3 px-4 text-white font-semibold rounded-md ">
                       Buy ₹ 599
                    </button>

        </div>
        

        </>
    )
}

export default MovieInfo;