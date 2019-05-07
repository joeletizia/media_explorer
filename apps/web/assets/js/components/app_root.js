import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TVHeaderCard from './tv_header_card'
import TVRoot from './tv_root'
import MoviesRoot from './movies_root'

class AppRoot extends React.Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <h5 className="my-0 mr-md-auto font-weight-normal">MediaExplorer</h5>
            <nav className="my-2 my-md-0 mr-md-3">
              <Link className="p-2 text-dark" to="/tv">TV</Link>
              <Link className="p-2 text-dark" to="/movies">Movies</Link>
              <Link className="p-2 text-dark" to="/music">Music</Link>
            </nav>
            <a className="btn btn-outline-primary" href="#">Sign up</a>
          </div>

          <div className="container">
            <div className="card-deck mb-3 text-center">
              <TVHeaderCard />
            </div>
          </div>
        </Fragment>

        <Route path="/tv/" component={TVRoot} />
        <Route path="/movies/" component={MoviesRoot} />
      </Router>
    );
  }
}

export default AppRoot;
