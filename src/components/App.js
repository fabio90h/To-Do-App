import React, { Component } from 'react';
import '../style/App.css';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>TO DO LIST</h1>
          <TaskForm />
          <TaskList className='taskList'/>
      </div>
    );
  }
}

export default App;
