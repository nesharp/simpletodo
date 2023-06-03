import React from 'react';
import styles from './App.module.css';
import Task from './components/Task/Task.module';
import Tasks from './components/Tasks/Tasks';
import data from './data/data';

function App() {
  return (
    <div className={styles.app}>
      <Tasks {...data} />
      {/* formasdlfkja;ldskfj */}
    </div>
  );
  
}



export default App;
