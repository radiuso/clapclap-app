import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card, Container } from 'semantic-ui-react';

import { fetchAll } from '../../../entities/subjects/subjects.actions';
import SubjectItem from '../../../components/SubjectItem';

class SubjectList extends Component {
  componentWillMount() {
    fetchAll();
  }

  render() {
    const list = this.props.subjects.map(subject => (
      <SubjectItem
        key={subject.id}
        subject={subject}
      />
    ));

    return (
      <Container>
        <Card.Group>
          { list }
        </Card.Group>
      </Container>
    );
  }
}

SubjectList.propTypes = {
  subjects: PropTypes.array.isRequired,
};

const mapStateToProps = store => ({
  subjects: store.subjectsState,
});

export default connect(mapStateToProps)(SubjectList);
