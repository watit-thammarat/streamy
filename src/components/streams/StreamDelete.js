import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from '../Modal';
import history from '../../history';
import { deleteStream, fetchStream } from '../../actions';

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.id);
  }

  renderActions = () => (
    <Fragment>
      <button onClick={this.deleteStream} className="ui negative button">
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </Fragment>
  );

  deleteStream = () => this.props.deleteStream(this.props.id);

  dismiss = () => history.push('/');

  renderContent = () =>
    this.props.stream
      ? `Are you sure you want to delete the stream with title ${
          this.props.stream.title
        }`
      : 'Are you sure you want to delete this stream?';

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        onDismiss={this.dismiss}
      >
        {this.renderActions()}
      </Modal>
    );
  }
}

const mapStateToProps = ({ streams }, { match }) => {
  const { id } = match.params;
  const stream = streams[id];
  return { id, stream };
};

export default connect(
  mapStateToProps,
  { deleteStream, fetchStream }
)(StreamDelete);
