import React, { FC } from 'react';
import { Button } from 'antd';
import './App.css';

const App: FC = () => (
  <div className="App">
    <div style={{margin: '100px'}}>my antd</div>
    <Button type="primary">Button</Button>
  </div>
);

export default App;
