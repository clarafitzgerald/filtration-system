import React from "react";
// import styles from "./App.module.scss";
import Article from "../../components/Article/Article";
import { firestore } from "../../firebase";

class App extends React.Component {
  state = {
    articles: []
  };
  componentDidMount() {
    firestore
      .collection("articles")
      .get()
      .then(querySnapshot => {
        const articles = querySnapshot.docs.map(doc => {
          return { ...doc.data(), docId: doc.id };
        });
        this.setState({
          articles: articles
        });
      });
  }
  render() {
    return (
      <>
        <Article />
        <main>
          {this.state.articles.map((language, index) => (
            <Article articleData={language} key={index} />
          ))}
        </main>
      </>
    );
  }
}

export default App;
