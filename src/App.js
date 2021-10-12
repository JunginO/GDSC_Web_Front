import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Board from "./pages/Board";
import Alarm from "./pages/Alarm";
import MessagesDetail from "./pages/Alarm/components/MessagesDetail";
import Login from "./pages/Account/Login";
import Signup from "./pages/Account/Signup";
import Mypage from "./pages/Mypage";
import MypageAuthDetail from "./pages/Mypage/components/schoolAuthDetail";
import MypageEdit from "./pages/Mypage/components/nickChange";
import MypageAuth from "./pages/Mypage/components/schoolAuth";
import Setting from "./pages/Setting";
import BoardDetail from "./pages/BoardDetail";
import Search from "./pages/Search";
import Post from "./pages/Post";
import Contents from "./pages/BoardDetail/components/BoardContent";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/board" component={Board} />
        <Route exact path="/alarm" component={Alarm} />
        <Route exact path="/alarm/:id" component={MessagesDetail} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/mypage" component={Mypage} />
        <Route exact path="/setting" component={Setting} />
        <Route exact path="/mypage/auth" component={MypageAuth} />
        <Route exact path="/mypage/edit" component={MypageEdit} />
        <Route exact path="/mypage/auth/detail" component={MypageAuthDetail} />
        <Route exact path="/board/list" component={BoardDetail} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/board/post" component={Post} />
        <Route exact path="/board/detail" component={Contents} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
