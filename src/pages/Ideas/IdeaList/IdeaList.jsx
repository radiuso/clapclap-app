import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card, Container } from 'semantic-ui-react';

import { setTitle } from '../../../entities/app/app.actions';
import { fetchAll } from '../../../entities/ideas/ideas.actions';
import IdeaItem from '../../../components/IdeaItem';

class IdeaList extends Component {
  componentWillMount() {
    setTitle('Ideas');
    fetchAll();
  }

  render() {
    const list = this.props.ideas.map(idea => (
      <IdeaItem
        key={idea.id}
        idea={idea}
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

IdeaList.propTypes = {
  ideas: PropTypes.array.isRequired,
};

const mapStateToProps = store => ({
  ideas: store.ideasState,
});

export default connect(mapStateToProps)(IdeaList);
