import React from 'react';
import AlbumContainer from '../components/albumContainer.js';

const Home = () => {
  return (
    <>
      <main className="container home">
        <div className="left">
          <h4>CHOOSE ALBUMS TO START YOUR FAVOURITE COLLECTION:</h4>
        </div>
        < AlbumContainer />     
        <div className="right">
          <h4>GO TO COLLECTION</h4>
          <a href="/collection" className="go">
            &gt;
          </a>
        </div>
      </main>
    </>
  );
};
export default Home;

