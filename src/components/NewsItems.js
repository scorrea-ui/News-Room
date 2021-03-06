import React from "react";
import styled from "styled-components";
import moment from "moment";

const Container = styled.div`
  align-items: stretch;
  background: white;
  border: 0.05rem solid #ededf0;
  box-shadow: 0 1.4rem 1.8rem -0.8rem rgba(0, 0, 0, 0.25);
  border-radius: 0.32rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;

  @media (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 20px;
    width: calc(48% - 20px);
  }

  @media (min-width: 1280px) {
    width: 30%;
  }
`;

const Content = styled.div`
  color: black;
  height: 100%;
  min-height: 8rem;
  padding: 1rem 1.4rem;
`;

const Title = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #3b4359;
`;

const News = styled.a`
  background-color: #000;
  border-radius: 1.4rem;
  color: #fff;
  display: block;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  max-width: 8rem;
`;

const Time = styled.p`
  color: #82899e;
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 0.5rem;
`;

const Link = styled.a`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  width: 100%;
`;

const NewsImage = styled.img`
  height: 100%;
  max-height: 10rem;
  width: 100%;
`;

const NewsItem = (props) => {
  const { title, img, url, source, date } = props;

  return (
    <Container>
      <Link href={url}>
        <NewsImage src={img} alt={title}></NewsImage>
        <Content>
          <Title>{title}</Title>
          <Time>
            <span>Posted:</span>
            <span>{moment.duration(date).humanize()} ago | </span>
            <span>{source || "N/A"}</span>
          </Time>
          <News href={url}>Learn More</News>
        </Content>
      </Link>
    </Container>
  );
};

export default NewsItem;
