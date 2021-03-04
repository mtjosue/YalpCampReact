import React from 'react';

const Campground = ({ id, title }) => {
  return (
    <li key={id}>
      <a href={`/${id}`}>{title}</a>
    </li>
  );
};

export default Campground;
