import React from 'react';

import cards from '../../data/personal/athletic_cards';
import Card from './Card';

const Athletics = () => (
  <div className="athletics">
    <div className="link-to" id="athletics" />
    <div className="title">
      <h3>Athletics</h3>
      <div className="app">
        <div className="hs full no-scrollbar">
          {cards.map((project) => (
            <Card
              data={project}
              key={project.title}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Athletics;
