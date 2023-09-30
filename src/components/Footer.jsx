import { Link } from 'react-router-dom';
import styles from '../style';
import { motion } from 'framer-motion';
import { footerVariants } from '../utility/motion';

const Footer = () => {
  return (
    <motion.footer variants={footerVariants} initial='hidden' whileInView='show'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          <div className='px-10 xs:px-0'>
            <h4 className='text-white text-lg font-semibold mb-4'>
              Informations about me
            </h4>
            <p className='text-gray-400 mb-4'>
              {' '}
              Here you will know me as a Slowbat and I will be your guide to mine
              courses on web development.
            </p>
          </div>
          <div className='xs:ml-[5em] xs:pl-0 pl-10'>
            <h4 className='text-white text-lg font-semibold mb-4'>
              Quick Links
            </h4>
            <ul className='space-y-1 grid grid-cols-2'>
              <li>
                <a
                  href='#'
                  className={`${styles.footerLinksStyles} ${styles.xsTransition} leading-8`}
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  to='/theory'
                  className={`${styles.footerLinksStyles} ${styles.xsTransition} leading-8`}
                >
                  Theory
                </Link>
              </li>
              <li>
                <Link
                  to='/html'
                  className={`${styles.footerLinksStyles} ${styles.xsTransition} leading-8`}
                >
                  Html
                </Link>
              </li>
              <li>
                <Link
                  to='/css'
                  className={`${styles.footerLinksStyles} ${styles.xsTransition} leading-8`}
                >
                  Css
                </Link>
              </li>
              <li>
                <Link
                  to='/javascirp'
                  className={`${styles.footerLinksStyles} ${styles.xsTransition} leading-8`}
                >
                  JavaScript
                </Link>
              </li>
              <li>
                <Link
                  to='/tailwind'
                  className={`${styles.footerLinksStyles} ${styles.xsTransition} leading-8`}
                >
                  Tailwind
                </Link>
              </li>
            </ul>
          </div>
          <div className='pl-10 xs:pl-0 mt-2 xs:mt-0'>
            <h4 className='text-white text-lg font-semibold mb-4'>
              Contacts and Socials
            </h4>
            <p className='text-gray-400 mb-4'>
              Instagram:{' '}
              <span className='text-gray-200'>
                <a
                  href='https://www.instagram.com/codewithsl0wbat/'
                  className={`${styles.footerLinksStyles} ${styles.xsTransition}`}
                >
                  CodeWithSl0wbat
                </a>
              </span>
            </p>
            <p className='text-gray-400'>
              Email: <span className='text-gray-200'>slowbat@seznam.cz</span>
            </p>
          </div>
        </div>
        <div className='mt-8'>
          <p className='text-center text-gray-400'>
            &copy; 2023 Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
