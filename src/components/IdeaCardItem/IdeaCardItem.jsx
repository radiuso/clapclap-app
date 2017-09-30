import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button, Icon } from 'semantic-ui-react';

const IdeaCardItem = ({ idea, ...rest }) => (
  <Card
    key={idea.id}
    color={idea.color}
    {...rest}
  >
    <Card.Content>
      <Icon name="question" className="card--icon" circular size="large" />
      <Card.Header>{ idea.title }</Card.Header>
      <Card.Meta>
        { idea.creation_date } by Radiuso
      </Card.Meta>
      <Card.Description>{ idea.description }</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <span>
        <Icon name="comments outline" />
        4 Proposals
      </span>
      <Button className="float-right gradient-blue" primary as={Link} to={`/ideas/${idea.id}`}>
        See proposals
      </Button>
    </Card.Content>
  </Card>
);

IdeaCardItem.propTypes = {
  idea: PropTypes.object.isRequired,
};

export default IdeaCardItem;
