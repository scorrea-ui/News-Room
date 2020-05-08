import { connect } from "react-redux";
import { getArticles, clearArticles } from "../actions";
import News from "../components/News";

const mapStateToProps = (state) => ({
  articles: state.articles,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getArticles: () => dispatch(getArticles()),
    clearArticles: () => dispatch(clearArticles()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
