import React from "react";
import CreatePlaylist from "../Components/CreatePlaylist";
import TrendingSongs from "../Components/TrendingSongs";
import PhoneNav from "../Components/PhoneNav";
import { Helmet } from "react-helmet-async";

// HOME PAGE MARKUP
const HomePage = () => {
  return (
    <>
      {/* REACT HELMET IS USED FOR SEO TRACKING */}
      <Helmet>
        <title>Home - Edustipend Playlist</title>
        <meta
          name="description"
          content="Welcome to Edustipend playlist homepage, your best music play platform"
        />
        <link rel="canonical" href="/" />
      </Helmet>

      {/* MARKUP */}
      <div className="create-trending-flex">
        <div style={{ flex: "2" }}>
          <CreatePlaylist />
        </div>
        <aside style={{ flex: "1" }} className="trending">
          <TrendingSongs />
        </aside>
        <footer>
          <PhoneNav />
        </footer>
      </div>
    </>
  );
};

export default HomePage;
