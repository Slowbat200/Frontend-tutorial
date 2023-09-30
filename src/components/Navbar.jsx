import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../style';
import { motion } from 'framer-motion';
import { navVariants } from '../utility/motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav variants={navVariants} initial='hidden' whileInView='show'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-center h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            {/* Hamburger menu */}
            <button
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white xs:hover:transition xs:hover:duration-700 xs:hover:ease-in-out'
              aria-controls='mobile-menu'
              aria-expanded='false'
              onClick={toggleMenu}
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          {/* Desktop navigation links */}
          <motion.div
            whileHover={{
              scale: 1.09,
              transition: '.5s ease-out',
            }}
            className='hidden sm:block sm:ml-6'
          >
            <div className='flex space-x-4'>
              <Link
                to='/whatsnew'
                className={`${styles.desktopLinkstyles} ${styles.xsTransition}`}
              >
                What's New
              </Link>
              <Link
                to='/'
                className={`${styles.desktopLinkstyles} ${styles.xsTransition}`}
              >
                Home
              </Link>
              <Link
                to='/theory'
                className={`${styles.desktopLinkstyles} ${styles.xsTransition}`}
              >
                Theory
              </Link>
              <Link
                to='/html'
                className={`${styles.desktopLinkstyles} ${styles.xsTransition}`}
              >
                HTML
              </Link>
              <Link
                to='/css'
                className={`${styles.desktopLinkstyles} ${styles.xsTransition}`}
              >
                CSS
              </Link>
              <Link
                to='/javascript'
                className={`${styles.desktopLinkstyles} ${styles.xsTransition}`}
              >
                Javascript
              </Link>
              <Link
                to='/tailwind'
                className={`${styles.desktopLinkstyles} ${styles.xsTransition}`}
              >
                Tailwind
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Mobile navigation menu */}
      <div
        className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}
        id='mobile-menu'
      >
        <div className='px-2 pt-2 pb-3 space-y-1'>
          <Link
            to='/whatsnew'
            className={`${styles.mobileLinkStyles} ${styles.xsTransition}`}
          >
            What's New
          </Link>
          <Link
            to='/'
            className={`${styles.mobileLinkStyles} ${styles.xsTransition}`}
          >
            Home
          </Link>
          <Link
            to='/theory'
            className={`${styles.mobileLinkStyles} ${styles.xsTransition}`}
          >
            Theory
          </Link>
          <Link
            to='/html'
            className={`${styles.mobileLinkStyles} ${styles.xsTransition}`}
          >
            HTML
          </Link>
          <Link
            to='/css'
            className={`${styles.mobileLinkStyles} ${styles.xsTransition}`}
          >
            CSS
          </Link>
          <Link
            to='/javascript'
            className={`${styles.mobileLinkStyles} ${styles.xsTransition}`}
          >
            JavaScript
          </Link>
          <Link
            to='/tailwind'
            className={`${styles.mobileLinkStyles} ${styles.xsTransition}`}
          >
            Tailwind
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
