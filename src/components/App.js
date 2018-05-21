import React, { Component } from 'react';
import '../style/App.css';
import TaskForm from './TaskForm';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header>To Do Application</header>
          <TaskForm/>
      </div>
    );
  }
}

export default App;
