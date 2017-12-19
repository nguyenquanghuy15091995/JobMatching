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
  timeTextField: {
    margin: 5,
  },
  timeFloatLabelFocus: {
    color: '#00897B',
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

  reHandleInputChangeStartDate = (event) => {
    this.props.handleInputChangeStartDate(event, this.props.ordinal);
  }

  reHandleInputChangeEndDate = (event) => {
    this.props.handleInputChangeEndDate(event, this.props.ordinal);
  }

  getErrorTextTitle = () => {
    let errorText = '';
    if (this.props.childNote.title === '') {
      errorText = 'Required!';
    }
    return errorText;
  }

  getErrorTextContent = () => {
    let errorText = '';
    if (this.props.childNote.value === '') {
      errorText = 'Required!';
    }
    return errorText;
  }

  getErrorTextDate = () => {
    let errorTexts = {
      startErrorText: '',
      endErrorText: '',
    };
    if (this.props.childNote.startDate === '') {
      errorTexts.startErrorText = 'Required!';
      errorTexts.endErrorText = '*';
    } else if (this.props.childNote.endDate === '') {
      errorTexts.startErrorText = '*';
      errorTexts.endErrorText = 'Required!';
    }
    if (this.props.childNote.startDate === ''
      && this.props.childNote.endDate === '') {
      errorTexts.startErrorText = 'Required!';
      errorTexts.endErrorText = 'Required!';
    }
    return errorTexts;
  }

  render() {

    let timeFields = <div />;
    if (this.props.isTimeNote) {
      timeFields = <div>
        <TextField
          id={"startTime_" + this.props.ordinal}
          floatingLabelText="From"
          floatingLabelFocusStyle={styles.timeFloatLabelFocus}
          style={styles.timeTextField}
          underlineFocusStyle={styles.textUnderline}
          value={this.props.childNote.startDate}
          onChange={this.reHandleInputChangeStartDate}
          errorText={this.getErrorTextDate().startErrorText}
        />
        <TextField
          id={"endTime_" + this.props.ordinal}
          floatingLabelText="To"
          floatingLabelFocusStyle={styles.timeFloatLabelFocus}
          style={styles.timeTextField}
          underlineFocusStyle={styles.textUnderline}
          value={this.props.childNote.endDate}
          onChange={this.reHandleInputChangeEndDate}
          errorText={this.getErrorTextDate().endErrorText}
        />
      </div>;
    }

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
                  errorText={this.getErrorTextTitle()}
                />
              </TableRowColumn>
              <TableRowColumn>
                {timeFields}
                <div>
                  <TextField
                    id={"content_" + this.props.ordinal}
                    hintText="Content"
                    multiLine
                    fullWidth={true}
                    underlineFocusStyle={styles.textUnderline}
                    value={this.props.childNote.value}
                    onChange={this.reHandleInputChangeContent}
                    errorText={this.getErrorTextContent()}
                  />
                </div>
              </TableRowColumn>
              <TableRowColumn style={styles.columnChildAction}>
                <IconButton onClick={this.reHandleRemove}>
                  <RemoveIcon color="#D50000" />
                </IconButton>
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
        <div style={{ height: 20 }} />
      </div>
    );
  }
}

export default ChildNoteAddForm;