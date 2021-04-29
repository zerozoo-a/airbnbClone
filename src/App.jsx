import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import SearchBar from './SearchBar';
import Banner from './Banner';
import ExploreNearby from './ExploreNearby';
import LiveAnywhere from './LiveAnywhere';
import BecomeHost from './BecomeHost';
import DiscoverExperiences from './DiscoverExperiences';

const GlobalStyle = createGlobalStyle`
body{
  color:#222222;
  padding:0;
  margin:0;
  list-style:none;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}
`;

const App = () => (
  <>
    <GlobalStyle />
    <div>
      <SearchBar />
      <Banner />
      <ExploreNearby />
      <LiveAnywhere />
      <BecomeHost />
      <DiscoverExperiences />
    </div>
  </>
);
export default App;
