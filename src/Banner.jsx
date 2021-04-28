import React from "react";
import styled from "styled-components";

const BannerStyle = styled.div`
  height: 70vh;
  background-image: url("https://a0.muscache.com/im/pictures/b65bef33-07be-4c55-b613-bb990193e8f6.jpg?im_w=720");
  background-size: cover;
  background-repeat: no-repeat;
  resize: both;
  background-position-y: 90%;
  & .script {
    width: 90%;
    white-space: pre-wrap;
    padding-top: 25%;
    padding-left: 5%;
  }
  & .script h1 {
    min-width: 7rem;
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
`;

const Banner = () => {
  return (
    <>
      <BannerStyle>
        <div className="script">
          <h1>슬기로운 자연생활</h1>
          <p>에어비앤비가 엄선한 위시리스트를 만나보세요.</p>
          <div className="bannerBtn">여행 아이디어 얻기</div>
        </div>
      </BannerStyle>
    </>
  );
};

export default Banner;
