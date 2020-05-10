import React, { Component } from "react";
import styled from "styled-components";
import SideMenu from "./components/SideMenu";
import News from "./components/News";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    const Container = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: 100vh;
      @media (min-width: 64rem) {
        flex-direction: row;
      }
    `;

    const categories = [
      { key: null },
      { key: "politica" },
      { key: "internacionales" },
      { key: "tecnologia" },
      { key: "espectaculos" },
      { key: "deportes" },
      { key: "diseño" },
    ];

    return (
      <Container>
        <SideMenu />
        <Switch>
          {categories.map((category) => {
            return (
              <Route
                key={category.key}
                path={`${
                  category.key ? "/news/category/" + category.key : "/"
                }`}
                exact
                render={(props) => <News {...props} category={category.key} />}
              />
            );
          })}
        </Switch>
      </Container>
    );
  }
}

export default App;
