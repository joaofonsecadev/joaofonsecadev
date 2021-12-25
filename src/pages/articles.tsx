import React from 'react';
import Helmet from 'react-helmet';
import SiteConfig from '../utils/config';

export default function Articles() {
  return (
    <>
      <Helmet title={`Articles - ${SiteConfig.title}`} />
      <article className="blog-page">
        <header>
          <div className="container">
            <h1>Articles</h1>
            <p className="description">
              Whatever I feel like writting. You may find tutorials,
              technical analysis, reviews of various types of content, etc.
            </p>
          </div>
        </header>
        <section>
          <div className="container">
            Search widget
          </div>
        </section>
      </article>
    </>
  );
}
