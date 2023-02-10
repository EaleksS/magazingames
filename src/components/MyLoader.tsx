import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={600}
    viewBox="0 0 300 600"
    backgroundColor="#14121f"
    foregroundColor="#808080"
  >
    <rect x="0" y="0" rx="15" ry="15" width="300" height="400" />
    <rect x="17" y="413" rx="9" ry="9" width="270" height="23" />
    <rect x="17" y="446" rx="9" ry="9" width="270" height="23" />
    <rect x="17" y="480" rx="9" ry="9" width="270" height="23" />
  </ContentLoader>
);

export default MyLoader;
