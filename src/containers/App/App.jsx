import React from "react";
import styles from "./App.module.scss";
import Article from "../../components/Article/Article";
import Filter from "../../components/Filter/Filter";
import { firestore } from "../../firebase";
import Form from "../../components/Form";

class App extends React.Component {
  state = {
    articles: [],
    filter: []
  };

  updateState = filterVal => {
    this.setState({
      filter: this.state.filter.includes(filterVal)
        ? this.state.filter.filter(item => item !== filterVal)
        : this.state.filter.concat(filterVal)
    });
  };

  getPosts() {
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

  setInputText = event => {
    const inputText = event.target.value;
    this.setState({ inputText });
  };

  setSubmissionText = () => {
    this.state.inputText != null
      ? firestore
          .collection("articles")
          .doc()
          .set({
            filter: this.state.inputText
          })
          .then(function() {
            console.log("Document successfully written!");
          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
          })
      : console.log("insufficient data entered");
  };

  updateText = event => {
    this.setState({ updateText: event.target.value });
    console.log(this.state.updateText);
  };

  setUpdatedText = () => {
    this.setState({ updatedText: this.state.updateText });
  };

  render() {
    let newArray = this.state.articles.filter(language => {
      return this.state.filter.includes(language.filter);
    });
    let array = this.state.articles;
    let filters = [];
    array.forEach(item => {
      filters = filters.includes(item.filter)
        ? filters
        : filters.concat(item.filter);
    });
    let selectAll = () => {
      this.setState({
        filter: filters
      });
    };

    return (
      <>
        <main>
          <button className={styles.selectAll} onClick={selectAll}>
            BIG BOI
          </button>
          <section className={styles.filterButtons}>
            {filters.map((item, index) => (
              <Filter
                filterAction={this.updateState}
                filter={item}
                key={index}
              />
            ))}

            {/* <button onClick={this.updateState({ filters })}></button> */}
          </section>
          <Form
            updateText={this.updateText}
            setInputText={this.setInputText}
            setSubmissionText={this.setSubmissionText}
            setUpdatedText={this.setUpdatedText}
            getPosts={this.getPosts}
          />
          {newArray.map((language, index) => (
            <Article
              updatedValue={this.state.updatedText}
              articleData={language}
              key={index}
              updateText={this.state.updateText}
              getPosts={this.getPosts}
            />
          ))}
        </main>
      </>
    );
  }
}

export default App;
