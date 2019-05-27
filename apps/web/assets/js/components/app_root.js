import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import TVRoot from './tv_root'
import MoviesRoot from './movies_root'
import Home from './home'
import NotFoundPage from './not_found_page'

class AppRoot extends React.Component {
  render() {
    const cache = new InMemoryCache();
    const link = new HttpLink({
      uri: '/graphiql'
    })
    const client = new ApolloClient({
      cache,
      link
    })

    return (
      <Router>
        <ApolloProvider client={client}>
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <h5 className="my-0 mr-md-auto font-weight-normal">
              <Link to="/">MediaExplorer</Link>
            </h5>
            <nav className="my-2 my-md-0 mr-md-3">
              <Link className="p-2 text-dark" to="/tv">TV</Link>
              <Link className="p-2 text-dark" to="/movies">Movies</Link>
              <Link className="p-2 text-dark" to="/music">Music</Link>
            </nav>
            <a className="btn btn-outline-primary" href="#">Sign up</a>
          </div>

          <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/tv/" component={TVRoot} />
              <Route path="/movies/" component={MoviesRoot} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </ApolloProvider>
      </Router>
    );
  }
}

export default AppRoot;


