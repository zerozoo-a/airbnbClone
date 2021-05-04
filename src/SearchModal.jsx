import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import nearDestinationData from './nearDestinationData';

const SearchModalStyle = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  flex-direction: column;
  background-color: white;
  top: 0;
  z-index: 200;
  /* Search, bottomNav z-index=100 */
  span {
    cursor: pointer;
  }
  & ul,
  .searchStyle {
    padding: 0;
    margin-left: 1.6875rem;
    margin-top: 1.875rem;
  }
  .searchStyle {
    & :nth-child(1) {
      margin-right: 1.875rem;
      cursor: pointer;
    }
    & input {
      height: 2.375rem;
      width: 13.75rem;
      border: 0px;
      font-size: 1rem;
      margin-bottom: 1.875rem;
    }
    & input:focus {
      outline: none;
    }
  }
  & li {
    list-style: none;
    cursor: pointer;
  }
  & img {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    border-radius: 0.4rem;
    cursor: pointer;

    /* same radius as ExploreNearby border-radius */
  }
  & .onNearbyPopularLocation {
    display: flex;
    align-items: center;
  }
  & .nearbyPopularLocation {
    & > div {
      font-size: 0.75rem;
      font-weight: 700;
    }
    & li {
      display: flex;
      align-items: center;
      img {
        margin: 0.875rem 0.875rem 0.875rem 0;
      }
    }
    & div :nth-child(2) {
      font-size: 0.75rem;
      color: #bfbfbf;
    }
  }
`;

function SearchModal({ searchModalToggle, setSearchModalToggle }) {
  const [input, setInput] = useState(null);
  const [locations, setLocations] = useState([]);
  useEffect(() => setLocations(nearDestinationData), []);

  const filteredList = (input, locations) => {
    return locations.locationList.filter((iteratingLocation) => {
      if (input) {
        return (
          iteratingLocation.location.includes(input) ||
          iteratingLocation.locationEng
            .toLowerCase()
            .includes(input.toLowerCase())
        );
      } else {
        return locations;
      }
    });
  };

  return (
    <div>
      <div>
        {searchModalToggle ? (
          <SearchModalStyle>
            <div className='searchStyle'>
              <FontAwesomeIcon
                onClick={() => setSearchModalToggle(!searchModalToggle)}
                icon={faChevronLeft}
              />
              <input
                onChange={(e) => setInput(e.target.value)}
                placeholder='어디로 여행가세요?'
              />
              <div className='onNearbyPopularLocation'>
                <img
                  alt={nearDestinationData.alt}
                  src={nearDestinationData.locationImageURL}
                />
                <span>가까운 여행지 둘러보기</span>
              </div>
            </div>
            <div>
              <ul className='nearbyPopularLocation'>
                <div>근처의 인기 여행지</div>
                {filteredList(input, locations).map((v) => (
                  <li key={v.location}>
                    <img src={v.imageURL} alt={v.alt} />
                    <div>
                      <div>{v.location}</div>
                      <div>{v.distance}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </SearchModalStyle>
        ) : null}
      </div>
    </div>
  );
}
SearchModal.propTypes = {
  searchModalToggle: PropTypes.bool.isRequired,
  setSearchModalToggle: PropTypes.element.isRequired,
};
export default SearchModal;
