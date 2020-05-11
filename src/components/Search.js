import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Label = styled.label`
  color: #fff;
  display: inline-block;
  position: relative;
  height: 35px;
  width: 35px;
  box-sizing: border-box;
  margin: 0px 8px 7px 0px;
  padding: 7px 9px 0px 9px;
  border: 3px solid #fff;
  border-radius: 25px;
  transition: all 200ms ease;
  cursor: text;

  &:after {
    content: "";
    position: absolute;
    width: 3px;
    height: 20px;
    right: -5px;
    top: 21px;
    background: #fff;
    border-radius: 3px;
    transform: rotate(-45deg);
    transition: all 200ms ease;
  }

  &.active,
  &:hover {
    width: 200px;
    margin-right: 0px;

    &:after {
      height: 0px;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  box-sizing: border-box;
  font-family: Helvetica;
  font-size: 15px;
  color: inherit;
  background: transparent;
  outline-width: 0px;
`;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParams: "",
    };
  }

  setSearchParams = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  handleSearch = (event) => {
    if (event.charCode === 13 && this.state.searchParams) {
      this.props.history.push({
        pathname: "/search",
        searchParams: this.state.searchParams,
      });
    }
  };
  render() {
    return (
      <Container>
        <Label>
          <Input
            type='text'
            name='searchParams'
            id='searchParams'
            onKeyUp={this.setSearchParams}
            onKeyPress={(e) => this.handleSearch(e)}
          />
        </Label>
      </Container>
    );
  }
}
export default withRouter(Search);
