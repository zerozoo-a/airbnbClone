import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const SearchStyle = styled.div`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  & .inputStyle {
    background-color: #f7f7f7;
    width: 80vw;
    height: 3rem;
    border-radius: 4rem;
    border: 1px solid #e4e4e4;
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.28);
  }
  & .searchIcon {
    color: #ff385c;
  }
  & .inputPosition {
    display: flex;
    flex-wrap: nowrap;
    background-color: rgba(0, 0, 0, 0);
    height: 1.5rem;
    border: 0px;
    position: absolute;
    left: 50%;
    top: 1.5rem;
    font-weight: 600;
    color: #242424;
    transform: translate(-50%, -50%);
    padding: 0;
    align-items: center;
  }
  & input {
    background-color: rgba(0, 0, 0, 0);
    border: 0px;
    font-weight: 600;
    color: #242424;
  }
  & ::placeholder {
    color: black;
    text-align: center;
  }
  & ::-webkit-input-placeholder {
    color: black;
    text-align: center;
  }
  /*firefox 19+ versions*/
  & ::-moz-placeholder {
    color: black;
    text-align: center;
  }
  /*IE  versions*/
  & ::-ms-placeholder {
    color: black;
    text-align: center;
  }
  /*Latest modern browsers */

  & ::placeholder {
    color: black;
    text-align: center;
    background-image: url();
  }
`;
const SearchBar = () => {
  //home screen implement
  //searchBar onClick시 SearchDestination으로 덮어준다.

  return (
    <SearchStyle>
      <div className="inputStyle">
        <div className="inputPosition">
          <FontAwesomeIcon icon={faSearch} className="searchIcon" />
          <input
            className="search"
            type="search"
            name="destination"
            placeholder="어디로 여행가세요?"
          />
        </div>
      </div>
    </SearchStyle>
  );
};

export default SearchBar;
