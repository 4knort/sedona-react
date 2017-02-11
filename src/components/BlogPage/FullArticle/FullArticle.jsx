import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import * as dataActions from 'actions/dataActions';

import './full-article.scss';

@withRouter
@connect(state => ({
  articles: state.data.articles,
}), dataActions)
export default class FullArticle extends PureComponent {
  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetchArticles: PropTypes.func,
    params: PropTypes.object,
  }

  componentDidMount() {
    if (!this.props.articles.length) {
      this.props.fetchArticles();
    }
  }

  render() {
    const article = this.props.articles.find(item => item.id === this.props.params.id);

    return (
      <div>
        <Link className="hotels-btn" to="/blog">Back</Link>
        <h1 className="article-title">{article.title}</h1>
        <p className="article-text">{article.article}</p>
      </div>
    );
  }
}
