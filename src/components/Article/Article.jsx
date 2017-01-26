import React from 'react';
import { Link } from 'react-router';
import { 

} from 'components';

const Article = ({ article }) => (
  <div className="post-preview post-preview--border">
    <h2 className="post-preview__title">
      <Link to={`/article/${article.title}`}>{article.title}</Link>
    </h2>
    <p className="post-preview__content">
      <Link to={`/article/${article.title}`}>{article.description}</Link>
    </p>
    <div className="post-preview__tags">
      <a className="post-event" href="#">{article.tag}</a>
    </div>
  </div>
);

export default Article;