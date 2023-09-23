import React from 'react';
{
  /** Importing content from constants */
}
import {
  IDE,
  theory,
  frontend,
  backend,
  protocols,
  HTTP,
  HTTPS,
} from '../constants';

import { motion } from 'framer-motion';
import { fadeIn } from '../utility/motion';

import { TheoryLayout } from '../style';

const Theory = () => {
  const theoryContent = (
    <div className='container mx-auto px-4 md:px-0 py-16 md:py-20 lg:py-24 xl:py-36 overflow-hidden'>
      {/** Create animation fadeIn which comes from left to right and box for our content */}
      <motion.div
        variants={fadeIn('right', 'tween', 0.6, 1)}
        initial='hidden'
        whileInView='show'
        className={`${TheoryLayout.TheoryBox}`}
      >
        {/** Styling headings inside main box */}
        <div className={`${TheoryLayout.MarginPadding}`}>
          <div className={`${TheoryLayout.HeadingsBox}`}>
            <h1 className={`${TheoryLayout.Headings1} relative right-[1.5em]`}>
              Kapitola 1
            </h1>
            <h2 className={`${TheoryLayout.Headings2} relative right-[2em]`}>
              Jak na tvorbu webů
            </h2>
          </div>
          <p className='text-white w-[30vh] relative right-[2em] text-justify'>
            {/** Here, I call map() function which help me display texts from constats */}
            {theory.map((item) => (
              <span key={item.id}> {item.content} </span>
            ))}
          </p>
        </div>
      </motion.div>
      {/* End of Theory */}

      {/* Start of Frontend and Backend */}
      {/** Creating animation fadeIn which comes from right to left and box for our content*/}
      <motion.div
        variants={fadeIn('left', 'tween', 0.6, 1)}
        initial='hidden'
        whileInView='show'
        className={`${TheoryLayout.TheoryBox} mt-[100px]`}
      >
        {/** Styling headings inside main box */}
        <div className={`${TheoryLayout.MarginPadding}`}>
          <div className={`${TheoryLayout.HeadingsBox}`}>
            <h1 className={`${TheoryLayout.Headings1} relative right-[1.5em]`}>Kapitola 2</h1>
            <h2 className={`${TheoryLayout.Headings2} relative right-[4em]`}>
              Front-end a Back-end
            </h2>
          </div>
          {/** Importing text from constants folder a add some styles */}
          <p className='text-white w-[30vh] relative right-[2em] text-justify'>
            {/** Here, I call map() function which help me display texts from constats */}
            {[...frontend, ...backend].map((item) => (
              <span key={item.id}>
                {item.content}
              </span>
            ))}
          </p>
        </div>
      </motion.div>

      {/* Start of HTTP and HTTPS protocols */}
      {/** Creating animation fadeIn which comes from left to right and box for our content*/}
      <motion.div
        variants={fadeIn('right', 'tween', 0.6, 1)}
        initial='hidden'
        whileInView='show'
        className={`${TheoryLayout.TheoryBox} mt-[100px]`}
      >
        {/** Styling headings inside main box */}
        <div className={`${TheoryLayout.MarginPadding}`}>
          <div className={`${TheoryLayout.HeadingsBox}`}>
            <h1 className={`${TheoryLayout.Headings1} relative right-[1.5em]`}>Kapitola 3</h1>
            <h2 className={`${TheoryLayout.Headings2} relative right-[1em]`}>
              Úvod do protokolů HTTP a HTTPS
            </h2>
          </div>
          {/** Importing text from constants folder a add some styles */}
          <p className='text-white w-[30vh] relative right-[2em] text-justify'>
              {/** Here, I call map() function which help me display texts from constats */}
              {protocols.map((item) => (
                <span key={item.id}>
                  {item.content}
                </span>
              ))}
          </p>

          <h3 className={`${TheoryLayout.Headings3} relative right-[2em]`}>HTTP a HTTPS</h3>
          {/** Importing text from constants folder a add some styles */}
          <p className='text-white w-[30vh] relative right-[2em] text-justify'>
              {/** Here, I call map() function which help me display texts from constnats */}
              {[...HTTP, ...HTTPS].map((item) => (
                <span key={item.id}>
                  {item.content}
                </span>
              ))}
          </p>
        </div>
      </motion.div>

      {/* Start of IDE */}
      {/** Creating animation fadeIn which comes from right to left and box for our content*/}
      <motion.div
        variants={fadeIn('left', 'tween', 0.6, 1)}
        initial='hidden'
        whileInView='show'
        className={`${TheoryLayout.TheoryBox} mt-[100px]`}
      >
        {/** Styling headings inside main box */}
        <div className={`${TheoryLayout.MarginPadding}`}>
          <div className={`${TheoryLayout.HeadingsBox}`}>
            <h1 className={`${TheoryLayout.Headings1} relative right-[1.5em]`}>Kapitola 4</h1>
            <h2 className={`${TheoryLayout.Headings2} relative right-[1em]`}>
              Vývojové prostředí pro developery
            </h2>
          </div>
          {/** Importing text from constants folder a add some styles */}
          <p className='text-white w-[30vh] relative right-[2em] text-justify'>
              {/** Here, I call map() function which help me display texts from constats */}
              {IDE.map((item) => (
                <span key={item.id}>
                  {item.content}
                </span>
              ))}
          </p>
        </div>
      </motion.div>
    </div>
  );

  return <>{theoryContent}</>;
};

export default Theory;
