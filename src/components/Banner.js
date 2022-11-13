import React from 'react';

import Image from '../assets/img/house-banner.png';
import Search from '../components/Search';

const Banner = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1896&q=80')] h-[700px] lg:h-[540px] mb-12 flex flex-col justify-start items-center lg:justify-end text-center lg:text-left justify-center" >
      <p className='text-white text-4xl lg:text-7xl mt-12 font-bold'>Find Your Dream Home</p>
      <p className='text-white text-xl lg:text-3xl font-medium mt-4'>Find, Book, Buy, Sale, Rent & Resale</p>
      <Search />

    </div>


  );
};

export default Banner;

{/* <div className='flex flex-col lg:flex-row'>
    <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
      <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
        <span className='text-violet-700'>Rent</span> Your Dream House With
        Us.
      </h1>
      <p className='max-w-[480px] mb-8'>
        Powerful, self-serve product and growth analytics to help you
        convert, engage, and retain more.
      </p>
    </div>
    <div className='hidden flex-1 lg:flex justify-end items-end'>
      <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1896&q=80" alt='' />
      </div>
    </div> */}