import React from 'react';

const Button = () => {
  return (
    <div className='flex justify-center items-center my-[2em]'>
      <button
        type='button'
        className='py-4 px-6 font-poppins font-medium text-[18px] text-primary rounded-[50px] outline-none border-2 border-sky-500'
      >
        <a
          href='https://code.visualstudio.com/download'
          className='text-blue-500 text-lg md:text-xl lg:text-2xl'
        >
          Download Visual Studio Code
        </a>
      </button>
    </div>
  );
};

export default Button;
