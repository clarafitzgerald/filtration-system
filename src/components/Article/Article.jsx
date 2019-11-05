import React, { Component } from "react";
// import styles from "./Article.module.scss";
import PropTypes from "prop-types";

class Article extends Component {
  render() {
    console.log(this.props.articleData);
    return (
      <>
        {/* <h2> {this.props.articleData.text} </h2>
        <p> {this.props.articleData.author}</p> */}
      </>
    );
  }
}
Article.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

Article.defaultProps = {
  author: "Unknown",
  text: "blah"
};

export default Article;
