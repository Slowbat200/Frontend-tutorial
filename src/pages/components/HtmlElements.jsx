import React from 'react';

import { HtmlLayout } from '../../style';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utility/motion';
import { htmlElements } from '../../constants';
import { TypingText } from '../../components';

/* These are arrays that store strings containing explanations and examples related to HTML elements.
They are used in the `Htmlelements` component to display information about HTML elements, their
opening and closing tags, text content, and nested elements. The strings in these arrays are
rendered as code snippets within the component. */
const htmlElementsOpenTag = [
  ' Každý HTML element začíná otevírací značkou, která obsahuje název elementu obklopený úhlovými závorkami. Například <p> je otevírací značkou pro vytvoření odstavce.',
];
const htmlElementsCloseTag = [
  ' Každý element také obsahuje uzavírací značku, která je téměř identická s otevírací značkou, ale obsahuje lomítko před názvem elementu. Například </p> je uzavírací značkou pro ukončení odstavce.',
];
const textContent = [
  ' Textový obsah elementu je to, co se zobrazuje na webové stránce. Může to být běžný text, obrázky, odkazy a další elementy. Například:',
];
const textContentExample = ['<p>Toto je textový obsah odstavce.</p>'];
const nestedElements = [
  ' Elementy mohou být vnořeny do sebe. To znamená, že můžete mít elementy uvnitř jiných elementů. Například, můžete mít odkaz uvnitř odstavce:',
];
const nestedElementsExample = [
  '<p>Toto je <a href="#">odkaz</a> v odstavci.</p>',
];
const Attributes = [
  ' Mnoho elementů může mít atributy, které poskytují další informace o elementu. Atributy se nacházejí uvnitř otevírací značky a mají název a hodnotu. Například:',
];
const AttributesExample = ['<img src="obrazek.jpg" alt="Popis obrázku">'];
const ElementsExample = [
  ' Existuje mnoho různých elementů v HTML, z nichž každý má svůj účel. Některé běžné elementy zahrnují <h1> až <h6> pro nadpisy různých úrovní, <a> pro odkazy, <ul> a <ol> pro seznamy, <table> pro tabulky, <div> pro rozdělení obsahu a mnoho dalších. Elementy v HTML tvoří strukturu a obsah webové stránky. Kombinací různých elementů a jejich správným formátováním můžete vytvořit bohaté a interaktivní webové stránky.',
];

const Htmlelements = () => {
  return (
    <div className='container'>
      <motion.div
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        className='py-[2em] my-[2em] text-white text-center'
      >
        <div className='relative right-[4em] sm:right-0'>
          <TypingText title='| Elementy' />
        </div>
        <p className = {`${HtmlLayout.ElementBox} mt-[2em]`}>
          {htmlElements.map((item) => (
            <span key={item.id}>{item.content}</span>
          ))}
        </p>
      </motion.div>

      <div className='grid sm:grid-cols-2 sm:grid-flow-row gap-y-5 gap-x-5 sm:px-[5em] sm:py-[3em] my-[5em] sm:my-[0.5em] text-white'>
        <p className={`${HtmlLayout.ElementBox}`}>
          <b>Otevírací značka (Opening Tag):</b>
          <span>
            {htmlElementsOpenTag.map((openTag, index) => (
              <React.Fragment key={index}>
                <span>{openTag}</span>
              </React.Fragment>
            ))}
          </span>
        </p>
        <p className={`${HtmlLayout.ElementBox}`}>
          <b>Uzavírací značka (Close Tag):</b>
          <span>
            {htmlElementsCloseTag.map((closeTag, index) => (
              <React.Fragment key={index}>
                <span>{closeTag}</span>
              </React.Fragment>
            ))}
          </span>
        </p>
        <p className={`${HtmlLayout.ElementBox}`}>
          <b>Textový obsah (content):</b>
          <span>
            {textContent.map((content, index) => (
              <React.Fragment key={index}>
                <span>{content}</span>
              </React.Fragment>
            ))}
          </span>
          <motion.div
            variants={fadeIn('right', 'tween', 0.7, 1)}
            initial='hidden'
            whileInView='show'
            className='sm:w-fit w-[32vh] relative right-12 bg-gray-500 p-2 m-10 rounded-lg'
          >
            <span>
              {textContentExample.map((text, index) => (
                <React.Fragment key={index}>
                  <code>{text}</code>
                </React.Fragment>
              ))}
            </span>
          </motion.div>
        </p>
        <p className={`${HtmlLayout.ElementBox}`}>
          <b>Vnořené elementy (Nested Elements):</b>
          <span>
            {nestedElements.map((content, index) => (
              <React.Fragment key={index}>
                <span>{content}</span>
              </React.Fragment>
            ))}
          </span>
          <motion.div
            variants={fadeIn('right', 'tween', 0.7, 1)}
            initial='hidden'
            whileInView='show'
            className='sm:w-fit w-[27vh] relative right-5 bg-gray-500 p-2 m-10 rounded-lg'
          >
            <span>
              {nestedElementsExample.map((text, index) => (
                <React.Fragment key={index}>
                  <code>{text}</code>
                </React.Fragment>
              ))}
            </span>
          </motion.div>
        </p>

        <p className={`${HtmlLayout.ElementBox}`}>
          <b>Atributy (Attributes): </b>
          <span>
            {Attributes.map((content, index) => (
              <React.Fragment key={index}>
                <span>{content}</span>
              </React.Fragment>
            ))}
          </span>
          <motion.div
            variants={fadeIn('right', 'tween', 0.7, 1)}
            initial='hidden'
            whileInView='show'
            className='sm:w-fit w-[25vh] relative right-5 bg-gray-500 p-2 m-10 rounded-lg'
          >
            <span className='text-[16px]'>
              {AttributesExample.map((text, index) => (
                <React.Fragment key={index}>
                  <code>{text}</code>
                </React.Fragment>
              ))}
            </span>
          </motion.div>
        </p>

        <p className={`${HtmlLayout.ElementBox}`}>
          <b>Příklady elementů: </b>
          <span>
            {ElementsExample.map((content, index) => (
              <React.Fragment key={index}>
                <span>{content}</span>
              </React.Fragment>
            ))}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Htmlelements;
