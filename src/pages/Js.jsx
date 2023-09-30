import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utility/motion';
import { basicSyntax } from '../constants';
import { JsLayout } from '../style';
import { JsDataTypes, JsOperators } from './components';

const Js = () => {
  const jsContent = (
    <div className='h-full w-full'>
      {/** Basic syntax */}
      <div className='container w-fit h-fit mx-[5em] my-[5em] sm:my-0'>
        <motion.div
          variants={fadeIn('right', 'tween', 0.6, 1)}
          initial='hidden'
          whileInView='show'
        >
          <h1
            variants={fadeIn('right', 'tween', 0.6, 1)}
            initial='hidden'
            whileInView='show'
            className='text-white text-center text-[30px]'
          >
            Základní syntaxe
          </h1>
          <div className='sm:w-[77%] w-[35vh] relative right-[2em] text-justify sm:left-[8%] my-6'>
            <p className='text-white text-[23px]'>
              {basicSyntax.map((item) => (
                <span key={item.id}>{item.content}</span>
              ))}
            </p>
          </div>
        </motion.div>
        <div className='flex sm:flex-row flex-col justify-center items-center sm:gap-x-5 gap-y-3 '>
          <motion.div
            variants={fadeIn('left', 'tween', 0.9, 1)}
            initial='hidden'
            whileInView='show'
            className={`${JsLayout.ExampleBox}`}
          >
            <code className='text-white text-xl'>let cislo = 42;</code>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 'tween', 0.9, 1)}
            initial='hidden'
            whileInView='show'
            className={`${JsLayout.ExampleBox}`}
          >
            <code className='text-white text-xl'>var cislo = 42;</code>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 'tween', 0.9, 1)}
            initial='hidden'
            whileInView='show'
            className={`${JsLayout.ExampleBox}`}
          >
            <code className='text-white text-xl'>const cislo = 42;</code>
          </motion.div>
        </div>
        <JsDataTypes />
        <JsOperators />
      </div>
    </div>
  );
  return <>{jsContent}</>;
};

export default Js;
