import React from 'react';
import styled from 'styled-components';
import liveAnywhereData from './liveAnywhereData';

const LiveAnywhere = styled.div`
  padding: 0;
  margin: 0;
  overflow-x: scroll;
  & ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    column-gap: 12px;
    & img {
      width: 70vw;
    }
    & li {
      color: #222222;
      font-size: 1.125rem;
    }
  }
`;

const OverflowYscroll = () => (
  <>
    <OverflowYscrollStyle>
      <ul>
        {liveAnywhereData.dataList.map((v) => (
          <div>
            <img src={v.imageURL} alt={v.alt} />
            <li>{v.desc}</li>
          </div>
        ))}
      </ul>
    </OverflowYscrollStyle>
  </>
);

export default OverflowYscroll;
