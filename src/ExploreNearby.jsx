import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Calendar from './Calendar.jsx';
import nearDestinationData from './nearDestinationData';

const ExploreNearbyStyle = styled.div`
  margin: 0;
  padding: 0;
  color: #222222;
  & h2 {
    padding-left: 1.5rem;
  }
  & p {
    font-size: 1.375rem;
  }
  & .infoBox {
    display: flex;
    padding: 0;
    align-items: center;
    & div {
      width: 13rem;
    }
  }
  & li {
    list-style: none;
    cursor: pointer;
  }
  & ul {
    padding-left: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 14.75rem;
    overflow-x: scroll;
  }

  & img {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 0.4rem;
    margin: 1rem 1rem 1rem 0;
  }
  & ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

// callCalendar SearchModal처럼 구성하기
// 가까운 여행지 선택시 캘린더 창 아래에서 위로 슬라이드 업 구현

const ExploreNearby = () => {
  const [isCalendarModal, setIsCalendarModal] = useState(false);
  const [reverseScrollY, setReverseScrollY] = useState(0);
  useEffect(() => {
    if (isCalendarModal) {
      setReverseScrollY(window.pageYOffset);
      document.querySelector('body').style.position = 'fixed';
    } else {
      document.querySelector('body').style.position = 'relative';
      window.scrollTo(0, reverseScrollY);
    }
  }, [isCalendarModal]);
  const calendarModalHandler = () => {
    setIsCalendarModal(!isCalendarModal);
  };
  return (
    <ExploreNearbyStyle>
      {isCalendarModal ? (
        <Calendar
          isCalendarModal={isCalendarModal}
          setIsCalendarModal={setIsCalendarModal}
        />
      ) : null}
      <h2>가까운 여행지 둘러보기</h2>
      <ul>
        {nearDestinationData.locationList.map((v) => (
          <li key={v.alt}>
            <div className='infoBox' onClick={calendarModalHandler}>
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
