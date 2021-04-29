import React from 'react';
import styled from 'styled-components';
import liveAnywhereData from './liveAnywhereData';

const LiveAnywhereStyle = styled.div`
  padding: 0;
  margin: 0;
  overflow-x: scroll;
  & h2 {
    padding: 0 0 0 2.5rem;
  }
  & ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    column-gap: 12px;
    & img {
      width: 70vw;
      border-radius: 0.8rem;
    }
    & li {
      color: #222222;
      font-size: 1.125rem;
    }
  }
`;
const LiveAnywhere = () => (
  <LiveAnywhereStyle>
    <h2>어디에서나, 여행은 살아보는거야!</h2>
    <ul>
      {liveAnywhereData.dataList.map((v) => (
        <div>
          <img src={v.imageURL} alt={v.alt} />
          <li>{v.desc}</li>
        </div>
      ))}
    </ul>
  </LiveAnywhereStyle>
);
export default LiveAnywhere;
