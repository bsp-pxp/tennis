import React from 'react';
import Default from '../layouts/Default';

const Index = () => {
  return (
    <Default>
      <section>
        <h2>Welcome to the Tennis App</h2>
        {/* Add your homepage content here */}
        <div className="nav-links">
          <a href="/login/">login</a>
        </div>
        <div>
          <a href="/point/">point</a>
        </div>
        <div>
          <a href="/game/">game</a>
        </div>
        <div>
          <a href="/match/">match</a>
        </div>
        <div>
          <a href="/set/">set</a>
        </div>
      </section>
    </Default>
  );
};

export default Index;
