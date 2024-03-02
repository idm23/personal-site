import React from 'react';

import cards from '../../data/personal/cooking_cards';
import Card from './Card';

const Cooking = () => (
  <div className="cooking">
    <div className="link-to" id="cooking" />
    <div className="title">
      <h3>Cooking</h3>
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

export default Cooking;
