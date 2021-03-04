import React from 'react';

import Campground from './Campground';

const Campgrounds = props => {
  const { list } = props;

  return (
    <ul>
      {list.map(campground => {
        return <Campground id={campground._id} title={campground.title} />;
      })}
    </ul>
  );
};

export default Campgrounds;
