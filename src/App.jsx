import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import SearchBar from './SearchBar';
import Banner from './Banner';
import ExploreNearby from './ExploreNearby';
import LiveAnywhere from './LiveAnywhere';
import BecomeHost from './BecomeHost';
import DiscoverExperiences from './DiscoverExperiences';
import Footer from './Footer';
import BottomNav from './BottomNav';

const GlobalStyle = createGlobalStyle`
body{
  color:#222222;
  margin:0;
  padding:0;
  list-style:none;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;
const ComponentStyle = styled.div``;

const App = () => (
  <div>
    <GlobalStyle />
    <ComponentStyle>
      <SearchBar />
      <Banner />
      <ExploreNearby />
      <LiveAnywhere />
      <BecomeHost />
      <DiscoverExperiences />
      <Footer />
      <BottomNav />
    </ComponentStyle>
  </div>
);
export default App;
