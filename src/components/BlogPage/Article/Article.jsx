import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Article = ({ article, tagSorting }) => (
  <div className="post-preview post-preview--border">
    <h2 className="post-preview__title">
      <Link to={`article/${article.id}`}>{article.title}</Link>
    </h2>
    <p className="post-preview__content">
      <Link to={`article/${article.id}`}>{article.description}</Link>
    </p>
    <div className="post-preview__tags">
      <a className="post-event" onClick={(e) => tagSorting(e, article.tag)} href="#">{article.tag}</a>
    </div>
  </div>
);

Article.PropTypes = {
  article: React.PropTypes.object.isRequired,
  tagSorting: React.PropTypes.func.isRequired,
};

export default Article;
