import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Card = ({ data }) => (
  <div className="card-container">
    <article className="mini-postcard">
      <header>
        <h3>{data.title}</h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

Card.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
