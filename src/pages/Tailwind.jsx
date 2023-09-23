import React from 'react';
import { Tailwindcss, InstallConfig } from '../constants';
import { motion } from 'framer-motion';
import { fadeIn } from '../utility/motion';
import { TailwindLayout } from '../style';
import TailwindConfig from './components/TailwindConfig';

const Tailwind = () => {
  /* The `const Npm` and `const Npx` variables are arrays that store the commands for installing and
 initializing Tailwind CSS using npm and npx respectively. */
  const Npm = ['npm install -D tailwindcss'];
  const Npx = ['npx tailwindcss init'];

  /* This is a function component which returns JSX elements to be rendered on screen.*/
  const tailwindContent = (
    <div className='w-full h-full'>
      {/** Introducing to Tailwind course */}
      <motion.div
        variants={fadeIn('right', 'tween', 0.6, 1)}
        initial='hidden'
        whileInView='show'
      >
        <h1 className={`${TailwindLayout.heading1}`}>Tailwind CSS</h1>
        <div className={`${TailwindLayout.container} relative right-[4em] sm:right-0`}>
          <p className={`${TailwindLayout.paragraphMap}`}>
            {Tailwindcss.map((item) => (
              <span key={item.id}>{item.content}</span>
            ))}
          </p>
        </div>
      </motion.div>
      {/** Instalation and configuration */}
      <motion.div
        variants={fadeIn('left', 'tween', 0.6, 1)}
        initial='hidden'
        whileInView='show'
      >
        <h2 className={`${TailwindLayout.heading2}`}>
          Prvotní instalace a konfigurace
        </h2>
        <div className={`${TailwindLayout.container} relative right-[4em] sm:right-0`}>
          <p className={TailwindLayout.paragraphMap}>
            {InstallConfig.map((item) => (
              <span key={item.id}>{item.content}</span>
            ))}
          </p>
        </div>
      </motion.div>
      {/** instalation with npm and npx */}
      <div className='flex sm:flex-row flex-col items-center justify-center py-8 gap-y-3 gap-x-3'>
        <motion.div
          variants={fadeIn('right', 'spring', 0.6, 1)}
          initial='hidden'
          whileInView='show'
          className={`${TailwindLayout.NpmNpxSection} mb-7 sm:mb-0`}
        >
          {Npm.map((npm, index) => (
            <React.Fragment key={index}>
              <code>{npm}</code>
            </React.Fragment>
          ))}
        </motion.div>
        <motion.div
          variants={fadeIn('right', 'spring', 0.6, 1)}
          initial='hidden'
          whileInView='show'
          className={`${TailwindLayout.NpmNpxSection}`}
        >
          {Npx.map((npx, index) => (
            <React.Fragment key={index}>
              <code>{npx}</code>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
      <TailwindConfig />
    </div>
  );
  return <>{tailwindContent}</>;
};

export default Tailwind;
