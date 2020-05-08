import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

class List extends Component {
  render() {
    const List = styled.ul`
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

    return (
      <nav>
        <List>
          <ListItem>
            <Icon>
              <FontAwesomeIcon icon='newspaper' />
            </Icon>
            Principales
            <List>
              <ListItem>
                <Icon>
                  <FontAwesomeIcon icon='briefcase' />
                </Icon>
                Negocios
              </ListItem>
              <ListItem>
                <Icon>
                  <FontAwesomeIcon icon='film' />
                </Icon>
                Entretenimiento
              </ListItem>
              <ListItem>
                <Icon>
                  <FontAwesomeIcon icon='star' />
                </Icon>
                Interes General
              </ListItem>
              <ListItem>
                <Icon>
                  <FontAwesomeIcon icon='flask' />
                </Icon>
                Ciencia
              </ListItem>
              <ListItem>
                <Icon>
                  <FontAwesomeIcon icon='trophy' />
                </Icon>
                Deportes
              </ListItem>
              <ListItem>
                <Icon>
                  <FontAwesomeIcon icon='microchip' />
                </Icon>
                Tecnologia
              </ListItem>
            </List>
          </ListItem>
          <ListItem>
            <Icon>
              <FontAwesomeIcon icon='clock' />
            </Icon>
            Ultimas noticias
          </ListItem>
          <ListItem>
            <Icon>
              <FontAwesomeIcon icon='user' />
            </Icon>
            Para ti
          </ListItem>
        </List>
      </nav>
    );
  }
}

export default List;
