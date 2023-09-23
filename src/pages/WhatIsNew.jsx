'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import { fadeIn, staggerContainer, textVariant2 } from '../utility/motion';
import { Update } from '../constants/whatsNew';

const WhatIsNew = () => {
  return (
    <div
      className='
      flex flex-col sm:items-center items-left sm:justify-center h-fit bg-[#120F34] text-white'
    >
      <motion.div
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
      >
        <h1 className='text-center py-[2.5em] sm:py-[2em]'>
          <TypingText title='| Whats New here?' />
        </h1>
      </motion.div>

      {/** Displaying content and making Typing effect */}
      <div className='sm:py-[2em] sm:px-[5em] px-5'>
        <motion.div
          variants={fadeIn('right', 'tween', 0.9, 1)}
          initial='hidden'
          whileInView='show'
          className='flex flex-col-reverse gap-y-5'
        >
          {Update.map((item) => (
            <div
              className='bg-gray-800 w-full my-2 sm:p-10 p-3 rounded-lg'
            >
              <span key={item.id}>
                <motion.span
                  variants={textVariant2}
                  initial='hidden'
                  whileInView='show'
                  className='text-secondary-white text-[18px]'
                  >
                  {[ ...item.date, <br />, ...item.description]}
                </motion.span>
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhatIsNew;
