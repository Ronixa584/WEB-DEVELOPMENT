import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Reviews } from './Reviews';
import { Testimonials } from './Testimonials';

export const Home = () => {
  const backgroundImageUrl = './bg0.jpg';

  return (
    <div className='bg-gradient-to-br from-amber-100 via-amber-200 to-yellow-100'>
      <Header />
      <div
        className='min-h-screen  flex  justify-start items-center md:justify-start md:items-center -z-40'
        style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        
      >
        <div className='md:w-1/2 md:px-8 text-center  md:text-left px-4 w-full '>
          <h2 className='text-6xl font-extrabold mb-4 pb-3 text-transparent bg-clip-text bg-gradient-to-br from-amber-600 via-amber-200 to-yellow-600 sm:bg-gradient-to-br sm:from-amber-200 sm:via-amber-500 sm:to-yellow-100'>
            Fuel Your Curiosity
          </h2>
          <h1 className='text-2xl text-gray-200  font-bold mb-6'>
            "Beyond the stacks, there's a world waiting!"
          </h1>
          <div className=' pt-6'>
          <a href="#_" class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-amber-200">
<span class="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-200 via-amber-600 to-yellow-100"></span>
<span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
<span class="relative text-white">Explore It Today..</span>
</a>
          
          </div>
        </div>
      </div>



      {/* Second Page */}
      <Reviews/>

      <Testimonials/>

      <Footer/>
    </div>

    
  );
};


