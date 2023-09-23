import { motion } from 'framer-motion';
import { features } from '../constants';
import { layout } from '../style';
import { fadeIn } from '../utility/motion';

const FeatureCard = ({ icon, title, content, index }) => (
  <motion.div
    variants={fadeIn('left', 'tween', 0.5, 1)}
    initial='hidden'
    whileInView='show'
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? 'mb-8' : 'mb-0'
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue`}
    >
      <img src={icon} alt={title} className='w-[50%] h-[50%] object-contain' />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </motion.div>
);

const Business = () => {
  return (
    <section
      id='features'
      className={`${layout.section} relative overflow-hidden`}
    >
      <div className={`${layout.sectionInfo} px-[2em] `}>
        <motion.h2
          variants={fadeIn('right', 'tween', 0.5, 1)}
          initial='hidden'
          whileInView='show'
          className={`font-poppins font-semibold xs:text-[45px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full mt-20`}
        >
           Zde najdete:
        </motion.h2>

        <motion.p
          variants={fadeIn('right', 'tween', 0.5, 1)}
          initial='hidden'
          whileInView='show'
          className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-14`}
        >
          Teorii o tom co je to tvorba webů a jak taková tvorba webů vzniká. Jak
          vytvářet webové stránky sami nebo pomocí nástrojů pro tvorbu webů. Jak
          funguje web, jaké jazyky se zde používají a jaké frameworky jsou k
          jazykům přidružené.
        </motion.p>
      </div>

      <div
        className={`${layout.sectionImg} flex-col absolute top-0 right-0 w-full transform `}
      >
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
