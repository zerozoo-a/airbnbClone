import React from 'react';
import styled from 'styled-components';

const BecomeHostStyle = styled.div`
  display: flex;
  margin: 1.5rem;
  height: 50vh;
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
    margin-top: 25%;
    transform: translate(-50%, -50%);
    color: #ffffff;
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
