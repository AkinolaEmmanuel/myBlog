import { useEffect, useState } from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
//import bulb from '/bulb.jpg'
import thoughts from '/thoughts.jpg'
export default function Articles() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect (() => {
        setIsLoading(true);
        
        fetch('https://bible-api.com/Psalms 23', {
            method: "GET"
        })
        .then ((Response) => Response.json())
        .then ((data) => {
            console.log(data);
            setPosts((data));
            setIsLoading(false);
        })
       
        .catch((err) => {
            console.log(err.message)
        })
    }, [])

  return (
    
    <>
   
        <div className="my-10 py-10 flex justify-between items-center">
            <div className="">
            <h1 className="font-bold text-4xl py-2">Featured Articles</h1>
            <hr className="border-2 border-black w-1/5"/>
            </div>
            {/* <div className="">
            <button className='bg-black text-white px-2 py-2' onClick={() => swiper.slideNext()}>Slide to the next slide</button>
            </div>  */}
        </div>
        <div className="montserrat flex">
        <Swiper style={{"--swiper-pagination-color": "#000","--swiper-pagination-bottom": "-20px" }} modules={[Pagination, A11y]} spaceBetween={10} slidesPerView={3} pagination={{ clickable: true }} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
        
        {isLoading ? (<p>Articles are loading</p>) : 
            (posts.verses.map((post) => { 
                return (
                
                   <SwiperSlide>
                <div className="rounded-2xl border-2 border-gray-400 shadow-xl w-full" key={post.reference}>
                <div className="h-1/2 w-full">
                    <img src={thoughts} alt="" className='w-full h-auto rounded-t-md' />
                </div>
                <div className="my-3 p-5 w-full h-80">
                    <button className="bg-blue-200 font-normal text-md px-2 py-1 my-2 rounded-lg">Thoughts</button>
                    <h1 className="font-bold text-3xl py-2 my-1">{posts.reference}:{post.verse}</h1>
                    <p className='font-normal text-xl'>{post.text}</p>
                    <p className="font-light text-lg">August 11th, 2024.</p>
                </div>
                </div>
                </SwiperSlide> 
         
            
                ) }))

            }
            
            </Swiper>
            </div>

{/* 
            <div className="rounded-2xl border-2 border-gray-400 shadow-xl w-1/3">
                <div className="h-80 w-full">
                    <img src={bulb} alt="" className='w-full h-full rounded-t-md' />
                </div>
                <div className="my-3 p-5">
                    <button className="bg-green-200 font-normal text-md px-2 py-1 my-2 rounded-lg">Technical</button>
                    <h1 className="font-bold text-3xl py-2 my-1">Lorem ipsum dolor sit amet.</h1>
                    <p className="font-light text-lg">August 12th, 2024.</p>
                </div>
            </div> */}
        
      </>
  )
}
