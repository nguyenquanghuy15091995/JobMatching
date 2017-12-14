import React from 'react';
import PropTypes from 'prop-types';
import FullscreenDialog from 'material-ui-fullscreen-dialog';
import {
  Dialog,
  TextField,
  Card, CardText, CardTitle, CardActions,
  RaisedButton, IconButton, FlatButton, FloatingActionButton,
  Table, TableBody, TableRow, TableRowColumn,
  Checkbox,
} from 'material-ui';

import CloseIcon from 'material-ui/svg-icons/navigation/close';
import RemoveIcon from 'material-ui/svg-icons/content/remove-circle';
import AcceptIcon from 'material-ui/svg-icons/action/check-circle';
import AddIcon from 'material-ui/svg-icons/av/playlist-add';
import ClockOffIcon from 'material-ui/svg-icons/action/alarm-off';
import ClockOnIcon from 'material-ui/svg-icons/action/alarm-on';


const styles = {
  addButtonStyle: {
    backgroundColor: '#00897B',
    width: 150,
  },
  addStyle: {
    width: 150,
  },
  addLabel: {
    fontWeight: 'bold',
  },
  cardActionStyle: {
    width: '99%',
    textAlign: 'right',
  },
  columnChildTitle: {
    width: '20%',
  },
  columnChildAction: {
    width: 80,
  },
  parentTitle: {
    marginLeft: 20,
  },
  clockCheckbox: {
    width: 180,
    marginLeft: 20,
    fontSize: 15,
  },
  textUnderline: {
    borderColor: '#4DB6AC',
  },
  textFloatLabel: {
    color: '#00897B',
  },
  textFloatLabelFocus: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInputTextCation: {
    fontSize: 20,
    fontWeight: 'bold',
  },
};

class ParentNoteAddForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isTime: false,
      childNotes: [],
    };
  }

  handleCheckboxTimeStatus = () => {
    this.setState({ isTime: !this.state.isTime });
  }

  render() {

    const timeLabelStatus = this.state.isTime ? 'Display time: ON' : 'Display time: OFF';
    const timeIconColor = this.state.isTime ? { fill: '#00897B' } : {};

    return (
      <div>
        <FullscreenDialog
          open={true}
          onRequestClose={this.props.handleHideShowAddForm}
          title="Add New Details Form"
          appBarStyle={{ backgroundColor: '#00897B' }}
          style={{ backgroundColor: '#EEEEEE' }}
          actionButton={<FlatButton label="Save" />}
        >
          <Card>
            <div style={{ height: 30 }} />
            <CardTitle
              title={
                <TextField
                  style={styles.parentTitle}
                  inputStyle={styles.textInputTextCation}
                  floatingLabelText="CAPTION"
                  floatingLabelFocusStyle={styles.textFloatLabelFocus}
                  floatingLabelStyle={styles.textFloatLabel}
                  underlineFocusStyle={styles.textUnderline}
                />
              }
            />
            <CardText>
              <Checkbox
                checkedIcon={<ClockOnIcon />}
                uncheckedIcon={<ClockOffIcon />}
                label={timeLabelStatus}
                style={styles.clockCheckbox}
                iconStyle={timeIconColor}
                checked={this.state.isTime}
                onCheck={this.handleCheckboxTimeStatus}
              />
            </CardText>
            <CardText>
              <Table selectable={false}>
                <TableBody displayRowCheckbox={false}>
                  <TableRow>
                    <TableRowColumn style={styles.columnChildTitle}>
                      <TextField
                        hintText="Title"
                        fullWidth={true}
                        underlineFocusStyle={styles.textUnderline}
                      />
                    </TableRowColumn>
                    <TableRowColumn>
                      <TextField
                        hintText="Content"
                        multiLine
                        fullWidth={true}
                        underlineFocusStyle={styles.textUnderline}
                      />
                    </TableRowColumn>
                    <TableRowColumn style={styles.columnChildAction}>
                      <IconButton>
                        <RemoveIcon color="#D50000" />
                      </IconButton>
                    </TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
            </CardText>
            <CardActions style={styles.cardActionStyle} >
              <RaisedButton
                label="Add"
                labelColor="#FFFFFF"
                labelStyle={styles.addLabel}
                style={styles.addStyle}
                buttonStyle={styles.addButtonStyle}
                icon={<AddIcon color="#FFFFFF" />}
              />
            </CardActions>
          </Card>
        </FullscreenDialog>
      </div>
    );
  }
}

ParentNoteAddForm.propTypes = {
  isAddFormOpen: PropTypes.bool,
  handleHideShowAddForm: PropTypes.func,
};

export default ParentNoteAddForm;
