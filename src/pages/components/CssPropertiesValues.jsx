import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utility/motion';
import { PropertiesAndValues } from '../../constants';
import {TheoryLayout, TailwindLayout} from '../../style'

const CssPropertiesValues = () => {
  return (
    <motion.div
      variants={fadeIn('left', 'tween', 0.5, 1)}
      initial='hidden'
      whileInView='show'
      className='flex flex-col justify-center items-center my-10 w-[80%] sm:w-full'
    >
      <h1 className={`${TheoryLayout.Headings1}`}>
        Vlastnosti a hodnoty
      </h1>

      <div className='mx-10 py-4 my-8 px-4 w-max-[230px] rounded-md h-full'>
        <p className={`${TailwindLayout.paragraphMap} w-[35vh] sm:w-full`}>
          {PropertiesAndValues.map((item) => (
            <span key={item.id}>{item.content}</span>
          ))}
        </p>
      </div>
    </motion.div>
  );
};

export default CssPropertiesValues;
