import React from 'react';
import styled from 'styled-components';

const BecomeHostStyle = styled.div`
  position: relative;
  display: flex;
  margin: 1.5rem;
  height: 70vh;
  flex-direction: column;
  background-image: url(https://a0.muscache.com/im/pictures/5b4dc94a-0b4c-4c27-b50f-9c5a5b93c775.jpg?im_w=1440);
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #f7f7f7;
  border-radius: 1rem;
  font-size: 2.5rem;
  & .desc {
    position: relative;
    width: auto;
    height: auto;
    text-align: center;
    position: absolute;
    left: 25%;
    top: 45%;
    transform: translate(-50%, -50%);
    color: #ffffff;
  }
  & .btn {
    width: 10.98rem;
    height: 3rem;
    color: #222222;
    background-color: #ffffff;
    line-height: 3rem;
    margin: 0 auto;
    border-radius: 0.5rem;
    font-size: 1.6rem;
    cursor: pointer;
  }
  p {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 1440px) {
    display: flex;
    margin: 1.5rem;
    height: 70vh;
    flex-direction: column;
    background-image: url(https://a0.muscache.com/im/pictures/5b4dc94a-0b4c-4c27-b50f-9c5a5b93c775.jpg?im_w=1440);
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #f7f7f7;
    border-radius: 1rem;
    font-size: 2rem;
    & .desc {
      position: relative;
      width: 50vw;
      height: auto;
      text-align: center;
      position: absolute;
      left: 25%;
      top: 45%;
      transform: translate(-50%, -50%);
      color: #ffffff;
    }
    & .btn {
      width: 9.98rem;
      height: 2rem;
      color: #222222;
      background-color: #ffffff;
      line-height: 2rem;
      margin: 0 auto;
      border-radius: 0.5rem;
      font-size: 1.3rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
  @media screen and (max-width: 820px) {
    display: flex;
    margin: 1.5rem;
    height: 70vh;
    flex-direction: column;
    background-image: url(https://a0.muscache.com/im/pictures/791aba62-2de8-4722-99b5-45838715eb34.jpg?im_w=720);
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #f7f7f7;
    border-radius: 1rem;
    & .desc {
      width: auto;
      height: auto;
      text-align: center;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #ffffff;
      font-size: 1rem;
    }
    & .btn {
      width: 7.48rem;
      height: 2.225rem;
      color: #222222;
      background-color: #ffffff;
      line-height: 2.225rem;
      margin: 0 auto;
      border-radius: 0.5rem;
      font-size: 0.875rem;
    }
  }
  @media screen and (max-width: 650px) {
    display: flex;
    margin: 1.5rem;
    height: 70vh;
    flex-direction: column;
    background-image: url(https://a0.muscache.com/im/pictures/791aba62-2de8-4722-99b5-45838715eb34.jpg?im_w=720);
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #f7f7f7;
    border-radius: 1rem;
    & .desc {
      width: auto;
      height: auto;
      text-align: center;
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #ffffff;
      font-size: 1rem;
      p {
        font-size: 0.9rem;
      }
    }
    & .btn {
      width: 7.48rem;
      height: 2.225rem;
      color: #222222;
      background-color: #ffffff;
      line-height: 2.225rem;
      margin: 0 auto;
      border-radius: 0.5rem;
      font-size: 0.875rem;
    }
  }
`;

const BecomeHost = () => (
  <>
    <BecomeHostStyle>
      <div className='desc'>
        <h2>호스트가 되어보세요</h2>
        <p>숙소를 공유하여 부수입을 올리고 새로운 가능성을 만나세요.</p>
        <div className='btn'>자세히 알아보기</div>
      </div>
    </BecomeHostStyle>
  </>
);

export default BecomeHost;
