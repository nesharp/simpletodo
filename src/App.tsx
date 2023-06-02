import React from 'react';
import styles from './App.module.css';
import Task from './components/Tasks/Tasks.module';
function App() {
  return (
    <div className={styles.app}>
      <Task _id="sdf" text='asdf' isCompleted={false} />
      <Task _id="sdf" text='asdf' isCompleted={false} />
      <Task _id="sdf" text='asdf' isCompleted={false} />
      <Task _id="sdf" text='asdf' isCompleted={false} />
      <Task _id="sdf" text='asdf' isCompleted={false} />
      <Task _id="sdf" text='asdf' isCompleted={false} />
      <Task _id="sdf" text='asdf' isCompleted={false} />
      <Task _id="sdf" text='asdf' isCompleted={false} />
      <Task _id="sdf" text='asdf' isCompleted={false} />

    </div>
  );
}

export default App;
