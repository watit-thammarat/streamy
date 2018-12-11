import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { fetchStreams } from '../../actions';

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin = ({ userId, id }) => {
    if (this.props.currentUserId === userId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${id}`} className="ui button primary">
            Edit
          </Link>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  };

  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
          ;
        </div>
      );
    }
  };

  renderList = () => {
    return this.props.streams.map(s => (
      <div className="item" key={s.id}>
        {this.renderAdmin(s)}
        <i className="large middle aligned icon camera" />
        <div className="content">
          {s.title}
          <div className="description">{s.description}</div>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = ({ streams, auth }) => ({
  streams: _.toArray(streams),
  currentUserId: auth.userId,
  isSignedIn: auth.isSignedIn
});

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
