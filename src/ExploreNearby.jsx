import React from "react";
import nearDestinationData from "./nearDestinationData";
import styled from "styled-components";

const ExploreNearbyStyle = styled.div`
  margin: 0;
  padding: 0;
  outline: 1px solid red;
  & .infoBox {
    display: flex;
    & div {
      width: 50vw;
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
    height: 12.75rem;
    overflow-x: scroll;
    outline: 1px solid red;
  }
  & img {
    width: 3rem;
    height: 3rem;
    border-radius: 0.4rem;
    margin: 1rem;
  }
`;

const ExploreNearby = () => {
  return (
    <ExploreNearbyStyle>
      가까운 여행지 둘러보기
      <ul>
        {nearDestinationData.locationList.map((v) => (
          <li key={v.alt}>
            <div className="infoBox">
              <img src={v.imageURL} alt={v.alt} />
              <div>
                <div>{v.location}</div>
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
