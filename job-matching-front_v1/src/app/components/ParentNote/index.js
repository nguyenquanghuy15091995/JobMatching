import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardHeader, CardTitle, CardText, TextField, Divider, RaisedButton } from 'material-ui';

import NonTimeChildNote from '../NonTimeChildNote';
import TimeChildNote from '../TimeChildNote';

import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

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
  cardActionStyle: {
    width: '100%',
    textAlign: 'right',
  },
  editButtonStyle: {
    backgroundColor: '#00897B',
  },
  editButtonLabel: {
    fontWeight: 'bold',
  },
  deleteButtonStyle: {
    backgroundColor: '#F44336',
  },
  deleteButtonLabel: {
    fontWeight: 'bold',
  },
};

class ParentNote extends React.Component {

  constructor(props) {
    super(props);
  }

  reHandleDeleteParentNote = () => {
    this.props.handleDeleteParentNote(this.props.ordinal);
    this.props.handleChangeMessage(this.props.parentNote.title.toUpperCase() + ' was deleted!');
    this.props.handleHideShowSnackbar();
    console.log('ahihi')
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

          <CardActions style={styles.cardActionStyle}>
            <RaisedButton
              id={"edit_" + this.props.ordinal}
              label="Edit"
              labelColor="#FFFFFF"
              labelStyle={styles.editButtonLabel}
              icon={<EditIcon color="#FFFFFF" />}
              buttonStyle={styles.editButtonStyle}
            />
            <RaisedButton
              id={"delete_" + this.props.ordinal}
              label="Delete"
              labelColor="#FFFFFF"
              labelStyle={styles.deleteButtonLabel}
              icon={<DeleteIcon color="#FFFFFF" />}
              buttonStyle={styles.deleteButtonStyle}
              onClick={this.reHandleDeleteParentNote}
            />
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