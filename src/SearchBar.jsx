import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const SearchStyle = styled.div`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  & .inputWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    height: 5rem;
    width: 100vw;
    transition: all 0.4s ease-in-out;
    & .inputPosition {
      margin-top: 1.12rem;
    }
  }
  & .wpr {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0);
    height: 5rem;
    width: 100vw;
    transition: all 0.4s ease-in-out;
    & .inputPosition {
      margin-top: 1.12rem;
    }
  }
  & .inputStyle {
    background-color: #f7f7f7;
    width: 80vw;
    height: 3rem;
    border-radius: 4rem;
    border: 1px solid #e4e4e4;
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.28);
  }
  & .toggledStyle {
    background-color: #ebebeb;
    width: 80vw;
    height: 3rem;
    border-radius: 4rem;
    border: 1px solid #e4e4e4;
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
    color: #222222;
    text-align: center;
  }
  & ::-webkit-input-placeholder {
    color: #222222;
    text-align: center;
  }
  /*firefox 19+ versions*/
  & ::-moz-placeholder {
    color: #222222;
    text-align: center;
  }
  /*IE  versions*/
  & ::-ms-placeholder {
    color: #222222;
    text-align: center;
  }
  /*Latest modern browsers */

  & ::placeholder {
    color: #222222;
    text-align: center;
    background-image: url();
  }
`;

const SearchBar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollToggle, setScrollToggle] = useState(false);
  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.pageYOffset);
    });

    if (scrollY > 100) {
      setScrollToggle(true);
      console.log('scrollToggle:' + scrollToggle);
      console.log('scroll:' + scrollY);
    } else {
      setScrollToggle(false);
      console.log('scroll:' + scrollY);
      console.log('scrollToggle:' + scrollToggle);
    }
    return () => {
      window.removeEventListener('scroll', () =>
        setScrollY(window.pageYOffset)
      );
    };
  });

  return (
    <SearchStyle>
      <div className={scrollToggle ? 'inputWrapper' : 'wpr'}>
        <div className={scrollToggle ? 'toggledStyle' : 'inputStyle '}>
          <div className='inputPosition'>
            <FontAwesomeIcon icon={faSearch} className='searchIcon' />
            <input
              className='search'
              type='search'
              name='destination'
              placeholder='어디로 여행가세요?'
            />
          </div>
        </div>
      </div>
    </SearchStyle>
  );
};

export default SearchBar;
