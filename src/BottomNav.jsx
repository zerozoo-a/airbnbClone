import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const BottomNavStyle = styled.div`
  display: flex;
  position: fixed;
  height: 5rem;
  top: 90vh;
  width: 100vw;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 100;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-top: 0.1rem solid rgba(55, 44, 44, 0.1);
  & div {
    padding: 0.2rem 1rem;
    text-align: center;
    color: #b0b0b0;
  }
  & .searchIcon .icon {
    color: #ff385c;
  }
  & .searchIcon div {
    color: #222222;
  }
`;
const BottomContainerStyle = styled.div`
  & .navOff {
    top: 100%;
    transition: all 0.2s ease-in-out;
  }
  & .navOn {
    top: 90vh;
    transition: all 0.2s ease-in-out;
  }
`;

const BottomNav = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollToggle, setScrollToggle] = useState(false);

  useEffect(() => {
    (() => {
      window.addEventListener('scroll', () => setScrollY(window.pageYOffset));
      if (scrollY > 100) {
        setScrollToggle(true);
      } else if (scrollY < 100) {
        setScrollToggle(false);
      }
    })();
    return () => {
      window.removeEventListener('scroll', () =>
        setScrollY(window.pageYOffset)
      );
    };
  });

  return (
    <>
      <BottomContainerStyle>
        <BottomNavStyle className={scrollToggle ? 'navOff' : 'navOn'}>
          <div className='searchIcon'>
            <div>
              <FontAwesomeIcon className='icon' icon={faSearch} size='2x' />
            </div>
            <div>둘러보기</div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon className='icon' icon={faHeart} size='2x' />
            </div>
            <div>위시리스트</div>
          </div>
          <div>
            <div>
              <FontAwesomeIcon className='icon' icon={faUserCircle} size='2x' />
            </div>
            <div>로그인</div>
          </div>
        </BottomNavStyle>
      </BottomContainerStyle>
    </>
  );
};

export default React.memo(BottomNav);
