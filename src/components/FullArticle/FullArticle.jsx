import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import * as dataActions from 'actions/dataActions';

@withRouter
@connect(state => ({
  articles: state.data.articles,
}), dataActions)
export default class FullArticle extends PureComponent {

  componentWillMount() {
    if (!this.props.articles.length) {
      this.props.fetchArticles();
    }
  }

  render() {
    const article = this.props.articles.find(item => item.id === this.props.params.id)

    return (
      <div className="container">
        <Link className="hotels-btn" to="/blog">Back</Link>
        <h1>{article.title}</h1>
        <p>{article.article}</p>
      </div>
    );
  }
}
