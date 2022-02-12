import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listAPIcall } from '../redux/Home/home';
import Top from '../components/Finance/Top';
import Home from '../components/Finance/Home';

const Main = function mainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listAPIcall());
  }, []);
  const result = useSelector((state) => state.countriesReducer);
  return (
    <>
      <Top />
      <div>
        <Home nasdaq={result} />
      </div>
    </>
  );
};

export default Main;
