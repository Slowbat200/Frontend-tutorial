import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utility/motion';
import { CssTheory, CssSelectors } from '../constants';
import CssPropertiesValues from './components/CssPropertiesValues';

const Css = () => {
  /* These variables are storing arrays of CSS selectors and HTML elements. They are used in the JSX
 code to display examples of different types of selectors and their corresponding HTML elements. */
  const SelectorsHtml = ['div'];
  const SelectorsCss = ['div { /** your code here **/ }'];
  const CssSelectorsHTML = ['div class="container"'];
  const CssSelectorsClass = ['.container { /** code here **/ }'];
  const CssSelectorsHtmlId = ['div id="container"'];
  const CssSelectorsId = ['#container { /** code here **/ }'];

  return (
    <div className='flex flex-col justify-center items-center'>
      <motion.div
        variants={fadeIn('right', 'tween', 0.5, 1)}
        initial='hidden'
        whileInView='show'
        className='flex flex-col items-center w-full max-w-7xl text-white px-4 md:px-8'
      >
        <h1 className='text-3xl font-semibold md:text-4xl mb-4 py-4 text-center'>
          Cascading Style Sheets
        </h1>

        <div className='text-lg w-4/5 md:w-4/5 lg:w-3/4 xl:w-2/3 text-justify text-neutral-300'>
          {CssTheory.map((item) => (
            <p key={item.id} className='py-2 sm:text-[25px]'>
              {item.content}
            </p>
          ))}
        </div>
      </motion.div>

      {/**Start of Selectors */}
      <motion.div
        variants={fadeIn('left', 'tween', 0.6, 1)}
        initial='hidden'
        whileInView='show'
        className='flex flex-col justify-center items-center my-10 sm:w-[50%] w-full'
      >
        <h1 className='text-white text-[25px] font-semibold'>Selectory</h1>

        <div className='mx-10 py-4 my-8 px-4 w-max-[230px] rounded-md h-full'>
          <p className='text-neutral-400 sm:text-[25px] '>
            {CssSelectors.map((item) => (
              <span key={item.id}>{item.content}</span>
            ))}
          </p>
        </div>
      </motion.div>

      {/** Example of Selectors */}
      <div className='my-10 grid sm:grid-cols-3 grid-cols-1 gap-y-8 gap-x-8 w-[70%] sm:w-fit'>
        {/** Element Selector in HTML */}
        <motion.div
          variants={fadeIn('right', 'spring', 0.5, 1)}
          initial='hidden'
          whileInView='show'
          whileHover={{
            scale: 1.1,
            background: 'rgb(100, 0, 200',
            color: 'rgb(255,255,255)',
            transition: {
              duration: 0.5,
              ease: 'easeInOut',
              type: 'spring',
              stiffness: 500,
            },
          }}
          className='gap-x-4 px-8 py-5 bg-gray-500 rounded-md h-full text-[18px]'
        >
          <div className='flex flex-col'>
            <span className='text-center'>V HTML</span>
          </div>
          {SelectorsHtml.map((tag, index) => (
            <React.Fragment key={index}>
              <code>&lt;{tag}&gt;</code>

              <code>&lt;/{tag}&gt;</code>
            </React.Fragment>
          ))}
          {/** Element selector in Css */}
          <div className='flex flex-col pt-2'>
            <span className='text-center'>V CSS</span>
          </div>
          {SelectorsCss.map((selector, index) => (
            <React.Fragment key={index}>
              <code>{selector}</code>
            </React.Fragment>
          ))}
        </motion.div>

        {/** Class Selector HTML */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.5, 1)}
          initial='hidden'
          whileInView='show'
          whileHover={{
            scale: 1.1,
            background: 'rgb(50, 50, 200',
            color: 'rgb(255,255,255)',
            transition: {
              duration: 0.5,
              ease: 'easeInOut',
              type: 'spring',
              stiffness: 500,
            },
          }}
          className='flex flex-col gap-y-4 px-4 py-4 bg-gray-500 rounded-md h-full text-[18px]'
        >
          <span className='text-center'>V HTML</span>
          {CssSelectorsHTML.map((tag, index) => (
            <React.Fragment key={index}>
              <code>&lt;{tag}/&gt;</code>
            </React.Fragment>
          ))}

          {/** Class Selector CSS */}
          <span className='text-center'>V CSS</span>
          {CssSelectorsClass.map((selector, index) => (
            <React.Fragment key={index}>
              <code>{selector}</code>
              <br />
            </React.Fragment>
          ))}
        </motion.div>

        {/** ID Selector HTML */}
        <motion.div
          variants={fadeIn('left', 'tween', 0.5, 1)}
          initial='hidden'
          whileInView='show'
          whileHover={{
            scale: 1.1,
            background: 'rgb(50, 100, 200',
            color: 'rgb(255,255,255)',
            transition: {
              duration: 0.5,
              ease: 'easeInOut',
              type: 'spring',
              stiffness: 500,
            },
          }}
          className='flex flex-col gap-y-4 px-4 py-4 bg-gray-500 
                    rounded-md h-full text-[18px]'
        >
          <span className='text-center'>V HTML</span>
          {CssSelectorsHtmlId.map((tag, index) => (
            <React.Fragment key={index}>
              <code>&lt;{tag}/&gt;</code>
            </React.Fragment>
          ))}
          {/** ID Selector CSS */}
          <span className='text-center'>V CSS</span>
          {CssSelectorsId.map((selector, index) => (
            <React.Fragment key={index}>
              <code>{selector}</code>
              <br />
            </React.Fragment>
          ))}
        </motion.div>
      </div>
      <CssPropertiesValues />
    </div>
  );
};

export default Css;
