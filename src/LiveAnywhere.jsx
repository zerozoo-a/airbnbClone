import React from 'react';
import styled from 'styled-components';
import liveAnywhereData from './liveAnywhereData';

const LiveAnywhereStyle = styled.div`
  padding: 0;

  & h2 {
    padding-left: 1.5rem;
  }
  & ul {
    padding: 0;
    padding-left: 1.5rem;
    list-style: none;
    display: flex;
    flex-direction: row;
    column-gap: 12px;
    overflow-x: scroll;
    & img {
      width: 40vw;
      border-radius: 0.8rem;
    }
    & li {
      color: #222222;
      font-size: 1.125rem;
      width: 35vw;
    }
  }

  & ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
const LiveAnywhere = () => (
  <LiveAnywhereStyle>
    <h2>어디에서나, 여행은 살아보는거야!</h2>
    <ul>
      {liveAnywhereData.dataList.map((v) => (
        <div key={v.desc}>
          <img src={v.imageURL} alt={v.alt} />
          <li>{v.desc}</li>
        </div>
      ))}
    </ul>
  </LiveAnywhereStyle>
);
export default LiveAnywhere;
