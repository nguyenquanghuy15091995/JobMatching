import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardHeader, CardTitle, CardText, FloatingActionButton, TextField, Divider } from 'material-ui';

import NonTimeChildNote from '../NonTimeChildNote';
import TimeChildNote from '../TimeChildNote';

const styles = {
  headTitle: {
    fontWeight: 'bold',
    fontSize: 25
  },
  devider: {
    padding: 2,
    borderColor: '#00796B',
    backgroundColor: '#00796B',
  },
};

class ParentNote extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let childNoteTemp;
    if (this.props.parentNote.parentType === 'time') {
      childNoteTemp = <div>
        <TimeChildNote childNotes={this.props.parentNote.childNotes} />
      </div>

    }
    else {
      childNoteTemp = <div>
        <NonTimeChildNote childNotes={this.props.parentNote.childNotes} />
      </div>
    }

    return (
      <div>
        <Card>

          <CardTitle
            title={this.props.parentNote.title.toUpperCase()}
            titleStyle={styles.headTitle}
          />
          <Divider style={styles.devider} />

          <CardText>
            {childNoteTemp}
          </CardText>

          <CardActions>

          </CardActions>
        </Card>
      </div>
    );
  }
}

ParentNote.propTypes = {
  parentNote: PropTypes.object,
  ordinal: PropTypes.number
}

export default ParentNote;