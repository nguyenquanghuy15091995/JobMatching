import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  Card, CardText, CardTitle, CardActions,
  RaisedButton, IconButton, FlatButton, FloatingActionButton,
  Table, TableBody, TableRow, TableRowColumn,
  Checkbox,
} from 'material-ui';

import RemoveIcon from 'material-ui/svg-icons/content/remove-circle';

const styles = {
  textUnderline: {
    borderColor: '#4DB6AC',
  },
  textFloatLabel: {
    color: '#00897B',
  },
  textInputTitle: {
    fontWeight: 'bold',
  },
  textFloatLabelFocus: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  columnChildTitle: {
    width: '20%',
  },
  columnChildAction: {
    width: 80,
  },
};

class ChildNoteAddForm extends React.Component {
  constructor(props) {
    super(props);
  }

  reHandleRemove = () => {
    this.props.handleRemove(this.props.ordinal);
  }

  reHandleInputChangeContent = (event) => {
    this.props.handleInputChangeContent(event, this.props.ordinal);
  }

  reHandleInputChangeTitle = (event) => {
    this.props.handleInputChangeTitle(event, this.props.ordinal);
  }

  render() {
    return (
      <div>
        <Table selectable={false}>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn style={styles.columnChildTitle}>
                <TextField
                  hintText="Title"
                  inputStyle={styles.textInputTitle}
                  fullWidth={true}
                  underlineFocusStyle={styles.textUnderline}
                  value={this.props.childNote.title}
                  onChange={this.reHandleInputChangeTitle}
                />
              </TableRowColumn>
              <TableRowColumn>
                <TextField
                  hintText="Content"
                  multiLine
                  fullWidth={true}
                  underlineFocusStyle={styles.textUnderline}
                  value={this.props.childNote.value}
                  onChange={this.reHandleInputChangeContent}
                />
              </TableRowColumn>
              <TableRowColumn style={styles.columnChildAction}>
                <IconButton onClick={this.reHandleRemove}>
                  <RemoveIcon color="#D50000" />
                </IconButton>
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default ChildNoteAddForm;