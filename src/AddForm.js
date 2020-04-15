import React, { Component } from "react";

export default class AddToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }

  handlechange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state);
    this.setState({ content: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new task: </label>
          <input
            type="text"
            required
            onChange={this.handlechange}
            value={this.state.content}
          ></input>
        </form>
      </div>
    );
  }
}
