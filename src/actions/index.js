import * as type from "./types";

// Action Creators
export const loadingError = (boolean) => ({
  type: type.LOADING_ERROR,
  hasErrored: boolean,
});

export const loadingInProgress = (boolean) => ({
  type: type.LOADING_IN_PROGRESS,
  isLoading: boolean,
});

export const loadingSuccess = (articles) => ({
  type: type.LOADING_SUCCESS,
  articles,
});

export const clearArticles = () => ({
  type: type.CLEAR_ARTICLES,
});

export const getArticles = () => {
  // We are expecting a date as a param
  return (dispatch) => {
    // We want to remove all articles and fetch new ones
    dispatch(clearArticles());

    // We are dispatching the function loadingError as false to indicate that there is no error
    dispatch(loadingError(false));

    // We are dispatching the function loadingInProgress just to know that we are awaiting a response
    dispatch(loadingInProgress(true));

    const news = `https://api.canillitapp.com/latest/2020-04-29`;

    fetch(news)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        // Here we are expecting a result, so it's not loading anymroe
        dispatch(loadingInProgress(false));

        console.log('Something')

        return response;
      })
      .then((response) => response.json())
      .then((articles) => dispatch(loadingSuccess(articles)))
      .catch(() => dispatch(loadingError(true)));
  };
};