import React, { Component, Fragment } from 'react';

class TVHeaderCard extends React.Component {
  render() {
    return (
      <div className="card mb-4 box-shadow">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">TV</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title"><small className="text-muted">Titles include...</small></h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>Big Bang Theory</li>
            <li>Gotham</li>
            <li>Dead to Me</li>
          </ul>
          <button type="button" className="btn btn-lg btn-block btn-outline-primary">Explore</button>
        </div>
      </div>
    );
  }
}

export default TVHeaderCard;
