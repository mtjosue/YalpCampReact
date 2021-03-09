import React from 'react';
import PropTypes from 'prop-types';

import Campground from './Campground';

const Campgrounds = props => {
  const { list } = props;

  return (
    <ul>
      {list.map(campground => {
        return <Campground key={campground._id} title={campground.title} />;
      })}
    </ul>
  );
};

Campgrounds.propTypes = {
  list: PropTypes.array,
};

export default Campgrounds;
