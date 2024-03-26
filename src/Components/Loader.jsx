import React from 'react';
import '../styles/Loader.scss';

const Loader = () => {
  return (
    <div className="container">
      <div class="content">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
  );
};

export default Loader;
