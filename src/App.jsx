import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Hero, Features, Footer } from './components';
import { Theory, Html, Css, Js, Tailwind, WhatsNew } from './pages';
import './index.css';

const App = () => (
  <Router>
    <div className='bg-primary w-full overflow-hidden'>
      <div className='flex justify-center items-center'>
        <div className='xl:max-w-[1280px] w-full z-50'>
          <Navbar />
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <div className='xl:max-[1280px] w-full'>
          <Switch>
            <Route path='/whatsnew'>
              <WhatsNew />
            </Route>
            <Route path='/theory'>
              <Theory />
            </Route>
            <Route path='/html'>
              <Html />
            </Route>
            <Route path='/css'>
              <Css />
            </Route>
            <Route path='/javascript'>
              <Js />
            </Route>
            <Route path='/tailwind'>
              <Tailwind />
            </Route>

            <Route path='/'>
              <Hero />
              <div>
                <div className='sm:px-16 px-6 flex justify-center items-center'>
                  <div className='xl:max-[1280px] w-full'>
                    <Features />
                  </div>
                </div>
                <div className='sm:px-16 px-6 mt-5 flex justify-center items-center'>
                  <div className='xl:max-[1280px] w-full'>
                    <Footer />
                  </div>
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  </Router>
);

export default App;
