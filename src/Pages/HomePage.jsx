import React from "react";
import CreatePlaylist from "../Components/CreatePlaylist";
import TrendingSongs from "../Components/TrendingSongs";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet-async";

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
      <div className="create-trending-flex">
        <div style={{ flex: "2" }}>
          <CreatePlaylist />
        </div>
        <aside style={{ flex: "1" }} className="trending">
          <TrendingSongs />
        </aside>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default HomePage;
