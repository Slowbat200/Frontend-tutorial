import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utility/motion';
import { JsLayout, TheoryLayout, TailwindLayout } from '../../style';
import { DataTypes } from '../../constants';

const JsDataTypes = () => {
  const int = ['let int = 42'];
  const float = ['let float = 4.22'];
  const string = ['let string = "Hello world"'];
  const field = ['let pole = [1,2,3]'];
  const boolean = ['let boolean = true, false'];
  const object = ['let object = { jmeno: "John"}'];
  return (
    <div
      className='
      flex flex-col items-center justify-start h-full w-fit overflow-y-auto'
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.5, 1)}
        initial='hidden'
        whileInView='show'
      >
        <h1 className={`${TheoryLayout.Headings1} text-center`}>Datové typy</h1>
        <p
          className={`${TailwindLayout.paragraphMap} my-[2em] mx-0 sm:mx-[4em]`}
        >
          {DataTypes.map((item) => (
            <span key={item.id}>{item.content}</span>
          ))}
        </p>
      </motion.div>
      <div className={`${JsLayout.GridExampleBox}`}>
        {/** Int */}
        <motion.div
          variants={fadeIn('left', 'tween', 0.6, 1)}
          initial='hidden'
          whileInView='show'
        >
          <div className={`${TailwindLayout.paragraphMap} text-center bg-gray-800 py-2 rounded-[20px]`}>
            {int.map((int, index) => (
              <React.Fragment key={index}>
                <code>{int}</code>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
        {/** Float */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.7, 1)}
          initial='hidden'
          whileInView='show'
        >
          <div className={`${TailwindLayout.paragraphMap} text-center bg-gray-800 py-2 rounded-[20px]`}>
            {float.map((float, index) => (
              <React.Fragment key={index}>
                <code>{float}</code>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
        {/** String */}
        <motion.div
          variants={fadeIn('right', 'tween', 0.6, 1)}
          initial='hidden'
          whileInView='show'
        >
          <div className={`${TailwindLayout.paragraphMap} text-center bg-gray-800 py-2 rounded-[20px]`}>
            {string.map((string, index) => (
              <React.Fragment key={index}>
                <code>{string}</code>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
        {/** Field */}
        <motion.div
          variants={fadeIn('down', 'tween', 0.8, 1)}
          initial='hidden'
          whileInView='show'
        >
          <div className={`${TailwindLayout.paragraphMap} text-center bg-gray-800 py-2 rounded-[20px]`}>
            {field.map((field, index) => (
              <React.Fragment key={index}>
                <code>{field}</code>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
        {/** Boolean */}
        <motion.div
          variants={fadeIn('down', 'tween', 0.9, 1)}
          initial='hidden'
          whileInView='show'
        >
          <div className={`${TailwindLayout.paragraphMap} text-center bg-gray-800 py-2 px-2 rounded-[20px]`}>
            {boolean.map((boolean, index) => (
              <React.Fragment key={index}>
                <code>{boolean}</code>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
        {/** Object */}
        <motion.div
          variants={fadeIn('down', 'tween', 0.8, 1)}
          initial='hidden'
          whileInView='show'
        >
          <div className={`${TailwindLayout.paragraphMap} text-center bg-gray-800 py-2 rounded-[20px]`}>
            {object.map((object, index) => (
              <React.Fragment key={index}>
                <code>{object}</code>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JsDataTypes;
