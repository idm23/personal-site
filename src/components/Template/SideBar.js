import React from 'react';
import { Link } from 'react-router-dom';

// import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/headshot_small.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ian Mackey</h2>
        <p>
          Recent M.Eng. graduate.
          <br />Machine Learning Engineer.
        </p>
        <ul className="actions">
          <li>
            {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/" className="button">Home</Link>}
          </li>
        </ul>
      </header>
    </section>

    <section className="blurb">
      <h2>Contact</h2>
      <p>
        Email: <a href="mailto:idm23@cornell.edu">idm23@cornell.edu</a>
        <br />Phone: (301)-655-9344
      </p>
    </section>

    <section id="footer">
      <p className="copyright">&copy; Ian Mackey <Link to="/">ianmackey.net</Link>.</p>
    </section>
  </section>
);
// contact icons tag go right above copyright
export default SideBar;
