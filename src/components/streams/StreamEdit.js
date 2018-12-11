import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { editStream, fetchStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>StreamEdit</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ streams }, { match }) => {
  const { id } = match.params;
  return {
    stream: streams[id],
    id
  };
};

export default connect(
  mapStateToProps,
  { editStream, fetchStream }
)(StreamEdit);
