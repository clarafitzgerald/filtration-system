import React, { Component } from "react";
import styles from "./Article.module.scss";
import PropTypes from "prop-types";

class Article extends Component {
  state = { isFiltered: false };

  // handleClick = () => {
  //   this.setState({
  //     isFiltered: !this.state.isFiltered
  //   });

  render() {
    return (
      <section className={styles.articleBody}>
        <article className={styles.text}>
          {" "}
          {this.props.articleData.text}{" "}
        </article>
        <section className={styles.flex}>
          <p className={styles.author}> {this.props.articleData.author} </p>
          <p className={styles.date}> {this.props.articleData.date} </p>
        </section>
      </section>
    );
  }
}
Article.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired
};

Article.defaultProps = {
  author: "Unknown",
  text: "blah",
  date: "01/01/1970",
  filter: "everything is polish"
};

export default Article;
