import React, { useState, useEffect } from 'react';
import App from '../App';
import Loader from './Loader';

const AppLoader = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return <div>{loading ? <Loader /> : <App />}</div>;
};

export default AppLoader;
