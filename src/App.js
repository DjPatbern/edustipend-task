import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./Components/NavBar";
import Contact from "./Pages/Contact";
import Playlist from "./Pages/Playlist";
import SignUp from "./Pages/SignUp";
import { UsePlaylist } from "./ContextManagers/PlaylistContext";
import {
  UseRegister,
} from "./ContextManagers/SignupContext";

import TrendingSongs from "./Components/TrendingSongs";

function App() {
  return (
    <div className="App">
      <UseRegister>
        <UsePlaylist>
          <main className="App-main">
            <ToastContainer
              position="top-center"
              limit={1}
              theme="dark"
              transition={Zoom}
              hideProgressBar={true}
            />
            <div className="homepage-container">
              <nav>
                <NavBar />
              </nav>

              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                  path="/playlist"
                  element={<Playlist /> }
                />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/trending" element={<TrendingSongs />} />
              </Routes>
            </div>
          </main>
        </UsePlaylist>
      </UseRegister>
    </div>
  );
}

export default App;
