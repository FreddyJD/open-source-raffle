import React from 'react';
import MainPage from '../component/MainPage';

import PropTypes from 'prop-types';
import template from '../static/template';

const Index = ({ isLoggedIn }) => (
    <>
       <MainPage />
    </>
  );


  Index.propTypes = {
    isLoggedIn: PropTypes.bool
  }
  export default template(Index);