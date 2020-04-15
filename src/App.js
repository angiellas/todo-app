import React from "react";
import Todos from "./Todos";
import AddForm from "./AddForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, content: "buy some milk" },
        { id: 2, content: "do laundry" },
      ],
    };
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  };

  addTask = (todo) => {
    todo.id = Math.floor(Math.random());
    let todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">To do List</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddForm addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
