/* The `styles` object is defining a set of CSS styles for different elements or classes. Each property
within the object represents a specific style class or CSS rule. */
const styles = {
  xsTransition:
    'xs:hover:transition xs:hover:duration-700 xs:hover:ease-in-out transition duration-700 ease-in-out',
  mobileLinkStyles:
    'text-gray-300 hover:text-white block px-5 py-3 rounded-md text-base font-medium hover:bg-lightPurple',
  desktopLinkstyles:
    'text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-lightPurple',
  footerLinksStyles:
    'text-gray-300 hover:text-white text-[14px] px-3 py-2 rounded-md text-sm font-medium hover:bg-lightPurple',
};
/* The `export const layout` object is defining a set of CSS styles for different elements related to
the layout of a webpage. Each property within the object represents a specific style class or CSS
rule. */
export const layout = {
  section: `flex md:flex-row flex-col`,
  sectionReverse: `flex md:flex-row flex-col-reverse`,

  sectionImgReverse: `flex-1 flex md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 flex-col`,
};

/* The `TailwindLayout` object is defining a set of CSS styles for different elements related to the
Tailwind CSS framework. Each property within the object represents a specific style class or CSS
rule. */
export const TailwindLayout = {
  heading1: 'text-white text-[30px] text-center',
  heading2: 'text-white text-[26px] text-center',
  paragraphMap: 'text-white sm:text-[22px] text-[18px]',
  container:
    'container flex items-center justify-center w-[90%] mx-[5em] my-2 px-5 py-5',
  NpmNpxSection:
    'flex justify-center items-center w-fit h-full px-3 py-3 bg-gray-700 text-white rounded-lg',
};

/* The `TheoryLayout` object is defining a set of CSS styles for different elements related to theory
layout. Each property within the object represents a specific style class or CSS rule. */
export const TheoryLayout = {
  TheoryBox:
    'bg-dimBlue rounded-lg shadow-xl w-[90%] h-full flex justify-between items-center text-left mx-[5vw]',
  MarginPadding: 'm-10 p-10',
  HeadingsBox:
    'flex flex-col items-center md:items-start md:text-left md:w-full md:max-w-md md:mx-auto md:mb-16 md:order-1 md:col-span-2',
  Headings1:
    'text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-none md:leading-none lg:leading-none md:pl-[100px] pt-[20px] md:pt-[50px] pl-0',
  Headings2:
    'text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-none md:leading-none lg:leading-none py-12',
  Headings3:
    'text-white text-xl md:text-2xl text-center lg:text-3xl font-bold leading-none md:leading-none lg:leading-none py-12',
};

export const JsLayout = {
  ExampleBox:
    'flex md:justify-between py-5 px-5 w-fit h-fit text-sm font-medium bg-gray-800 shadow-md rounded-xl mt-[50px] mb-9 sm:mt-5 ',
  GridExampleBox:
    'py-[2em] w-full h-full grid sm:grid-cols-3 grid-cols-1 sm:grid-rows-2 gap-x-[20px] gap-y-[20px] outline-none overflow-hidden',
  ComparisonFlex:
    'flex flex-wrap justify-between items-start content-baseline w-fit sm:mx-[10em] sm:w-[70%] h-fit overflow-hidden flex-row gap-y-9',
};

export const HtmlLayout = {
  ElementBox:
    'px-5 py-5 bg-gray-800 rounded-xl w-[35vh] relative right-[3em] sm:w-fit sm:right-0 text-justify',

  TagBox:
    'px-5 py-5 bg-gray-800 rounded-xl w-[35vh] relative right-[8em] sm:w-fit sm:right-0',
};
export const HtmlTagLayout = {
  TagsBox:
    'px-10 py-5 bg-gray-800 rounded-xl h-fit sm:w-[40vh] sm:absolute relative right-[8em] bottom-[75em] sm:top-[100em] w-[35vh] sm:right-[12em] ',
};
export default styles;
