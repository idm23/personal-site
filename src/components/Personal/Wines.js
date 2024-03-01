import React from 'react';

import cards from '../../data/personal/wine_cards';
import Card from './Card';

const Wines = () => (
  <div className="wines">
    <div className="link-to" id="wines" />
    <div className="title">
      <h3>Wines</h3>
      <p>
        I&apos;m certainly no expert on wines,
        I didn&apos;t even get to take the class at Cornell,
        but between spending time at wineries around Ithaca and cooking occasionally requiring it,
        I found myself really enjoying wine!
        After moving to California, I decided to join a wine club and
        had a ton of fun trying to guess the tasting notes on wines I&apos;ve never tried.
        I&apos;ll almost always enjoy a glass, but here&apos;s a selection of
        wines I liked enough to take a photo of, and some of my thoughts on each!
      </p>
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

export default Wines;
