import React from 'react';
import styles from './App.module.css';
import Tasks from './components/Tasks/Tasks.module';
function App() {
  return (
    <div className={styles.app}>
      <Tasks/>
    </div>
  );
}

export default App;
