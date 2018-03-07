import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.sass';


const TemplateWrapper = ({ children }) => (
<div> 
  <Helmet>
    <html lang="en"/>
    <title>Home | Digital Resume for Darin Levesque</title>
  </Helmet>
  
  <div id="outer-container">
    <Navbar />
    <main id="page-wrap">
      <div>{children()}</div>
    </main>
  </div>
</div>
);


TemplateWrapper.propTypes = {
  children: PropTypes.func,
};


export default TemplateWrapper;
