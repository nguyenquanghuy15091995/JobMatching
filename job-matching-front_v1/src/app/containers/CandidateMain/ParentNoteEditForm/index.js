import React from 'react';
import PropTypes from 'prop-types';
import FullscreenDialog from 'material-ui-fullscreen-dialog';
import { connect } from 'react-redux';
import {
  Dialog,
  TextField,
  Card, CardText, CardTitle, CardActions,
  RaisedButton, FlatButton,
  Checkbox,
} from 'material-ui';
import axios from 'axios';

import { editParentNoteAction } from '../../../action';
import ChildNoteEditForm from './ChildNoteEditForm';
import { accountPutByIdRouter } from '../../../../common/accountAPI';

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
  textInputTitle: {
    fontWeight: 'bold',
  },
  textFloatLabelFocus: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInputTextCation: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  saveButtonLabel: {
    fontWeight: 'bold',
  },
  saveButtonDisableLabel: {
    color: '#9E9E9E',
  },
  askButtonLabel: {
    color: '#00897B',
    fontWeight: 'bold',
  },
};

const mapStateToProps = (state) => {
  return ({
    userInfo: state.user,
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    editParentNote: (index, newParentNote) => dispatch(editParentNoteAction(index, newParentNote)),
  });
}

class ParentNoteEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTime: false,
      isError: true,
      parentTitleCation: '',
      childNotes: [],
      isOpenAsk: false,
    };
  }

  componentWillReceiveProps = () => {
    const parentNote = this.props.parentData().parentNote;
    this.setState({
      isTime: (parentNote.parentType === 'time') ? true : false,
      isError: true,
      parentTitleCation: parentNote.title,
      childNotes: parentNote.childNotes,
      isOpenAsk: false,
    });
  }

  handleSaveNewParentNote = () => {
    let newParentNote = {
      title: this.state.parentTitleCation,
      parentType: this.state.isTime ? 'time' : 'non-time',
      childNotes: this.state.childNotes,
    };
    this.props.editParentNote(this.props.parentData().ordinal, newParentNote);
    const curUserInfo = this.props.userInfo;
    const newUserInfo = {
      "username" : curUserInfo.username,
      "password" : curUserInfo.password,
      "role": curUserInfo.role,
      "person": curUserInfo.person
    }
    axios.put(accountPutByIdRouter(this.props.userInfo._id), newUserInfo).then(
      (response) => {
        this.props.handleChangeMessage(this.state.parentTitleCation + ' was edited!');
        this.props.handleHideShowSnackbar();
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  resetState = () => {
    this.setState({
      isTime: false,
      isError: false,
      parentTitleCation: 'Example Caption',
      childNotes: [],
    });
  }

  handleCheckboxTimeStatus = () => {
    this.setState({ isTime: !this.state.isTime });
    this.scanErrorNullTextField();
  }

  handleRemove = (index) => {
    let temps = [];
    this.state.childNotes.map(
      (child, i) => {
        if (i !== index) {
          temps.push(child);
        }
      }
    );
    this.setState({
      childNotes: temps,
    });
    this.scanErrorNullTextField();
  }

  handleInputChangeCaption = (event) => {
    this.setState({
      parentTitleCation: event.target.value.trimRight(),
      isTouched: true,
    });
    this.scanErrorNullTextField();
  }

  handleInputChangeTitle = (event, index) => {
    let temps = this.state.childNotes;
    temps[index].title = event.target.value;
    this.setState({
      childNotes: temps,
    });
    this.scanErrorNullTextField();
  }

  handleInputChangeContent = (event, index) => {
    let temps = this.state.childNotes;
    temps[index].value = event.target.value;
    this.setState({
      childNotes: temps,
    });
    this.scanErrorNullTextField();
  }

  handleInputChangeStartDate = (event, index) => {
    let temps = this.state.childNotes;
    temps[index].startDate = event.target.value;
    this.setState({
      childNotes: temps,
    });
    this.scanErrorNullTextField();
  }

  handleInputChangeEndDate = (event, index) => {
    let temps = this.state.childNotes;
    temps[index].endDate = event.target.value;
    this.setState({
      childNotes: temps,
    });
    this.scanErrorNullTextField();
  }

  handleAddChildButtonClick = () => {
    let newChild = {
      title: '',
      startDate: '',
      endDate: '',
      value: '',
    };

    let temps = this.state.childNotes;
    temps.push(newChild);
    this.setState({
      childNotes: temps,
    });
    this.scanErrorNullTextField();
  }

  getErrorCaption = () => {
    let errorText = '';
    if (this.state.parentTitleCation === '') {
      errorText = 'Required!';
    }
    return errorText;
  }

  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  scanErrorNullTextField = () => {
    return this.sleep(300).then(
      () => {
        let isNullError = false;
        if (this.state.parentTitleCation === '') {
          isNullError = true;
        }
        if (this.state.childNotes.length === 0) {
          isNullError = true;
        }
        this.state.childNotes.forEach(
          (child) => {
            if (child.title === '') {
              isNullError = true;
            }
            if (child.value === '') {
              isNullError = true;
            }
            if (this.state.isTime) {
              if (child.startDate === '') {
                isNullError = true;
              }
              if (child.endDate === '') {
                isNullError = true;
              }
            }
          }
        );
        this.setState({ isError: isNullError });
      }
    );
  }

  handleHideShowAskDialog = () => {
    this.setState({
      isOpenAsk: !this.state.isOpenAsk,
    });
  }

  reHandleHideShowAddForm = () => {
    this.props.handleHideShowAddForm();
    this.handleHideShowAskDialog();
  }

  render() {
    const timeLabelStatus = this.state.isTime ? 'Display time: ON' : 'Display time: OFF';
    const timeIconColor = this.state.isTime ? { fill: '#00897B' } : {};
    const closeButtonActions = [
      <FlatButton
        label="Cancel"
        onClick={this.handleHideShowAskDialog}
        labelStyle={styles.askButtonLabel}
      />,
      <FlatButton
        label="Close"
        onClick={this.props.handleHideShowEditForm}
        labelStyle={styles.askButtonLabel}
      />,
    ];
    return (
      <div>
        <FullscreenDialog
          open={this.props.isEditFormOpen}
          onRequestClose={this.handleHideShowAskDialog}
          title="Edit Details Form"
          appBarStyle={{ backgroundColor: '#00897B' }}
          style={{ backgroundColor: '#EEEEEE' }}
          actionButton={
            <FlatButton
              label="Save"
              labelStyle={
                this.state.isError ? styles.saveButtonDisableLabel : styles.saveButtonLabel
              }
              disabled={this.state.isError}
              onClick={this.handleSaveNewParentNote}
            />
          }
        >
          <form>
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
                    value={this.state.parentTitleCation}
                    onChange={this.handleInputChangeCaption}
                    errorText={this.getErrorCaption()}
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
                {
                  this.state.childNotes.map(
                    (childNote, i) => {
                      return (
                        <div key={i}>
                          <ChildNoteEditForm
                            ordinal={i}
                            childNote={childNote}
                            isTimeNote={this.state.isTime}
                            handleRemove={this.handleRemove}
                            handleInputChangeContent={this.handleInputChangeContent}
                            handleInputChangeTitle={this.handleInputChangeTitle}
                            handleInputChangeStartDate={this.handleInputChangeStartDate}
                            handleInputChangeEndDate={this.handleInputChangeEndDate}
                          />
                        </div>
                      );
                    }
                  )
                }
              </CardText>
              <CardActions style={styles.cardActionStyle} >
                <RaisedButton
                  label="Add"
                  labelColor="#FFFFFF"
                  labelStyle={styles.addLabel}
                  style={styles.addStyle}
                  buttonStyle={styles.addButtonStyle}
                  icon={<AddIcon color="#FFFFFF" />}
                  onClick={this.handleAddChildButtonClick}
                />
              </CardActions>
            </Card>
          </form>
        </FullscreenDialog>
        <Dialog
          title="Do you want to close EDIT form?"
          modal={true}
          open={this.state.isOpenAsk}
          actions={closeButtonActions}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParentNoteEditForm);
