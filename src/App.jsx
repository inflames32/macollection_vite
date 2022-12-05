import { useState, useEffect } from "react";

import {
  BrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import AOS from "aos";

import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import AlbumsList from "./Components/AlbumsList.jsx";
import Album from "./Components/Album.jsx";
import ModalAddNewAlbum from "./Components/ModalAddNewAlbum.jsx";
import Error from "./Components/Error.jsx";
import User from "./Components/User.jsx";
import Signup from "./Components/Signup.jsx";
import Signin from "./Components/Signin.jsx";

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
