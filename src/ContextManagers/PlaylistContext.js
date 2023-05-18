import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const PlaylistStore = () => {
  const [trendingList] = useState([
    { title: "Unavailable", artiste: "Davido", id: 1, added: false },
    { title: "Put am", artiste: "Joedy B", id: 2, added: false },
    { title: "Believe", artiste: "Zeeg", id: 3, added: false },
    { title: "For the road", artiste: "Davido", id: 4, added: false },
    { title: "Shuperu", artiste: "Kizz Daniel", id: 5, added: false },
  ]);
  const [createdPlaylist, setCreatedPlaylist] = useState([]); //STATE TO HOLD USER'S WISH LIST ADDED FROM SUGGESTED WISH

  //SUGGESTS
  // LOGIC TO ADD CLICKED BY THE USER AT SUGGESTED PAGE TO THE USER'S WISH LIST
  const addSong = async (song) => {
    let findSong = await createdPlaylist.find((i) => {
      return i.id === song.id;
    });

    if (findSong) {
      let newSong = [];
      let newItem;

      createdPlaylist.forEach((eachSong) => {
        if (eachSong.id === song.id) {
          newItem = {
            ...eachSong,
          };
          newSong.push(newItem);
        } else {
          newSong.push(eachSong);
        }
      });

      setCreatedPlaylist(newSong);
    } else {
      let addingsong = {
        ...song,
      };
      setCreatedPlaylist([...createdPlaylist, addingsong]);
    }
  };

  // LOGIC TO REMOVE A CLICKED WISH FROM SUGGESTED WISH LIST FROM THE USER'S WISH LIST
  const removeSong = async (song) => {
    const newPlaylist = createdPlaylist.filter(
      (eachSong) => eachSong.id !== song.id
    );
    setCreatedPlaylist(newPlaylist);
  };

  const clearPlaylist = async () => {
    setCreatedPlaylist([]);
    toast.warn("Playlist Cleared")
  };

  return {
    removeSong,
    addSong,
    trendingList,
    createdPlaylist,
    clearPlaylist,
  };
};

const PlaylistContext = createContext([]);

export function usePlaylistContext() {
  return useContext(PlaylistContext);
}

export const UsePlaylist = ({ children }) => {
  return (
    <PlaylistContext.Provider value={PlaylistStore()}>
      {children}
    </PlaylistContext.Provider>
  );
};
