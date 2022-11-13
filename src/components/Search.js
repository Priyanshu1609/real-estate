import React, { useContext } from 'react';

// import components
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';

// import context
import { HouseContext } from './HouseContext';

// import icon
import { RiSearch2Line } from 'react-icons/ri';

const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div className='px-[30px] mt-16 lg:mb-3 py-6  mx-auto flex flex-col lg:flex-row justify-between gap-2 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white  rounded-lg'>
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button
        onClick={() => {
          handleClick();
        }}
        className='bg-[#FF5A5F] hover:opacity-70 transition  lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg w-36'
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
