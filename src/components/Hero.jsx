import { motion } from 'framer-motion';
import { fadeIn } from '../utility/motion';
import { useEffect } from 'react';
import { images } from '../constants';

const Hero = () => {
  /*useEffect(() => {
    window.onload = () => {
      alert(
        'Vítejte na mém tutoriálu pro začátečníky a pokročilé. Momentálně se web nachází ve stádiu vývoje, ale i tak si můžete přečíst pár informací o tom jak se tvoří weby. Děkuji za pochopení.'
      );
    };
  }, []);*/
  return (
    <section id='home' className='w-full'>
      <div className='container mx-auto px-4 md:px-0 py-16 md:py-24 lg:py-32 xl:py-36'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 md:gap-x-8 lg:gap-x-12 xl:gap-x-16 2xl:gap-x-20'>
          {/* Left column for h1 */}
          <div className='md:col-span-1'>
            <div className='flex flex-col items-center md:items-start md:text-left md:w-full md:max-w-md md:mx-auto md:mb-16 md:order-1'>
              <motion.h1
                variants={fadeIn('right', 'tween', 0.5, 1)}
                initial='hidden'
                whileInView='show'
                className='text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-none md:leading-none lg:leading-none'
              >
                Front-end tutorial
              </motion.h1>
            </div>
          </div>

          {/* Right column for images */}
          <motion.div
            variants={fadeIn('left', 'tween', 0.5, 1)}
            initial='hidden'
            whileInView='show'
            className='md:col-span-1'
          >
            <div className='md:flex md:flex-row items-center grid grid-cols-3 grid-flow-row gap-y-5 md:gap-x-8 pl-[50px]'>
              {images.map((image, index) => (
                <motion.div
                  whileHover={{
                    scale: 2,
                    transition: {
                      duration: 0.5,
                      ease: 'easeInOut',
                      type: 'spring',
                      stiffness: 200,
                    },
                  }}
                  key={index}
                  className='overflow-hidden w-10 h-10 md:w-12 md:h-12'
                >
                  <img
                    src={image.icon}
                    alt={image.id}
                    className='w-full h-full'
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
