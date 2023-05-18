import React from "react";
import { usePlaylistContext } from "../ContextManagers/PlaylistContext";

const TrendingSongs = () => {
  const { trendingList, addSong, removeSong } = usePlaylistContext();

  return (
    <>
    <div className="trending-div">
      <h3>Trending songs</h3>
      {trendingList.map((song) => (
        <div key={song.id}>
          <p className="trending-add">
            {song.title} by <em>{song.artiste}</em>{" "}
            <span
              className="add-remove-nub"
              onClick={() => {
                song.added = !song.added;
                song.added ? addSong(song) : removeSong(song);
              }}
            >
              {song.added ? "✔" : "+"}
            </span>
          </p>
        </div>
      ))}
      <button className="viewmore-btn">View more</button>
    </div>

    </>
  );
};

export default TrendingSongs;
