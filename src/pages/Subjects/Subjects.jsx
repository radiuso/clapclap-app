import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchAll } from '../../entities/subjects/subjects.actions';

class Subjects extends Component {
  componentWillMount() {
    fetchAll();
  }

  render() {
    const list = this.props.subjects.map(subject => (
      <li key={subject.id}>{ subject.label }</li>
    ));
    return (
      <ul>
        { list }
      </ul>
    );
  }
}

Subjects.propTypes = {
  subjects: PropTypes.array.isRequired,
};

const mapStateToProps = store => ({
  subjects: store.subjectsState,
});

export default connect(mapStateToProps)(Subjects);
