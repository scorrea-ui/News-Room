import React, { Component } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItems";

class News extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const Container = styled.main`
      display: flex;
      flex-wrap: wrap;
      padding: 1rem 0;
      width: 100%;

      @media (min-width: 768px) {
        padding: 1.6rem 1rem;
      }
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
  }
}

export default News;
