import React from 'react';
import { Link } from 'gatsby';

import projectsIcon from '../assets/book.png';
import articlesIcon from '../assets/scroll.png';
import aboutIcon from '../assets/helmet.png';

const menuItems = [
  { url: '/articles', icon: articlesIcon, label: 'Articles' },
  { url: '/projects', icon: projectsIcon, label: 'Projects' },
  { url: '/about', icon: aboutIcon, label: 'About Me' },
];

export default function Navbar() {
  return (
    <aside className="navbar">
      <section>
        <nav>
          {menuItems.map((item) => (
            <Link to={item.url} key={item.label} activeClassName="active">
              <img src={item.icon} alt={item.label} />
            </Link>
          ))}
        </nav>
      </section>
    </aside>
  );
}
