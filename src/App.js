import React from 'react';
import styles from './App.scss';

const App = ({ children }) => {
  return (
    <div className="app">
      {children}
      <style jsx>{styles}</style>
    </div>
  );
}

export default App;