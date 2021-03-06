import React, { PropTypes } from 'react';
import { Route, IndexRoute } from 'react-router';
import { HotRouter } from 'utils';

import { IndexPage, FormPage, BlogPage } from 'pages';
import { App, FullArticle } from 'components';

const AppRouter = ({ history }) => (
  <HotRouter history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={IndexPage} />
      <Route path="/form" component={FormPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="article/:id" component={FullArticle} />
    </Route>
  </HotRouter>
);

AppRouter.propTypes = { history: PropTypes.object.isRequired };
export default AppRouter;
