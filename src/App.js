import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import NavBar from "./components/NavBar";
import PostDetails from "./components/PostDetails";
import NavBarpic from "./components/NavBarpic";
import Navfooter from "./components/Navfooter";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <NavBar />
          <NavBarpic />

          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/add" element={<CreatePost />}></Route>
            <Route
              path="/edit/:id"
              element={<EditPost example="foo" />}
            ></Route>
            <Route path="/post/:id" element={<PostDetails />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
