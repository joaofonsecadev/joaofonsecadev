import React from 'react';
import { Link } from 'gatsby';

import book from '../assets/book.png';
import scroll from '../assets/scroll.png';
import helmet from '../assets/helmet.png';

const menuItems = [
  { url: '/articles', icon: scroll, label: 'Articles' },
  { url: '/projects', icon: book, label: 'Projects' },
  { url: '/about', icon: helmet, label: 'About Me' },
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
