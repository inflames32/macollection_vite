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

import "./Styles/App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/albums" element={<AlbumsList />}>
            {/*      <Route path="/albums" element={<Album />}> */}
            <Route path=":id" element={<Album />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
