import React, { Component, Fragment } from 'react';
import TVHeaderCard from './tv_header_card'

class Home extends React.Component {
  render() {
    return (
      <div className="card-deck mb-3 text-center">
        <TVHeaderCard />
      </div>
    );
  }
}

export default Home;

