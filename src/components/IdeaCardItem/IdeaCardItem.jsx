import React from 'react';
import PropTypes from 'prop-types';
import { FormattedDate } from 'react-intl';
import { Link } from 'react-router-dom';
import { Card, Button, Icon, Label } from 'semantic-ui-react';

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
        <FormattedDate value={idea.creation_date} /> by Radiuso
      </Card.Meta>
      <Card.Description>{ idea.description }</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Label>
        <Icon name="comments outline" /> 4
      </Label>
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
