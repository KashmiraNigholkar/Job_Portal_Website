import React, { useContext, useRef } from 'react';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Hero = () => {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);
  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    const title = titleRef.current?.value || '';
    const location = locationRef.current?.value || '';
    setSearchFilter({ title, location });
    setIsSearched(true);
  };

  return (
    <div className='container 2xl:px-20 mx-auto my-10'>
      {/* Hero Header */}
      <div className='bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>
          Over 10,000+ Jobs to Apply
        </h2>
        <p className='mb-8 max-w-xl mx-auto text-sm font-light px-5'>
          Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities and Take the First Step Toward Your Future!
        </p>

        {/* Search Box */}
        <div className='flex flex-col sm:flex-row items-center gap-3 justify-between bg-white rounded text-gray-600 max-w-xl pl-4 pr-4 py-2 mx-4 sm:mx-auto'>
          <div className='flex items-center w-full'>
            <img className='h-5 mr-2' src={assets.search_icon} alt="search" />
            <input
              type='text'
              ref={titleRef}
              placeholder='Search for jobs'
              className='text-xs sm:text-sm p-2 rounded outline-none w-full'
            />
          </div>
          <div className='flex items-center w-full'>
            <img className='h-5 mr-2' src={assets.location_icon} alt="location" />
            <input
              type='text'
              ref={locationRef}
              placeholder='Location'
              className='text-xs sm:text-sm p-2 rounded outline-none w-full'
            />
          </div>
          <button
            onClick={onSearch}
            className='bg-blue-600 px-6 py-2 rounded text-white w-full sm:w-auto'
          >
            Search
          </button>
        </div>
      </div>

      {/* Trusted Companies */}
      <div className='border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md'>
        <div className='flex justify-center gap-6 lg:gap-12 flex-wrap items-center'>
          <p className='font-medium text-sm sm:text-base'>Trusted By</p>
          <img className='h-6' src={assets.microsoft_logo} alt='Microsoft' />
          <img className='h-6' src={assets.walmart_logo} alt='Walmart' />
          <img className='h-6' src={assets.accenture_logo} alt='Accenture' />
          <img className='h-6' src={assets.samsung_logo} alt='Samsung' />
          <img className='h-6' src={assets.amazon_logo} alt='Amazon' />
          <img className='h-6' src={assets.adobe_logo} alt='Adobe' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
