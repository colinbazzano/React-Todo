import React from 'react';

// local imports below
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import "./components/TodoComponents/Todo.css";

// rendering initial data as a guideline for the todo app
const data = [
  {
    name: 'Brush Teeth',
    id: 123,
    completed: false
  },
  {
    name: 'Take out Trash',
    id: 124,
    completed: false
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: data
    };
  }

  // adding a todo
  addTodo = name => {
    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  // toggle completed todos
  toggleCompleted = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  handleClear = () => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.completed === false)
    });
  };
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <button className="clear-btn" onClick={this.handleClear}>Clear Completed</button>
        <h3>Your Todos:</h3>
        <TodoList 
        toggleCompleted={this.toggleCompleted} 
        handleClear={this.handleClear}
        todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
