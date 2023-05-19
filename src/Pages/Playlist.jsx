import React, { useEffect } from "react";
import { usePlaylistContext } from "../ContextManagers/PlaylistContext";
import { useRegisterContext } from "../ContextManagers/SignupContext";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// PLAYLIST PAGE MARKUP
const Playlist = () => {
  // Playlist's songs, logic to remove a song and clear all songs imported from Playlist context provider
  const { createdPlaylist, clearPlaylist, removeSong } = usePlaylistContext();

  //Auth state imported from Signup context provider
  const { auth } = useRegisterContext();

  //Variable to programmatically navigate pages
  const navigate = useNavigate();

  //Logic to navigate unauthenticated users to the signup page
  useEffect(() => {
    if (!auth) {
      navigate("/signup");
    }
  }, []);

  return (
    <>
      {/* REACT HELMET IS USED FOR SEO TRACKING */}
      <Helmet>
        <title>Playlist - Edustipend Playlist</title>
        <meta name="description" content="Your Edustipend playlist page" />
        <link rel="canonical" href="/playlist" />
      </Helmet>

      {/* MARKUP */}
      <div className="playlist-div">
        <h3>My Playlist</h3>

        {createdPlaylist.length > 0 ? (
          createdPlaylist.map((song) => (
            <div key={song.id}>
              <p className="playlist-song">
                <span style={{ float: "left" }}> ▶ </span>
                {song.title} - <em>{song.artiste}</em>{" "}
                <span
                  className="add-remove-nub"
                  onClick={() => {
                    removeSong(song);
                  }}
                  style={{ float: "right" }}
                >
                  Χ
                </span>
              </p>
            </div>
          ))
        ) : (
          <p>Please add song to playlist</p>
        )}
        <button className="clearPL-btn" onClick={clearPlaylist}>
          Clear List
        </button>
      </div>
    </>
  );
};

export default Playlist;
