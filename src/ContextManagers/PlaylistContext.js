import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

// PLAYLIST AND TRENDING SONGS STATE MANAGEMENT

const PlaylistStore = () => {
  //State to hold list of trending songs
  const [trendingList] = useState([
    { title: "Unavailable", artiste: "Davido", id: 1, added: false },
    { title: "Put am", artiste: "Joedy B", id: 2, added: false },
    { title: "Believe", artiste: "Zeeg", id: 3, added: false },
    { title: "For the road", artiste: "Davido", id: 4, added: false },
    { title: "Shuperu", artiste: "Kizz Daniel", id: 5, added: false },
  ]);

  //State to hold the list of songs in the user's playlist
  const [createdPlaylist, setCreatedPlaylist] = useState([]);

  // Logic to add a song to the user's playlist
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

  // Logic to remove a song from the user's playlist
  const removeSong = async (song) => {
    const newPlaylist = createdPlaylist.filter(
      (eachSong) => eachSong.id !== song.id
    );
    setCreatedPlaylist(newPlaylist);
  };

  //Logic to remove all the songs in the user's playlist
  const clearPlaylist = async () => {
    setCreatedPlaylist([]);
    toast.warn("Playlist Cleared");
  };


  //States and logics to be exported and get used around the app
  return {
    removeSong,
    addSong,
    trendingList,
    createdPlaylist,
    clearPlaylist,
  };
};


//REACT USECONTEXT STATE MANAGER TO HELP USE OUR LOGICS AND STATES AROUND OUR CODE BASE
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
