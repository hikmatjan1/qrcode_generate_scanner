import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Qrcode from './page/Qrcode';
import Generator from './component/generator/Generator';
import Scanner from './component/scanner/Scanner';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Qrcode />
        </Route>
        <Route path="/generator">
          <Generator />
        </Route>
        <Route path="/Scanner">
          <Scanner />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
