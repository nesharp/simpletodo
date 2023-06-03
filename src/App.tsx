import React from 'react';
import styles from './App.module.css';
import Task from './components/Task/Task.module';
import Tasks from './components/Tasks/Tasks';
import data from './data/data';
import Input from './components/Input/Input.module';

function App() {
  return (
    <div className={styles.app}>
      <Input />
      <Tasks />
    </div>
  );
  
}



export default App;
