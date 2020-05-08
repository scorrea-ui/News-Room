import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItems";

const News = () => {
  const Container = styled.main`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem 0;
    width: 100%;
  `;

  return (
    <Container>
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </Container>
  );
};

export default News;
