import React from "react";
import Calendar from "./Calendar";
import SearchBar from "./SearchBar";
import Banner from "./Banner";
import ExploreNearby from "./ExploreNearby";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  padding:0;
  margin:0;
  list-style:none;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <SearchBar />
        <Banner />
        <ExploreNearby />
        <div></div>
        <div>navbar</div>
      </div>
    </>
  );
};
export default App;
