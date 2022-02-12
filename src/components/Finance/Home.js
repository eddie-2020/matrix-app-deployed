import React from 'react';
import PropTypes from 'prop-types';
import Each from './Each';

const Home = function compHome({ nasdaq }) {
  const companies = nasdaq;
  companies.sort((a, b) => b.changesPercentage - a.changesPercentage);
  return (
    <>
      <div className="canvas">
        <div className="bg-home-image" />
      </div>
      <h5 className="whatFor">Price By Company</h5>
      <div className="container-Inc">
        {companies.map((item, index) => (
          <div key={item.ticker} className="company-child p-4">
            <Each className="company-details" name={item.ticker} price={item.price} index={index} company={item.companyName} />
          </div>
        ))}
      </div>
    </>
  );
};

Home.propTypes = {
  nasdaq: PropTypes.instanceOf(Object).isRequired,
};

export default Home;
