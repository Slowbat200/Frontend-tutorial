import React from 'react';
import { htmlTheory, htmlTags } from '../constants';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utility/motion';
import { TypingText } from '../components';
import {Htmlelements, HtmlTags} from './components';

const OpenCloseTags = [
  'Každá značka v HTML začíná otevírací značkou, která je napsána mezi znaky < a >. Otevírací značka definuje začátek elementu a často obsahuje název elementu. Například: <p> pro vytvoření odstavce, <h1> pro nadpis první úrovně. Po otevírací značce následuje uzavírací značka, která začíná znaky </, a poté následuje název elementu. Uzavírací značka označuje konec elementu. Například: </p> uzavře odstavec, </h1> uzavře nadpis první úrovně.',
];

const HTML = () => {
  const htmlContent = (
    <div className='container mx-auto px-4 md:px-0 py-16 md:py-20 lg:py-24 xl:py-36'>
      {/** Create animation fadeIn which comes from left to right and box for our content */}
      <motion.div
        variants={fadeIn('right', 'tween', 0.6, 1)}
        initial='hidden'
        whileInView='show'
        className='bg-dimBlue
          rounded-lg shadow-xl w-[90%] h-full
          flex justify-between items-center text-left mx-[5vw] sm:mx-[5em]'
      >
        {/** Styling headings inside main box */}
        <div className='m-10 p-10'>
          <div className='flex flex-col items-center md:items-start md:text-left md:w-full md:max-w-md md:mx-auto md:mb-16 md:order-1 md:col-span-2 mr-[5em] relative right-[3em] sm:right-0'>
            <h1 className='text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-none md:leading-none lg:leading-none md:pl-[100px] pl-0'>
              Kapitola 1
            </h1>
            <motion.div
              variants={staggerContainer()}
              initial='hidden'
              whileInView='show'
              className='text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-none md:leading-none lg:leading-none py-12'
            >
              <TypingText title='| Základní HTML pojmy' />
            </motion.div>
          </div>
          <p className='text-white relative right-[5em] px-[3em] sm:right-0 sm:px-0'>
            {/** Here, I call map() function which help me display texts from constats */}
            {htmlTheory.map((item) => (
              <span key={item.id}>{item.content}</span>
            ))}
          </p>
        </div>
      </motion.div>
      {/* End of Theory */}

      {/** Creating animation fadeIn which comes from right to left and box for our content*/}
      <motion.div
        variants={fadeIn('left', 'tween', 0.6, 1)}
        initial='hidden'
        whileInView='show'
        className='flex justify-between items-center bg-dimBlue rounded-lg shadow-xl w-[90%] h-full text-left mt-[100px] mx-[5vw] sm:mx-[5em]'
      >
        {/** Styling headings inside main box */}
        <div className='m-10 px-10 pt-10 pb-0'>
          <div className='flex flex-col items-center md:items-start md:text-left md:w-full md:max-w-md md:mx-auto md:mb-16 md:order-1 md:col-span-2'>
            <h1 className='text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-none md:leading-none lg:leading-none md:pl-[100px] pt-[20px] md:pt-[50px] sm:pr-0 pr-[6em]'>
              Kapitola 2
            </h1>
            <motion.div
              variants={staggerContainer()}
              initial='hidden'
              whileInView='show'
              className='text-white text-xl md:text-3xl lg:text-4xl font-bold leading-none md:leading-none lg:leading-none md:pl-[100px] relative right-[4em] sm:right-0 py-12'
            >
              <TypingText title='| HTML tagy' />
            </motion.div>
          </div>
          {/** Importing text from constants folder a add some styles */}
          <motion.p
            variants={fadeIn('right', 'tween', 0.7, 1)}
            initial='hidden'
            whileInView='show'
            className='text-white w-[30vh] sm:text-[20px] text-[15px] sm:leading-7 leading-6 relative right-[2em] sm:w-fit sm:right-0 font-normal text-justify'
          >
            {/** Here, I call map() function which help me display texts from constats */}
            {htmlTags.map((item) => (
              <span key={item.id}>{item.content}</span>
            ))}
          </motion.p>
          <motion.p
            variants={fadeIn('right', 'tween', 0.7, 1)}
            initial='hidden'
            whileInView='show'
            className='text-white w-[30vh] sm:text-[20px] text-[15px] sm:leading-7 leading-6 relative right-[2em] sm:w-fit sm:right-0 font-normal sm:py-5 py-10 text-justify'
          >
            {/** Here, I call map() function which help me display texts */}
            {OpenCloseTags.map((tag, index) => (
              <React.Fragment key={index}>
                <span>{tag}</span>
              </React.Fragment>
            ))}
          </motion.p>
          <HtmlTags/>
          <Htmlelements />
        </div>
      </motion.div>
    </div>
  );
  return <>{htmlContent}</>;
};

export default HTML;
