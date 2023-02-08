import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Athletics from '../components/Personal/Athletics';
import Hobbies from '../components/Personal/Hobbies';
// import Hobbies from '../components/Personal/Hobbies';

// import activities from '../data/personal/activities';
// import degrees from '../data/resume/degrees';

const sections = [
  'Athletics',
  'Hobbies',
];

const Personal = () => (
  <Main
    title="Personal"
    description="Ian Mackey's Personal."
  >
    <article className="post" id="personal">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="personal">Outside of Work</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      <Athletics />
      <Hobbies />
    </article>
  </Main>
);

export default Personal;
