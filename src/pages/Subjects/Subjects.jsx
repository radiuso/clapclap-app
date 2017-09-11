import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'semantic-ui-react';

import { fetchAll } from '../../entities/subjects/subjects.actions';

class Subjects extends Component {
  componentWillMount() {
    fetchAll();
  }

  render() {
    const list = this.props.subjects.map(subject => (
      <Card
        key={subject.id}
        color={subject.color}
      >
        <Card.Content>
          <Card.Header>{ subject.label }</Card.Header>
          <Card.Description>{ subject.description }</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button basic color="green">Go</Button>
        </Card.Content>
      </Card>
    ));
    return (
      <Card.Group>
        { list }
      </Card.Group>
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
