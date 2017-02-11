import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import * as dataActions from 'actions/dataActions';
import {
  InnerPromo,
  TopIntro,
  BlogPagination,
} from 'components';

@connect(state => ({ data: state.data }), dataActions)
export default class BlogPage extends PureComponent {
  static propTypes = {
    data: PropTypes.object,
    fetchArticles: PropTypes.func,
  }

  componentWillMount() {
    this.props.fetchArticles();
  }
  render() {
    return (<div className="blog-page">
      <InnerPromo />
      <TopIntro page="blog" />
      <BlogPagination
        articles={this.props.data.articles}
        pageArticles={this.props.data.pageArticles}
        articlesOnPage={6}
      />
    </div>
    );
  }
}

