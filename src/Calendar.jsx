import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css, keyframes } from 'styled-components';
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const slideUp = keyframes`
from{
  top:100vh;
}
to{
  top:0;
}
`;
const CalendarStyle = styled.div`
  z-index: 300;
  /* z-index: search bar:100 search modal:200 bottomNav: 100 */
  width: 100vw;
  height: 100vh;
  list-style: none;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  animation: ${slideUp} 0.6s ease-in-out;
  & * {
    font-size: 1rem;
  }
  & #faTimes {
    font-size: 2rem;
    margin: 0.4rem 0 0 0.4rem;
  }
`;
const CalendarContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Day = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];
const DaysStyle = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  margin-bottom: 3rem;
  & li {
    margin: 0 auto;
  }
`;
const CalendarTopStyle = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-around;
  margin-bottom: 3rem;
  & .calendarTitle {
    display: flex;
    text-align: center;
  }
`;
const Days = styled.div`
  padding: 0;
  display: flex;
  margin: 0 auto;
  width: 100vw;
  flex-wrap: wrap;
  font-size: 0.5em;
  height: 24.8em;
  list-style: none;

  & li:hover {
    border: 1px solid rgb(0, 138, 245);
    color: black;
  }
  & > li {
    display: flex;
    box-sizing: border-box;
    width: calc(100vw / 7);
    height: calc(100vw / 7);
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  & .prevDays {
    color: rgb(168, 176, 188);
  }

  & .nextDays {
    color: rgb(168, 176, 188);
  }
  & .clickedDay {
    background-color: rgb(83, 153, 233);
  }
`;
//  change the color of the previous and next days
const date = new Date();
date.setDate(1);
const Calendar = ({ isCalendarModal, setIsCalendarModal }) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const lastDate = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
  const prevLastDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  const prevLastDay =
    new Date(date.getFullYear(), date.getMonth(), 0).getDay() + 1;
  const [isClicked, setIsClicked] = useState(false);
  const [iter, setIter] = useState(null);
  const [iterReserve] = useState([]); // month
  const [janIterReserve, setJanIterReserve] = useState([]);
  const [febIterReserve, setFebIterReserve] = useState([]);
  const [marIterReserve, setMarIterReserve] = useState([]);
  const [aprIterReserve, setAprIterReserve] = useState([]);
  const [mayIterReserve, setMayIterReserve] = useState([]);
  const [junIterReserve, setJunIterReserve] = useState([]);
  const [julIterReserve, setJulIterReserve] = useState([]);
  const [augIterReserve, setAugIterReserve] = useState([]);
  const [sepIterReserve, setSepIterReserve] = useState([]);
  const [octIterReserve, setOctIterReserve] = useState([]);
  const [novIterReserve, setNovIterReserve] = useState([]);
  const [decIterReserve, setDecIterReserve] = useState([]);
  const [render, setRender] = useState(date);
  const [today, setToday] = useState(new Date().getDate());
  const [pageYOffset, setPageYOffset] = useState(0);
  // refs
  const refs = useRef([]); // 여러 refs를 지정 할 것이다.
  refs.current = []; // refs가 여러가지이면 refs.current는 refs를 담는 그릇이므로 여러가지여야 한다.
  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  }; // refs.current.push는 순서대로 ref값을 refs.current 배열에 담는다
  // refs setting

  const clickedHandler = (i) => {
    setIsClicked(!isClicked);
    setIter(i);
  };
  const selectorDraw = (selectedIterReserve, setSelectedIterReserve, mon) => {
    if (iter === null) {
    } else if (!selectedIterReserve.includes(iter) && month === mon) {
      setSelectedIterReserve([...selectedIterReserve, iter]);
      refs.current[iter].style.color = '#FFFFFF';
      refs.current[iter].style.backgroundColor = '#FF5A60';
      refs.current[iter].style.borderRadius = '50%';
    } else if (selectedIterReserve.includes(iter) && month === mon) {
      setSelectedIterReserve(selectedIterReserve.filter((num) => num !== iter));
      refs.current[iter].style.color = 'black';
      refs.current[iter].style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
      refs.current[iter].style.borderRadius = '50%';
    }
  };
  const selectedCounter = (selectedIterReserve) => {
    if (selectedIterReserve.length > 10) {
      refs.current[iter].style.color = 'black';
      refs.current[iter].style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
      refs.current[iter].style.borderRadius = '50%';
      for (const el of iterReserve) {
        if (el > 0) {
          // refs.current[el].style.color = "black";
          // refs.current[el].style.backgroundColor = "rgba(0, 0, 0, 0.0)";
          // refs.current[el].style.borderRadius = "50%";
        }
      }
      alert('선택 가능한 날짜는 최대 10 일입니다.');
    }
  };
  const selectedRedraw = (selectedIterReserve, mon, chk) => {
    console.log(selectedIterReserve);
    if (month === mon) {
      selectedIterReserve.map((v, i) => {
        refs.current[v].style.color = '#FFFFFF';
        refs.current[v].style.backgroundColor = '#FF5A60';
        refs.current[v].style.borderRadius = '50%';
      });
    }
  };
  useEffect(() => {
    refs.current.map((v) => {
      v.style.color = 'black';
      v.style.backgroundColor = 'rgba(0,0,0,0.0)';
      v.style.borderRadius = '50%';
    });
  }, [month]);

  useEffect(() => {
    selectedCounter(janIterReserve);
    selectorDraw(janIterReserve, setJanIterReserve, 0);
  }, [isClicked]);
  useEffect(() => {
    selectedRedraw(janIterReserve, 0);
  }, [month]);
  useEffect(() => {
    selectedCounter(febIterReserve);
    selectorDraw(febIterReserve, setFebIterReserve, 1);
  }, [isClicked]);
  useEffect(() => {
    selectedRedraw(febIterReserve, 1);
  }, [month]);

  useEffect(() => {
    selectedCounter(marIterReserve);
    selectorDraw(marIterReserve, setMarIterReserve, 2);
  }, [isClicked]);
  useEffect(() => {
    selectedRedraw(marIterReserve, 2);
  }, [month]); // redraw when came back origin month

  useEffect(() => {
    selectedCounter(aprIterReserve);
    selectorDraw(aprIterReserve, setAprIterReserve, 3);
  }, [isClicked]); // APR draw selected days in calender
  useEffect(() => {
    selectedRedraw(aprIterReserve, 3, 'apr');
  }, [month]);

  useEffect(() => {
    selectedCounter(mayIterReserve);
    selectorDraw(mayIterReserve, setMayIterReserve, 4);
  }, [isClicked]);
  useEffect(() => {
    selectedRedraw(mayIterReserve, 4);
  }, [month]); // redraw when came back origin month

  useEffect(() => {
    selectedCounter(junIterReserve);
    selectorDraw(junIterReserve, setJunIterReserve, 5);
  }, [isClicked]);
  useEffect(() => {
    selectedRedraw(junIterReserve, 5);
  }, [month]); // redraw when came back origin month

  useEffect(() => {
    selectedCounter(julIterReserve);
    selectorDraw(julIterReserve, setJulIterReserve, 6);
  }, [isClicked]);
  useEffect(() => {
    selectedRedraw(julIterReserve, 6);
  }, [month]); // redraw when came back origin month

  useEffect(() => {
    selectedCounter(augIterReserve);
    selectorDraw(augIterReserve, setAugIterReserve, 7);
  }, [isClicked]);
  useEffect(() => {
    selectedRedraw(augIterReserve, 7);
  }, [month]); // redraw when came back origin month

  useEffect(() => {
    selectedCounter(sepIterReserve);
    selectorDraw(sepIterReserve, setSepIterReserve, 8);
  }, [isClicked]);
  useEffect(() => {
    selectedRedraw(sepIterReserve, 8);
  }, [month]); // redraw when came back origin month

  useEffect(() => {
    selectedCounter(octIterReserve);
    selectorDraw(octIterReserve, setOctIterReserve, 9);
  }, [isClicked]);
  useEffect(() => {
    selectedRedraw(octIterReserve, 9);
  }, [month]); // redraw when came back origin month

  useEffect(() => {
    selectedCounter(novIterReserve);
    selectorDraw(novIterReserve, setNovIterReserve, 10);
  }, [isClicked]);
  useEffect(() => {
    selectedRedraw(novIterReserve, 10);
  }, [month]); // redraw when came back origin month

  useEffect(() => {
    selectedCounter(decIterReserve);
    selectorDraw(decIterReserve, setDecIterReserve, 11);
  }, [isClicked]);
  useEffect(() => {
    selectedRedraw(decIterReserve, 11);
  }, [month]); // redraw when came back origin month
  useEffect(() => {
    if (month === new Date().getMonth()) {
      // console.log("draw today");
      refs.current[today - 1].style.color = 'white';
      refs.current[today - 1].style.backgroundColor = 'rgb(0,138,245)';
      refs.current[today - 1].style.borderRadius = '50%';
    }
  }, [month]);
  // draw today
  useEffect(() => {
    setPageYOffset(window.pageYOffset);
  }, [isCalendarModal]);
  return (
    <CalendarStyle>
      <FontAwesomeIcon
        onClick={() => setIsCalendarModal(!isCalendarModal)}
        id='faTimes'
        icon={faTimes}
      />
      <CalendarContainer>
        <CalendarTopStyle>
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={() => {
              setRender(date.setMonth(date.getMonth() - 1));
            }}
          />
          <div className='calendarTitle'>
            {year} {months[month]}
          </div>
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={() => {
              setRender(date.setMonth(date.getMonth() + 1));
            }}
          />
        </CalendarTopStyle>

        <DaysStyle>
          {Day.map((v) => (
            <li>{v}</li>
          ))}
        </DaysStyle>
        <Days>
          {[...Array(prevLastDay === 7 ? 0 : prevLastDay)].map((v, i) => (
            <li key={i} className='prevDays'>
              <div>{prevLastDate - prevLastDay + i + 1}</div>
            </li>
          ))}
          {[...Array(lastDate)].map((v, i) => (
            <li key={i} ref={addToRefs} onClick={() => clickedHandler(i)}>
              {i + 1}
            </li>
          ))}
          {[...Array(7 - lastDay - 1)].map((v, i) => (
            <li className='nextDays'>
              <div>{i + 1}</div>
            </li>
          ))}
        </Days>
      </CalendarContainer>
    </CalendarStyle>
  );
};

export default Calendar;
