// src/CarouselSlide.js
import React from 'react';
import propTypes from 'prop-types';

const CarouselSlide = ({
  imgUrl, description, attribution, ...rest
}) => (
  <figure {...rest}>
    <img src={imgUrl} alt="" />
    <figcaption>
      <strong>{description}</strong>
      {' '}
      {attribution}
    </figcaption>
  </figure>
);

CarouselSlide.propTypes = {
  imgUrl: propTypes.string.isRequired,
  description: propTypes.node.isRequired,
  attribution: propTypes.node,
};

CarouselSlide.defaultProps = {
  attribution: null,
};

export default CarouselSlide;
