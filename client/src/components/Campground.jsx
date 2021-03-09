import React from 'react';
import PropTypes from 'prop-types';

const Campground = ({ id, title }) => {
  return (
    <li key={id}>
      <a href={`/${id}`}>{title}</a>
    </li>
  );
};

Campground.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
};

export default Campground;
