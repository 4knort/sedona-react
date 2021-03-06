import React, { PropTypes } from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import * as dataActions from 'actions/dataActions';
import { Article } from 'components';

import './blog-pagination.scss';

const BlogPagination = ({ articles, pageArticles, articlesOnPage, articleSetPage, tagSort }) => {
  const amountOfPages = (articles.length / articlesOnPage);

  const tagSorting = (event, tag) => {
    event.preventDefault();
    tagSort(tag);
  };

  const articleItems = pageArticles.map(
    (article, index) => (
      <Article
        tagSorting={tagSorting}
        key={`article-${index}`}
        article={article}
      />
    )
  );


  const handlePageClick = (data) => {
    const selected = data.selected;
    const from = selected * articlesOnPage;
    const to = from + articlesOnPage;

    //calling action to render
    //articles that fits a pagenumber
    articleSetPage(from, to);
  };
  return (
    <div className="blog-pagination">
      <div>
        {articleItems}
      </div>
      <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        breakLabel={<a href="">...</a>}
        breakClassName={'blog-pagination__break'}
        pageCount={amountOfPages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={'blog-pagination__list'}
        pageClassName={'blog-pagination__item'}
        subContainerClassName={'someclass someclass'}
        activeClassName={'blog-pagination__button--active'}
        pageLinkClassName={'blog-pagination__button'}
        previousClassName={'blog-pagination__item'}
        nextClassName={'blog-pagination__item'}
        previousLinkClassName={'blog-pagination__button'}
        nextLinkClassName={'blog-pagination__button'}
      />

    </div>
  );
};

BlogPagination.propTypes = {
  articlesOnPage: PropTypes.number.isRequired,
  articleSetPage: PropTypes.func.isRequired,
  tagSort: PropTypes.func.isRequired,
  articles: PropTypes.arrayOf(PropTypes.object),
  pageArticles: PropTypes.arrayOf(PropTypes.object),
};

export default connect(null, dataActions)(BlogPagination);
