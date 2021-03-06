import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const detail = query.detail === "true";
  console.log("query", query, detail);
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터 기초를 실습해보는 컴포넌트</p>
      {detail && <p>추가적인 정보 출력출력..</p>}
    </div>
  );
};

export default About;
