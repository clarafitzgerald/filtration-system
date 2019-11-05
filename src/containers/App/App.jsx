import React from "react";
// import styles from "./App.module.scss";
import Article from "../../components/Article/Article";
import Filter from "../../components/Filter/Filter";
import { firestore } from "../../firebase";

class App extends React.Component {
  state = {
    articles: [],
    filter: ""
  };

  updateState = filterVal => {
    this.setState({
      filter: filterVal
    });
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
    let newArray = this.state.articles.filter(language => {
      return language.filter === this.state.filter;
    });
    return (
      <>
        <main>
          <Filter filterAction={this.updateState} />
          {newArray.map((language, index) => (
            <Article articleData={language} key={index} />
          ))}
        </main>
      </>
    );
  }
}

export default App;
