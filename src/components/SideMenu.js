import React from "react";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";

import List from "./List";

library.add(faBullhorn);

const SideMenu = () => {
  const Container = styled.aside`
    display: flex;
    background: #222;
    flex-wrap: wrap;
    align-items: strech;
    min-width: 20%;
    @media (min-width: 64rem) {
      align-content: flex-start;
    }
  `;

  const Title = styled.h1`
    font-family: sans-serif;
    color: #fff;
  `;

  const Wrapper = styled.div`
    align-items: center;
    border-bottom: 0.1rem solid #343434;
    display: flex;
    padding-bottom: 0.6rem;
    width: 100%;
  `;

  const Icon = styled.div`
    align-items: center;
    background-color: #3090e8;
    border-radius: 50%;
    color: #fff;
    display: flex;
    height: 0.8rem;
    justify-content: center;
    padding: 0.8rem;
    margin: 0 1rem;
    width: 0.8rem;
  `;

  return (
    <Container>
      <Wrapper>
        <Icon>
          <FontAwesomeIcon
            icon='bullhorn'
            style={{ transform: "skewY(-4deg)" }}
          />
        </Icon>
        <Title>News Room</Title>
      </Wrapper>
      <List />
    </Container>
  );
};

export default SideMenu;
