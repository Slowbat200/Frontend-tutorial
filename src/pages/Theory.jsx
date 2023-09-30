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
  TheorySec,
} from '../constants';

import { Button } from '../components';
import { motion } from 'framer-motion';
import { fadeIn } from '../utility/motion';

import { TheoryLayout } from '../style';
import { space } from 'postcss/lib/list';

const RenameTag = [
  'je doplněk, který zahišťuje to, když do otevírací značky napíšete název značky tak se to samé vytvoří i u zavírací značky.',
];
const ErrorLens = ['tento doplňek slouží pro přesnější zvýraznění errorů.'];
const LiveServer = [
  'tento doplněk funguje tak, že jakmile vývojář upraví svůj kód tak se ve stejný okamžik objeví na stránce, bez toho aby musel po každý úpravě obnovovat stránku.',
];
const Prettier = [
  'prettier se stará o to aby kód byl přehledný. Po stisknutí kláves LSHIFT + ALT + F se automaticky kód formátuje.',
];

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
            <h1
              className={`${TheoryLayout.Headings1} relative right-[1.5em] sm:right-0`}
            >
              Kapitola 1
            </h1>
            <h2
              className={`${TheoryLayout.Headings2} relative right-[3em] sm:right-0`}
            >
              Jak na tvorbu webů
            </h2>
          </div>
          <p className='text-white w-[35vh] sm:w-fit relative right-[3em] sm:right-0 text-justify'>
            {/** Here, I call map() function which help me display texts from constats */}
            {theory.map((item) => (
              <span key={item.id}> {item.content}</span>
            ))}
            <Button />
            {/** Here, I call map() function which help me display texts from constats */}
            {TheorySec.map((item) => (
              <span key={item.id}> {item.content}</span>
            ))}
          </p>
          <div className='w-[40vh] sm:w-fit bg-dimBlue p-3 relative right-[4.5em] sm:right-0 rounded-xl my-[2em]'>
            <p className='text-white sm:leading-0 leading-[2em]'>
              <b>Auto Rename Tag: </b>
              {RenameTag.map((tag, index) => (
                <span>
                  <React.Fragment key={index}>{tag}</React.Fragment>
                  <div className='border-b-2 sm:border-b-0 sm:w-fit w-[50%] sm:ml-0 ml-[25%] sm:-mt-5 -mb-5 pt-5'></div>
                </span>
              ))}
              <br />
              <b>Error Lens: </b>
              {ErrorLens.map((err, index) => (
                <span>
                  <React.Fragment key={index}>{err}</React.Fragment>
                  <div className='border-b-2 sm:border-b-0 sm:w-fit w-[50%] sm:ml-0 ml-[25%] sm:-mt-5 -mb-5 pt-5'></div>                </span>
              ))}
              <br />
              <b>Live Server: </b>
              {LiveServer.map((server, index) => (
                <span>
                  <React.Fragment key={index}>{server}</React.Fragment>
                  <div className='border-b-2 sm:border-b-0 sm:w-fit w-[50%] sm:ml-0 ml-[25%] sm:-mt-5 -mb-5 pt-5'></div>                </span>
              ))}
              <br />
              <b>Prettier: </b>
              {Prettier.map((prettier, index) => (
                <span>
                  <React.Fragment key={index}>{prettier}</React.Fragment>
                </span>
              ))}
            </p>
          </div>
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
            <h1
              className={`${TheoryLayout.Headings1} relative right-[1.5em] sm:right-0`}
            >
              Kapitola 2
            </h1>
            <h2
              className={`${TheoryLayout.Headings2} relative right-[2em] sm:right-0`}
            >
              Front-end and  Back-end
            </h2>
          </div>
          {/** Importing text from constants folder a add some styles */}
          <p className='text-white w-[35vh] sm:w-fit relative right-[3em] sm:right-0 text-justify'>
            {/** Here, I call map() function which help me display texts from constats */}
            {[...frontend, ...backend].map((item) => (
              <span key={item.id}>{item.content}</span>
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
            <h1
              className={`${TheoryLayout.Headings1} relative right-[1.5em] sm:right-0`}
            >
              Kapitola 3
            </h1>
            <h2
              className={`${TheoryLayout.Headings2} relative right-[1em] sm:right-0`}
            >
              Úvod do protokolů HTTP a HTTPS
            </h2>
          </div>
          {/** Importing text from constants folder a add some styles */}
          <p className='text-white w-[35vh] sm:w-fit relative right-[3em] sm:right-0 text-justify'>
            {/** Here, I call map() function which help me display texts from constats */}
            {protocols.map((item) => (
              <span key={item.id}>{item.content}</span>
            ))}
          </p>

          <h3 className={`${TheoryLayout.Headings3} relative right-[2em]`}>
            HTTP a HTTPS
          </h3>
          {/** Importing text from constants folder a add some styles */}
          <p className='text-white w-[35vh] sm:w-fit sm:right-0 relative right-[3em] text-justify'>
            {/** Here, I call map() function which help me display texts from constnats */}
            {[...HTTP, ...HTTPS].map((item) => (
              <span key={item.id}>{item.content}</span>
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
            <h1
              className={`${TheoryLayout.Headings1} relative right-[1.5em] sm:right-0`}
            >
              Kapitola 4
            </h1>
            <h2
              className={`${TheoryLayout.Headings2} relative right-[2em] sm:right-0`}
            >
              Vývojové prostředí pro developery
            </h2>
          </div>
          {/** Importing text from constants folder a add some styles */}
          <p className='text-white w-[35vh] sm:w-fit sm:right-0 relative right-[3em] text-justify'>
            {/** Here, I call map() function which help me display texts from constats */}
            {IDE.map((item) => (
              <span key={item.id}>{item.content}</span>
            ))}
          </p>
        </div>
      </motion.div>
    </div>
  );

  return <>{theoryContent}</>;
};

export default Theory;
