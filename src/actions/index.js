import * as type from "./types";

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

export const getArticles = () => {
  return (dispatch) => {
    dispatch(clearArticles());
    dispatch(loadingError(false));
    dispatch(loadingInProgress(true));

    fetch(`https://api.canillitapp.com/latest/2020-04-29`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));
        return response;
      })
      .then((response) => response.json())
      .then((articles) => dispatch(loadingSuccess(articles)))
      .catch(() => dispatch(loadingError(true)));
  };
};
