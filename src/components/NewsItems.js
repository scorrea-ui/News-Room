import React, { Component } from "react";
import styled from "styled-components";

class NewsItem extends Component {
  render() {
    const Container = styled.div`
      background: white;
      border: 0.05rem solid #ededf0;
      box-shadow: 0 1.4rem 1.8rem -0.8rem rgba(0, 0, 0, 0.25);
      border-radius: 0.32rem;
      overflow: hidden;
      min-width: 100%;
    `;

    const Content = styled.div`
      padding: 1rem 1.4rem;
      color: black;
    `;

    const Title = styled.h3`
      font-size: 1.4rem;
      font-weight: 600;
      color: #3b4359;
    `;

    const Time = styled.p`
      margin-top: 0.5rem;
      font-weight: 400;
      font-size: 1.2rem;
      color: #82899e;
    `;

    const Link = styled.a`
      display: block;
      height: auto;
      margin: 2rem;
      text-decoration: none;
      width: 100%;
      @media (min-width: 768px) {
        width: 50%;
      }
      @media (min-width: 1280px) {
        width: 25%;
      }
    `;

    const NewsImage = styled.img`
      display: block;
      width: 100%;
      height: 100%;
    `;

    return (
      <Link href='#'>
        <Container>
          <NewsImage
            src='https://res.cloudinary.com/canillitappimg/image/fetch/h_200/https://www.lapoliticaonline.com/files/image/63/63321/5eb472adacd7d_600_315!.jpg?s=1241c66d675703280c7e0ad56f3a9a60&d=1588884294'
            alt='Some kind of thing'
          ></NewsImage>
          <Content>
            <Title>
              Italia: Dos equipos de fútbol de la Serie A confirman 10 casos de
              coronavirus
            </Title>
            <Time>
              <span>17:05</span>
              <span>|</span>
              <span>Telam</span>
            </Time>
          </Content>
        </Container>
      </Link>
    );
  }
}

export default NewsItem;
