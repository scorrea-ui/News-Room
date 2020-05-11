import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import NewsItem from "./NewsItems";
import {
  getLatestArticles,
  clearArticles,
  getArticlesByCategory,
  getSearch,
} from "../actions";
import PropTypes from "prop-types";
import Search from "./Search";

const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 2rem;
  position: relative;
  width: calc(100% - 4rem);
  @media (min-width: 1280px) {
    width: 100%;
  }
`;

const Loader = styled.div`
  animation: load4 1.3s infinite linear;
  color: #000000;
  font-size: 20px;
  margin: 0 auto;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  left: 60%;
  position: absolute;
  text-indent: -9999em;
  top: 50%;
  transform: translateX(-50%);
  transform: translateZ(0);

  @keyframes load4 {
    0%,
    100% {
      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
    }
    12.5% {
      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    25% {
      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    37.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
        0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    50% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
        0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    62.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
    }
    75% {
      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em,
        2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em,
        -2em -2em 0 0;
    }
    87.5% {
      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
    }
  }
`;

class News extends React.Component {
  async componentDidMount() {
    await this.props.getLatestArticles();
  }
  async componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      if (
        this.props.location.pathname === "/search" ||
        this.props.location.searchParams
      ) {
        const searchResults = await this.props.getSearch(
          this.props.location.searchParams
        );
        if (searchResults) this.setState({ articles: searchResults });
      } else if (this.props.match.params.categoryID !== undefined) {
        this.props.getArticlesByCategory(this.props.match.params.categoryID);
      } else {
        await this.props.getLatestArticles();
      }
    }
  }

  render() {
    const { hasError, isLoading, articles } = this.props;

    if (hasError) {
      return <h1>Sorry! There was an error loading the articles.</h1>;
    }

    if (isLoading) {
      return <Loader></Loader>;
    }

    if (articles.length <= 0) {
      return (
        <div id='notfound'>
          <div className='notfound'>
            <div className='notfound-404'>
              <h1>
                <span></span>
              </h1>
            </div>
            <h2>No results</h2>
            <p>
              Sorry but the results you are looking for does not exist, have
              been removed. name changed or is temporarily unavailable
            </p>
            <div className='notfound-search'>
              <Search />
            </div>
          </div>
        </div>
      );
    }

    return (
      <Container>
        {articles.map((article) => {
          return (
            <NewsItem
              category={article.category}
              date={article.date}
              key={article.news_id}
              id={article.news_id}
              img={article.img_url}
              title={article.title}
              url={article.url}
              source={article.source_name}
            />
          );
        })}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    hasError: state.loadingError,
    isLoading: state.loadingInProgress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLatestArticles: () => dispatch(getLatestArticles()),
    getArticlesByCategory: (category) =>
      dispatch(getArticlesByCategory(category)),
    clearArticles: () => dispatch(clearArticles()),
    getSearch: (data) => dispatch(getSearch(data)),
  };
};

News.propTypes = {
  articles: PropTypes.array,
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool,
  getArticles: PropTypes.func,
  clearArticles: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
