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
    <p>
      While I only have photos of food up for now, I&apos;m hoping to
      get some of my other hobbies up like board/video games. Food
      just happens to be more photogenic than a bunch of guys sitting
      around hunched over a TV screen getting overly competitive about
      a childrens game. Times like these I always wish I enjoyed cooler things
      like traveling or playing music, but oh well.
    </p>
  </div>
);

export default Cooking;
