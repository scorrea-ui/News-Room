import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

library.add(fas);

const ListUL = styled.ul`
  list-style: none;
  margin-bottom: 1rem;
`;

const ListItem = styled.li`
  color: #fff;
  margin-top: 1rem;
`;

const Icon = styled.span`
  margin-right: 0.6rem;
`;

const Styledlink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const List = () => {
  return (
    <nav>
      <ListUL>
        <ListItem>
          <Icon>
            <FontAwesomeIcon icon='clock' />
          </Icon>
          <Styledlink to='/latest'>Home</Styledlink>
          <ListUL>
            <ListItem>
              <Icon>
                <FontAwesomeIcon icon='briefcase' />
              </Icon>
              <Styledlink to='/politica/1'>Politica</Styledlink>
            </ListItem>
            <ListItem>
              <Icon>
                <FontAwesomeIcon icon='film' />
              </Icon>
              <Styledlink to='/internacionales/2'>Internacionales</Styledlink>
            </ListItem>
            <ListItem>
              <Icon>
                <FontAwesomeIcon icon='star' />
              </Icon>
              <Styledlink to='/espectaculos/3'>Espectaculos</Styledlink>
            </ListItem>
            <ListItem>
              <Icon>
                <FontAwesomeIcon icon='flask' />
              </Icon>
              <Styledlink to='/deportes/4'>Deportes</Styledlink>
            </ListItem>
            <ListItem>
              <Icon>
                <FontAwesomeIcon icon='trophy' />
              </Icon>
              <Styledlink to='/diseño/5'>Diseño</Styledlink>
            </ListItem>
            <ListItem>
              <Icon>
                <FontAwesomeIcon icon='microchip' />
              </Icon>
              <Styledlink to='/tecnologia/6'>Tecnologia</Styledlink>
            </ListItem>
          </ListUL>
        </ListItem>
      </ListUL>
    </nav>
  );
};

export default List;
