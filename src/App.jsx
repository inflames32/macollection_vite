import { useState } from "react";
import {
  BrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import AlbumsList from "./Components/AlbumsList";
import Album from "./Components/Album";
import ModalAddNewAlbum from "./Components/ModalAddNewAlbum";
import Error from "./Components/Error";
import User from "./Components/User";
import ModalSignup from "./Components/ModalSignup";

import "./Styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="albums" element={<AlbumsList />}>
            <Route path=":id" element={<Album />} />
            <Route path="add-new-album" element={<ModalAddNewAlbum />} />
          </Route>

          <Route path="user" element={<User />}>
            <Route path="signup" element={<ModalSignup />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
