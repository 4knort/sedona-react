import React from 'react';
import { 
  InnerPromo, 
  TopIntro, 
  BlogPagination
} from 'components';

const BlogPage = () => (
  <div className="index-page">
    <InnerPromo />
    <TopIntro page="blog" />
    <BlogPagination />
  </div>
);

export default BlogPage;
