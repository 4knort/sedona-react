import React from 'react';
import { connect } from 'react-redux';

import { 
  Article,
} from 'components';

import './blog-pagination.scss';

const BlogPagination = ({ articles }) => {
  const articleItems = articles.map(
    (article, index) => (
      <Article
        key={`article-${index}`}
        article={article}
      />
    )
  );

  return (
    <div className="blog-pagination">
      <div>
        {articleItems}
      </div>

    </div>
  )
};

export default connect(state => ({
  articles: state.data.articles,
}))(BlogPagination);
