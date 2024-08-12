import hero from '/hero.jpg';
export default function Hero() {
  return (
    <div className=''>
       <div className="flex items-center h-screen poppins">
        <div className="w-2/3">
           <h1 className="text-2xl py-5">Thoughts, July 25th, 2024. </h1>
          <h1 className="text-7xl font-bold py-5"> A Letter To My Daugther.</h1>
          <p className=' w-2/3 font-light'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa tenetur magnam nemo iste, magni aut excepturi consequuntur reprehenderit natus beatae rerum repudiandae sit sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, eligendi.</p>
          <button className='py-3 px-10 my-5 border-2 border-black hover:text-white hover:bg-black'> Read more </button>
         </div>   
          <div className="w-1/3">
          <div className=" w-3/4 border-4 border-gray-400 rounded-lg shadow-lg">
            <img src={hero} alt="" className='' />
            </div>
          </div>

       </div>


    </div>
  )
}
