import React, { Component } from 'react';
import '../style/App.css';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header>To Do Application</header>
          <TaskForm/>
          <TaskList/>
      </div>
    );
  }
}

export default App;
