import React, { useState, useEffect } from 'react';
import { HtmlLayout, HtmlTagLayout } from '../../style';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utility/motion';
import { commonHtmlTags, htmlTagsExample } from '../../constants';

const HtmlTags = () => {
  // State to keep track of the currently selected tag
  const [selectedTag, setSelectedTag] = useState(null);

  // Function to handle button click and set the selected tag
  const handleButtonClick = (tag) => {
    setSelectedTag(tag);
  };

  useEffect(() => {
    if (selectedTag && window.innerWidth < 768) {
      const scrollOffSet = 500;
      const selectedTagElement = document.getElementById('selected-tag');
      if (selectedTagElement) {
        const scrollY =
          selectedTagElement.getBoundingClientRect().bottom +
          window.scrollY -
          scrollOffSet;
        window.scrollTo({
          top: scrollY,
          behavior: 'smooth',
        });
      }
    }
  }, [selectedTag]);

  return (
    <div className='w-full p-10 m-10'>
      <div className='grid sm:grid-cols-3 sm:grid-rows-1 grid-cols-1 grid-rows-1 gap-y-[30em] -mb-[65em] gap-x-5  sm:py-[3em] sm:my-[0.5em] text-white'>
        <div className={`${HtmlLayout.TagBox}`}>
          <p className='mb-5 font-bold'>
            Seznam značek (nejpoužívanější značky):
          </p>
          {commonHtmlTags.map((item, index) => (
            <motion.span
              variants={fadeIn('right', 'tween', 0.7, 1)}
              initial='hidden'
              whileInView='show'
              className='grid grid-cols-2'
              key={index}
            >
              {item.tag}
              <button
                className='px-5 pb-[10px]'
                onClick={() => handleButtonClick(item.description)}
              >
                Show Description
              </button>
            </motion.span>
          ))}
        </div>
        <br />
        <div className='px-5 py-5 bg-gray-800 rounded-xl h-fit w-[35vh] relative right-[8em] sm:w-fit bottom-[55em] sm:bottom-0 sm:right-[25em]'>
          <p className='mb-5 font-bold'>
            Seznam značek (nejpoužívanější značky pokračování):
          </p>
          {htmlTagsExample.map((item, index) => (
            <motion.span
              variants={fadeIn('right', 'tween', 0.7, 1)}
              initial='hidden'
              whileInView='show'
              className='sm:grid sm:grid-cols-2 flex'
              key={index}
            >
              <code>{item.tag}</code>
              <button
                className='sm:px-5 px-4 pb-[10px]'
                onClick={() => handleButtonClick(item.description)}
              >
                Show Description
              </button>
            </motion.span>
          ))}
        </div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.8, 1)}
          initial='hidden'
          whileInView='show'
          className={`${HtmlTagLayout.TagsBox}`}
          id='selected-tag'
        >
          <p className='font-bold mb-5'>Popis vybrané značky:</p>
          <p>{selectedTag}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default HtmlTags;
