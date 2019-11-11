import React, { Component } from "react";
import styles from "./Article.module.scss";
import { firestore } from "../../firebase";

class Article extends Component {
  state = { isFiltered: false, updating: false };
  deletePost = () => {
    firestore
      .collection("articles")
      .doc(this.props.articleData.docId)
      .delete()
      .then(function() {
        console.log("Document successfully deleted!");
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
  };

  updatePost = () => {
    this.setState({ updating: true });
    firestore
      .collection("articles")
      .doc(this.props.articleData.docId)
      .set({ filter: this.props.updatedValue })
      .then(function() {
        console.log("Document successfully updated!");
      })
      .catch(function(error) {
        console.error("Error updating document: ", error);
      });
  };

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
        <button onClick={this.deletePost}>delete </button>
        <button onClick={this.updatePost}>update</button>
      </section>
    );
  }
}

export default Article;
