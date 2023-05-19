import React from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterContext } from "../ContextManagers/SignupContext";


// CREATE PLAYLIST MARKUP

const CreatePlaylist = () => {

  //Variable to enable programmatical navigation in the app
  const navigate = useNavigate(); 

  // username and auth state imported from the SignUp context provider
  const { username, auth } = useRegisterContext(); 

  return (
    // MARKUP
    <div className="create-playlist-div">
      {username && (
        <p>
          Welcome <span>{username}</span>
        </p>
      )}
      <h1>Make your party fun!</h1>
      <p>Create your own custom playlist today.</p>
      <button className="create-btn">Create playlist</button>{" "}
      {auth && (
        <button className="playlist-btn" onClick={() => navigate("/playlist")}>
          My Playlist
        </button>
      )}
    </div>
  );
};

export default CreatePlaylist;
