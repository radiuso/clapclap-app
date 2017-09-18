import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'semantic-ui-react';

const SubjectItem = ({ subject, ...rest }) => (
  <Card
    key={subject.id}
    color={subject.color}
    {...rest}
  >
    <Card.Content>
      <Card.Header>{ subject.label }</Card.Header>
      <Card.Description>{ subject.description }</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button basic color="green">
        <Link to={`/subjects/${subject.id}`}>Go</Link>
      </Button>
    </Card.Content>
  </Card>
);

SubjectItem.propTypes = {
  subject: PropTypes.object.isRequired,
};

export default SubjectItem;
