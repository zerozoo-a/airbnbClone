import React from 'react';
import styled from 'styled-components';

const BannerStyle = styled.div`
  background-image: url('https://a0.muscache.com/im/pictures/b65bef33-07be-4c55-b613-bb990193e8f6.jpg?im_w=1440');
  background-size: cover;
  background-repeat: no-repeat;
  resize: both;
  background-position-y: 90%;
  & .script {
    white-space: pre-wrap;
    padding-top: 45%;
    padding-bottom: 40%;
    padding-left: 5%;
  }
  & .bannerBtn {
    background: black;
    width: 8.438rem;
    color: white;
    text-align: center;
    height: 2rem;
    line-height: 2rem;
    font-size: 0.8rem;
    border-radius: 0.6rem;
    cursor: pointer;
  }
  @media screen and (min-width: 1440px) {
    height: 34.375rem;
    & .script {
      width: 20.8475rem;
      white-space: pre-wrap;
      padding-top: 10%;
      padding-bottom: 40%;
      padding-left: 15%;
      h1 {
        font-size: 3.75rem;
        width: 13.9375rem;
      }
      .secondScript {
        display: flex;
        flex-direction: column;
        width: 23rem;
        font-size: 1.25rem;
      }
    }
    & .bannerBtn {
      background: black;
      width: 9.438rem;
      color: white;
      text-align: center;
      height: 2.2rem;
      line-height: 2rem;
      font-size: 1rem;
      border-radius: 0.6rem;
      cursor: pointer;
      margin-top: 0.9rem;
    }
  }
  @media screen and (max-width: 1439px) {
    height: 34.375rem;
    & .script {
      width: 20.8475rem;
      white-space: pre-wrap;
      padding-top: 10%;
      padding-bottom: 40%;
      padding-left: 15%;
      h1 {
        font-size: 3.75rem;
        width: 13.9375rem;
      }
      .secondScript {
        display: flex;
        width: 23rem;
        font-size: 1.25rem;
      }
    }
    & .bannerBtn {
      background: black;
      width: 9.438rem;
      color: white;
      text-align: center;
      height: 2.2rem;
      line-height: 2rem;
      font-size: 1rem;
      border-radius: 0.6rem;
      cursor: pointer;
      margin-top: 0.9rem;
    }
  }
  @media screen and (max-width: 949px) {
    height: auto;
    & .script {
      width: 20.8475rem;
      white-space: pre-wrap;
      padding-top: 30%;
      padding-bottom: 40%;
      padding-left: 15%;
      h1 {
        font-size: 2.8125rem;
        width: 10.8475rem;
      }
      .secondScript {
        display: flex;
      }
    }
    & .bannerBtn {
      background: black;
      width: 9.438rem;
      color: white;
      text-align: center;
      height: 2.2rem;
      line-height: 2rem;
      font-size: 1rem;
      border-radius: 0.6rem;
      cursor: pointer;
      margin-top: 0.9rem;
    }
  }
  @media screen and (max-width: 744px) {
    height: auto;
    & .script {
      width: 17.5rem;
      height: 12.375rem;
      white-space: pre-wrap;
      padding-top: 30%;
      padding-bottom: 40%;
      padding-left: 15%;
      h1 {
        font-size: 2.8125rem;
        width: 10rem;
      }
      .secondScript {
        display: flex;
        flex-direction: column;
      }
    }
    & .bannerBtn {
      background: black;
      width: 9.438rem;
      color: white;
      text-align: center;
      height: 2.2rem;
      line-height: 2rem;
      font-size: 1rem;
      border-radius: 0.6rem;
      cursor: pointer;
    }
  }
`;

const Banner = () => (
  <>
    <BannerStyle>
      <div className='script'>
        <h1>슬기로운 자연생활</h1>
        <div className='secondScript'>
          <span>에어비앤비가 엄선한 </span>
          <span>위시리스트를 만나보세요.</span>
        </div>
        <div className='bannerBtn'>여행 아이디어 얻기</div>
      </div>
    </BannerStyle>
  </>
);

export default Banner;
