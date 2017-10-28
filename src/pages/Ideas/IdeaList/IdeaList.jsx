import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Container } from 'semantic-ui-react';

import { setTitle } from '../../../entities/app/app.actions';
import { fetchAll } from '../../../entities/ideas/ideas.actions';
import IdeaCardItem from '../../../components/IdeaCardItem';

class IdeaList extends Component {
  constructor() {
    super();
    setTitle('Ideas');
    fetchAll();
  }

  render() {
    const list = this.props.ideas.map(idea => (
      <IdeaCardItem
        key={idea.id}
        idea={idea}
      />
    ));

    return (
      <Container>
        <Card.Group itemsPerRow="3">
          { list }
        </Card.Group>
      </Container>
    );
  }
}

IdeaList.propTypes = {
  ideas: PropTypes.array.isRequired,
};

const mapStateToProps = store => ({
  ideas: store.ideasState,
});

export default connect(mapStateToProps)(IdeaList);
