import React, { Component } from "react";
import styles from "./Article.module.scss";

class Article extends Component {
  state = { isFiltered: false };

  render() {
    var divStyle = {
      border: `${this.props.articleData.filter} 5px solid`
    };
    return (
      <section style={divStyle} className={`${styles.articleBody}`}>
        <article className={styles.text}>{this.props.articleData.text}</article>
        <section className={styles.flex}>
          <p className={styles.author}> {this.props.articleData.author} </p>
          <p className={styles.language}> {this.props.articleData.filter}</p>
          <p className={styles.date}> {this.props.articleData.date} </p>
        </section>
      </section>
    );
  }
}

export default Article;
