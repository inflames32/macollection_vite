import { useState, useEffect } from "react";

import {
  BrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import AOS from "aos";

import Header from "./Components/Header";
import Home from "./Components/Home";
import AlbumsList from "./Components/AlbumsList";
import Album from "./Components/Album";
import ModalAddNewAlbum from "./Components/ModalAddNewAlbum";
import Error from "./Components/Error";
import User from "./Components/User";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";

import "./Styles/normalize.css";
import "aos/dist/aos.css";
import "./Styles/App.scss";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="albums" element={<AlbumsList />} />
          <Route path="/album/add-new-album" element={<ModalAddNewAlbum />} />
          <Route path="album/:id" element={<Album />} />
          <Route path="user" element={<User />} />{" "}
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
