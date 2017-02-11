import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as dataActions from 'actions/dataActions';

import {
  IndexPromo,
  TopIntro,
  Town,
  Features,
  Bridge,
  Reasons,
  Hotels,
  Map,
} from 'components';

@connect(state => ({ data: state.data }), dataActions)
export default class IndexPage extends PureComponent {
  componentDidMount() {
    this.props.fetchArticles();
  }
  render() {
    return (<div className="index-page">
      <IndexPromo />
      <TopIntro />
      <Town />
      <Features />
      <Bridge />
      <Reasons />
      <Hotels />
      <Map />
    </div>
    );
  }
}
