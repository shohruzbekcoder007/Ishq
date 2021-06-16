import React from 'react';
import Main from './komponents/Main';
import Header from "./komponents/Header";
import Footer from './komponents/Footer';
import AdminCreatePost from './komponents/AdminCreatePost'
import OnePostMore from './komponents/OnePostMore'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './komponents/Login';

function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route path="/" exact>
            <Header/>
            <Main/>
            <Footer/>
          </Route>
          <Route path="/admin">
            <AdminCreatePost/>
          </Route>
          <Route path="/onePostMore">
            <OnePostMore/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
    </Router>
      
    </>
  );
}

export default App;
// https://ourcodeworld.com/articles/read/1065/top-15-best-rich-text-editor-components-wysiwyg-for-reactjs
// https://ckeditor.com/docs/ckeditor4/latest/guide/dev_react.html
