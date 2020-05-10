import * as type from "./types";
import moment from "moment";

// Action Creators
export const loadingError = (bool) => ({
  type: type.LOADING_ERROR,
  hasErrored: bool,
});

export const loadingInProgress = (bool) => ({
  type: type.LOADING_IN_PROGRESS,
  isLoading: bool,
});

export const loadingSuccess = (articles) => ({
  type: type.LOADING_SUCCESS,
  articles,
});

export const clearArticles = () => ({
  type: type.CLEAR_ARTICLES,
});

export const getLatestArticles = () => {
  return (dispatch) => {
    dispatch(clearArticles());
    dispatch(loadingError(false));
    dispatch(loadingInProgress(true));

    fetch(
      `https://api.canillitapp.com/latest/${moment(new Date()).format(
        "YYYY-MM-DD"
      )}`
    )
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));
        return response;
      })
      .then((response) => {
        return response.json();
      })
      .then((articles) => dispatch(loadingSuccess(articles.splice(0, 10))))
      .catch(() => dispatch(loadingError(true)));
  };
};

export const getArticlesByCategory = (category) => {
  return (dispatch) => {
    dispatch(clearArticles());
    dispatch(loadingError(false));
    dispatch(loadingInProgress(true));

    fetch(`https://api.canillitapp.com/news/category/${category}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));
        return response;
      })
      .then((response) => {
        return response.json();
      })
      .then((articles) => dispatch(loadingSuccess(articles.splice(0, 10))))
      .catch(() => dispatch(loadingError(true)));
  };
};
