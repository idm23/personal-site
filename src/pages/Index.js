import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Ian Mackey's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">At a glance</Link></h2>
        </div>
      </header>
      <p>
        Hi, my name is Ian and I&apos;m a recent M.Eng graduate from
        <a href="https://www.ece.cornell.edu/ece"> Cornell&apos;s department of Electrical and Computer Engineering</a>
        . During my time at Cornell, my studies were focused on Signal
        Processing, Software Engineering, and Machine Learning, specifically Computer Vision.
        Outside of my studies, I was a sprinter for
        <a href="https://cornellbigred.com/sports/mens-swimming-and-diving"> Cornell Men&apos;s Swim and Dive team</a>
        , a member of the
        <a href="https://www.spacecraftresearch.com/"> Space Systems Design Studio</a>
        , and TA&apos;d the Signal Processing series of classes when time permitted.
        <br />
        <br />
        Welcome to my website!
        Please feel free to read more <Link to="/personal">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link> {' '}
        and <Link to="/projects">projects</Link>. {' '}
        I&apos;ve been meaning to make a website for
        years now, so I have a big backlog of ideas. If you check
        back here again there may be something new!
      </p>
      <p> Website adapted from <a href="https://github.com/mldangelo/personal-site">here</a>. Thanks Michael!</p>
    </article>
  </Main>
);

export default Index;
