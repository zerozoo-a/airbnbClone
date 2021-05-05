import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWonSign, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import data from './FooterData';

const FooterContainerStyle = styled.footer`
  @media screen and (min-width: 745px) {
    .FooterContainer {
      width: 90vw;
    }
    .innerUl {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 30vw;
      }
    }
  }
  padding-left: 1.5rem;
  background-color: #f7f7f7;
  & hr {
    border-color: rgba(221, 221, 221, 0.3);
  }
  & .lang a {
    font-size: 0.875rem;
    color: #222222;
    margin-right: 1rem;
  }
`;
const FooterStyle = styled.div`
  width: 90vw;

  & .FooterContainer {
    padding: 0;
  }
  & .innerUl {
    padding: 0;
    margin: 0;
  }
  & li {
    font-size: 0.875rem;
    margin-top: 0.75rem;
    list-style: none;
    padding: 0;
  }
  & a {
    color: inherit;
    text-decoration: unset;
    cursor: pointer;
  }
  & a:hover {
    text-decoration: underline;
  }
  & hr {
    border-color: rgba(221, 221, 221, 0.3);
  }
`;
const FooterLangCurrencyCopyRight = styled.div`
  list-style: none;
  padding-top: 1rem;
  & div {
    font-size: 0.875rem;
    font-weight: 300;
  }
  & ul {
    width: 90vw;
    font-weight: 300;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    font-size: 0.875rem;
  }
  & ul li {
    list-style: none;
    padding: 0 0.2rem;
  }
  & ul li:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Footer = () => (
  <FooterContainerStyle>
    <hr />
    <FooterStyle>
      <ul className='FooterContainer'>
        {data.dataList.map((v) => (
          <li key={v.id + v.title}>
            <h4>{v.title}</h4>
            <ul className='innerUl'>
              {v.desc.map((val) => (
                <li key={val.list}>
                  <a href='#!'>{val.list} </a>
                </li>
              ))}
            </ul>
            <hr />
          </li>
        ))}
      </ul>
    </FooterStyle>
    <div className='lang'>
      <FontAwesomeIcon icon={faGlobe} /> <a href='#!'>한국어(KR)</a>
      <FontAwesomeIcon icon={faWonSign} /> <a href='#!'>KRW</a>
    </div>
    <FooterLangCurrencyCopyRight>
      <div>
        <FontAwesomeIcon icon={faCopyright} /> 2021 Airbnb, Inc.
      </div>
      <ul>
        {data.info.map((v) => (
          <li key={v.list}> {v.list} </li>
        ))}
      </ul>
    </FooterLangCurrencyCopyRight>
  </FooterContainerStyle>
);

export default Footer;
