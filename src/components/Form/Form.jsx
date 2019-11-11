import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <>
        <form>
          <p>filter:</p>
          <input
            onChange={this.props.setInputText}
            value={this.props.inputText}
            type="text"
          />
          <button onClick={this.props.setSubmissionText}>submit</button>
        </form>

        <form>
          <p>update text:</p>
          <input onChange={this.props.updateText} type="text" />
        </form>
      </>
    );
  }
}

export default Form;
