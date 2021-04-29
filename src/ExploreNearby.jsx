import React from 'react';
import styled from 'styled-components';
import nearDestinationData from './nearDestinationData';

const ExploreNearbyStyle = styled.div`
  margin: 0;
  padding: 0;
  color: #222222;
  & p {
    font-size: 1.375rem;
  }
  & .infoBox {
    display: flex;
    align-items: center;
    & div {
      width: 13rem;
    }
  }
  & li {
    list-style: none;
  }
  & ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0;
    height: 13.75rem;
    overflow-x: scroll;
  }
  & img {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 0.4rem;
    margin: 1rem;
  }
`;

const ExploreNearby = () => {
  return (
    <ExploreNearbyStyle>
      <h2>가까운 여행지 둘러보기</h2>
      <ul>
        {nearDestinationData.locationList.map((v) => (
          <li key={v.alt}>
            <div className='infoBox'>
              <img src={v.imageURL} alt={v.alt} />
              <div>
                <div>
                  <b>{v.location}</b>
                </div>
                <div>{v.distance}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </ExploreNearbyStyle>
  );
};

export default ExploreNearby;
