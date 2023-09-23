import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utility/motion';
import { JsLayout, TheoryLayout, TailwindLayout } from '../../style';
import { Operators } from '../../constants';

const JsOperators = () => {
  /* The code is defining variables `sum`, `substract`, `times`, `division`, and `modulo` as arrays of
  strings. Each string represents a JavaScript statement that performs a specific arithmetic
  operation. */
  const sum = ['let soucet = x + y;'];
  const substract = ['let rozdil = x - y;'];
  const times = ['let soucin = x * y;'];
  const division = ['let podil = x / y;'];
  const modulo = ['let zbytek = x % y;'];
  const increment = ['let increment = i++;'];
  const decrement = ['let decrement = i--;'];

  const x = ['let x = 5;'];
  const y = ['let y = 10;'];
  const isEqual = ['console.log(x == y); // false'];
  const isNotEqual = ['console.log(x != y); // true'];
  const strictEqual = ['console.log(x === y); // false'];
  const notStrictEqual = ['console.log(x !== y); // true'];
  const greaterThan = ['console.log(x > y); // false'];
  const lessThan = ['console.log(y < x); // false'];
  const greaterThanOrEqual = ['console.log(x >= y); // false'];
  const lessThanOrEqual = ['console.log(x <= y); // true'];
  return (
    <div
      className='
    flex flex-col items-center justify-start w-[100%] h-full mt-5'
    >
      <div className='container'>
        <h1 className={`${TheoryLayout.Headings1} text-center`}>Operátory</h1>
        <p className={`${TailwindLayout.paragraphMap} my-[2em]`}>
          {Operators.map((item) => (
            <span key={item.id}>{item.content}</span>
          ))}
        </p>
        <div
          className='container
        grid grid-cols-1 grid-flow-row mx-auto my-6 md:my-9 
        '
        >
          {/** Aritmetic operators */}
          <motion.div
            variants={fadeIn('left', 'tween', 0.3, 1)}
            initial='hidden'
            whileInView='show'
            className='text-white sm:bg-dimBlue bg-mediumDarkBlue rounded-[20px] sm:mx-0 -mx-[2em] text-2xl pb-[2em] mb-[5em]'
          >
            <h2 className={`${TheoryLayout.Headings2} text-center`}>
              Aritmeticé Operátory
            </h2>
            <motion.div
              variants={fadeIn('right', 'tween', 0.6, 1)}
              initial='hidden'
              whileInView='show'
            >
              <p className='flex flex-wrap justify-evenly items-start content-start sm:w-[80%] w-fit sm:mx-[5em] h-fit overflow-hidden flex-row'>
                {[
                  ...sum,
                  ...substract,
                  ...times,
                  ...division,
                  ...modulo,
                  ...increment,
                  ...decrement,
                ].map((SumDiff, index) => (
                  <React.Fragment key={index}>
                    <code className='h-[100px] m-[10px] text-[16px] sm:text-2xl'>
                      {SumDiff}
                    </code>
                  </React.Fragment>
                ))}
              </p>
            </motion.div>
          </motion.div>

          {/** Comparison operators */}
          <motion.div
            variants={fadeIn('left', 'tween', 0.3, 1)}
            initial='hidden'
            whileInView='show'
            className='text-white sm:text-2xl text-3xl sm:bg-dimBlue bg-mediumDarkBlue rounded-[20px] sm:mx-0 -mx-[1.5em] pb-[2em] mb-[5em]'
          >
            <h2 className={`${TheoryLayout.Headings2} text-center`}>
              Porovnávací Operátory
            </h2>
            <motion.div
              variants={fadeIn('right', 'tween', 0.6, 1)}
              initial='hidden'
              whileInView='show'
              className='flex flex-col sm:flex-row justify-evenly items-center py-[2em] px-[2em]'
            >
              {[...x, ...y].map((xy, index) => (
                <React.Fragment key={index}>
                  <code className='text-[22px] sm:text-[25px]'>{xy}</code>
                </React.Fragment>
              ))}
            </motion.div>
            <motion.div
              variants={fadeIn('left', 'tween', 0.7, 1)}
              initial='hidden'
              whileInView='show'
            >
              <p className={`${JsLayout.ComparisonFlex}`}>
                {[
                  ...isEqual,
                  ...isNotEqual,
                  ...strictEqual,
                  ...notStrictEqual,
                  ...greaterThan,
                  ...lessThan,
                  ...greaterThanOrEqual,
                  ...lessThanOrEqual,
                ].map((comparison, index) => (
                  <React.Fragment key={index}>
                    <code className='font-bold h-[100px] m-[10px] text-[16px] sm:px-0 px-[2.5em] sm:text-2xl'>
                      {comparison}
                    </code>
                  </React.Fragment>
                ))}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JsOperators;
