import React from "react";
import { BrowserRouter,Switch,Route } from "react-router-dom";

import Main from "./pages/Main";
import Board from "./pages/Board";
import Alarm from "./pages/Alarm";
import MessagesDetail from "./pages/Alarm/components/MessagesDetail";

const App = () => {
  return (
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/board" component={Board} />
    <Route exact path="/alarm" component={Alarm} />
    <Route exact path="/alarm/:id" component={MessagesDetail} />
  </Switch>
  </BrowserRouter>  
  );
};

export default App;
