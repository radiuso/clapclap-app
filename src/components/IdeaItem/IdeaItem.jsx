import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'semantic-ui-react';

const IdeaItem = ({ idea, ...rest }) => (
  <Card
    key={idea.id}
    color={idea.color}
    {...rest}
  >
    <Card.Content>
      <Card.Header>{ idea.label }</Card.Header>
      <Card.Description>{ idea.description }</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button basic color="green">
        <Link to={`/ideas/${idea.id}`}>Go</Link>
      </Button>
    </Card.Content>
  </Card>
);

IdeaItem.propTypes = {
  idea: PropTypes.object.isRequired,
};

export default IdeaItem;
