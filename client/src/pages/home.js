import React from 'react';


const Home = () => {
  return (
    <>
      <main className="container home">
        <div className="left">
          <h4>CHOOSE ALBUMS TO START YOUR FAVOURITE COLLECTION:</h4>
        </div>
        <div className="albums"></div>
        <div className="right">
          <h4>GO TO COLLECTION</h4>
          <button type="submit" className="go">
            &gt;
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
