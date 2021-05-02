import React from 'react';
import styled from 'styled-components';
import data from './discoverExperiencesData';

const DiscoverExperiencesStyle = styled.div`
  padding: 0 1.5rem;
  & h2 {
    font-weight: 600;
  }
  & ul {
    display: flex;
    gap: 0.75rem;
    padding: 0;
    overflow-x: scroll;
  }
  & li {
    list-style: none;
  }
  & img {
    width: 62vw;
    border-radius: 0.8rem;
  }
  & div {
    font-size: 1.225rem;
    font-weight: 600;
  }
  & ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
const DiscoverExperiences = () => (
  <>
    <DiscoverExperiencesStyle>
      <h2>체험 둘러보기</h2>
      <div>
        현지 전문가와 함께하는 독특한 액티비티에 오프라인이나 온라인으로
        참여해보세요.
      </div>
      <ul>
        {data.dataList.map((v) => (
          <li key={v.id}>
            <img alt={v.alt} src={v.imageURL} />
            <div>{v.title}</div>
            <p>{v.desc}</p>
          </li>
        ))}
      </ul>
    </DiscoverExperiencesStyle>
  </>
);

export default DiscoverExperiences;
