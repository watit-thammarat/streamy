import React, { Component, Fragment } from 'react';
import { Router, Route } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <Fragment>
            <Header />
            <Route exact path="/" component={StreamList} />
            <Route exact path="/streams/new" component={StreamCreate} />
            <Route exact path="/streams/edit/:id" component={StreamEdit} />
            <Route exact path="/streams/delete/:id" component={StreamDelete} />
            <Route exact path="/streams/show/:id" component={StreamShow} />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
