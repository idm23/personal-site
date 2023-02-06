import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Personal = () => (
  <Main
    description="Personal Info"
  >
    <article className="post" id="Personal">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/personal">Outside of Work</Link></h2>
          <p>
            Swimming
          </p>
        </div>
      </header>
      <p>
        Coming Soon
      </p>
    </article>
  </Main>
);

export default Personal;
