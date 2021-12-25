import React from 'react';
// import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import SiteConfig from '../utils/config';

export default function WebIndex() {
  return (
    <>
      <Helmet title={`${SiteConfig.title} - Game Developer`} />
      <SEO />
      <article className="hero">
        <header>
          <div className="container">
            <h1>Hey, I&apos;m João.</h1>
            <p className="subtitle small">
              I&apos;m a <strong>game developer</strong> from <strong>Lisbon, Portugal</strong>
              . Working as an Automation Test Engineer at Funcom, for the{' '}
              <a href="https://pr.funcom.com/Unannounced-Dune-survival-game" target="_blank" rel="noreferrer">
                open-world survival Dune game.
              </a>
            </p>
            <p className="hero-buttons">
              <a href="https://joaofonseca.dev/" className="button">
                Get the Newsletter
              </a>
            </p>
          </div>
        </header>
        {/* <div className="container">
          <h2 className="flex-header">
            <span>Latest Articles</span>
            <Link to="/articles">View All</Link>
          </h2>
        </div> */}
      </article>
    </>
  );
}
