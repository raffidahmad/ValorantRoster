import { useState } from 'react';
import Button from '../Button';
export default function Carousel({ list }) {
  const [active, setActive] = useState(2);

  const handleNext = () => {
    if (active === list.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  const handlePrev = () => {
    if (active === 0) {
      setActive(list.length - 1);
    } else {
      setActive(active - 1);
    }
  };
  return (
    <>
      <div className=''>
        <div className='overflow-hidden'>
          {list.map((item, index) => (
            <div
              key={item.name + '_' + index}
              className={`duration-700 ease-in-out flex flex-col justify-center items-center ${
                active === index ? '' : 'hidden'
              }`}
            >
              <img
                src={item.image}
                width={'75%'}
                alt='Carousel Image'
                className={`
                ${active === index ? 'animate-swipe-right' : 'hidden'}
                `}
              />
              <div className='relative bottom-64 text-center cursor-pointer'>
                <div className='flex flex-col h-full justify-center items-center text-4xl text-white opacity-100'>
                  {item.name}
                  {item.underline && (
                    <div
                      className='
                w-1/2 bg-white h-1
              '
                    >
                      {' '}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div className='flex justify-center w-screen'>
            <Button>Ready Up</Button>
          </div>
        </div>

        {/* <div className='absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2'>
          {list.map((item, index) => (
            <button
              type='button'
              className='w-3 h-3 rounded-full bg-white/30 dark:bg-gray-800/30 group hover:bg-white/50 dark:hover:bg-gray-800/60 focus:ring-4 focus:ring-white dark:focus:ring-gray-800/70 focus:outline-none'
              data-carousel-dot={index}
              onClick={() => {
                setActive(index);
              }}
            ></button>
          ))}
        </div> */}

        <button
          type='button'
          className='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          onClick={handlePrev}
        >
          <span className='inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7'></path>
            </svg>
            <span className='sr-only'>Previous</span>
          </span>
        </button>
        <button
          type='button'
          className='absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          onClick={handleNext}
        >
          <span className='inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path>
            </svg>
            <span className='sr-only'>Next</span>
          </span>
        </button>
      </div>
    </>
  );
}
