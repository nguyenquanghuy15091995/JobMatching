import React from 'react';
import { Drawer, MenuItem, ListItem, Snackbar, Avatar, Divider } from 'material-ui';
import { Container, Row, Col } from 'reactstrap';
import SwipeableViews from 'react-swipeable-views';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import PdfCV from '../../components/PdfCV';
import ToolbarCandidate from '../../components/ToolbarCandidate';
import CVContentManagement from './CVContentManagement';
import ParentNoteAddForm from './ParentNoteAddForm';
import ParentNoteEditForm from './ParentNoteEditForm';
import { deleteParentNoteAction, editParentNoteAction } from '../../action';
import { logoutAction } from '../LoginForm/action';
import { LOGIN_SITE } from '../../../common/link';

import UserIcon from 'material-ui/svg-icons/action/account-circle';
import LogoutIcon from 'material-ui/svg-icons/action/account-balance-wallet';

import BackgroundUserProfile from '../../images/backgrounduserprofile.jpg';

const styles = {
  headerSpace: {
    height: 150,
  },
  headerStyle: {
    position: 'fixed',
    width: '100%',
    zIndex: 1,
    boxShadow: '0px 5px 7px #888888',
  },
  titleStyle: {
    fontWeight: 'bold',
  },
  snackContentStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  snackStyle: {
    width: '100%',
    height: 50,
  }
};

const mapStateToProp = (state) => {
  return {
    userInfo: state.user,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteParentNote: (index) => dispatch(deleteParentNoteAction(index)),
    doLogout: () => dispatch(logoutAction()),
  };
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

class CandidateMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpenDrawer: false,
      isAddFormOpen: false,
      message: '',
      isOpenSnackbar: false,
      isEditFormOpen: false,
      parentNoteWillEditIndex: 0,
      isPdfFormOpen: false,
    };
  }

  handleHideShowEditForm = () => this.setState({ isEditFormOpen: !this.state.isEditFormOpen });

  handleHideShowAddForm = () => this.setState({ isAddFormOpen: !this.state.isAddFormOpen });

  handleDownloadClick = () => {
    console.log('Ahihi');
  }

  handleToggleDrawer = () => this.setState({ isOpenDrawer: !this.state.isOpenDrawer });

  handleCloseDrawer = () => this.setState({ isOpenDrawer: false });

  handleRequestChange = (isOpenDrawer) => this.setState({ isOpenDrawer });

  handleHideShowSnackbar = () => this.setState({ isOpenSnackbar: !this.state.isOpenSnackbar });

  handleCloseSnackbar = () => this.setState({ isOpenSnackbar: false });

  handleChangeMessage = (newMessage) => this.setState({ message: newMessage });

  handleHideShowPdfForm = () => {
    this.setState({
      isPdfFormOpen: !this.state.isPdfFormOpen,
    })
  }

  setIndexParentNoteWillEdit = (index) => this.setState({ parentNoteWillEditIndex: index });

  getIndexParentNoteWillEdit = () => ({
    ordinal: this.state.parentNoteWillEditIndex,
    parentNote: this.props.userInfo.person.parentNotes[this.state.parentNoteWillEditIndex],
  })

  handleLogoutClick = () => {
    this.props.doLogout();
    sleep(1000).then(
      () => {
        this.props.handleChangeRedirect(LOGIN_SITE);
      }
    );
  }

  render() {
    return (
      <div>
        <div style={styles.headerStyle} >
          <Header title="Job Matching System" isNullElement={true} handleLeftButton={this.handleToggleDrawer} />
          <ToolbarCandidate
            handleMenuClick={this.handleToggleDrawer}
            handleEditDetailsClick={this.handleEditDetailsClick}
            handlePreviewPDFClick={this.handleHideShowPdfForm}
            handleDownloadClick={this.handleDownloadClick}
            handleAddNewInfoClick={this.handleHideShowAddForm}
          />
        </div>
        <div style={styles.headerSpace} />
        <Drawer
          docked={false}
          width={250}
          open={this.state.isOpenDrawer}
          onRequestChange={this.handleRequestChange}
        >
          <div style={{ width: '100%', height: 220 }}>
            <img style={{ height: '100%', width: '100%' }} src={BackgroundUserProfile} alt="background" />
          </div>
          <ListItem
            leftAvatar={<Avatar icon={<UserIcon />} color="#E0F2F1" />}
          >
            Hi, <strong>{this.props.userInfo.person.name}</strong>!
          </ListItem>
          <Divider />
          <Link to={LOGIN_SITE}>
            <ListItem
              leftAvatar={<Avatar icon={<LogoutIcon />} color="#E0F2F1" />}
              onClick={this.handleLogoutClick}
            >
              Logout
            </ListItem>
          </Link>
        </Drawer>

        <CVContentManagement
          userInfo={this.props.userInfo}
          handleDeleteParentNote={this.props.deleteParentNote}
          handleHideShowSnackbar={this.handleHideShowSnackbar}
          handleChangeMessage={this.handleChangeMessage}
          handleHideShowEditForm={this.handleHideShowEditForm}
          setIndexParentNoteWillEdit={this.setIndexParentNoteWillEdit}
        />

        <PdfCV
          account={this.props.userInfo}
          isPdfFormOpen={this.state.isPdfFormOpen}
          handleHideShowPdfForm={this.handleHideShowPdfForm}
        />

        <ParentNoteAddForm
          isAddFormOpen={this.state.isAddFormOpen}
          handleHideShowAddForm={this.handleHideShowAddForm}
          handleHideShowSnackbar={this.handleHideShowSnackbar}
          handleChangeMessage={this.handleChangeMessage}
        />

        <ParentNoteEditForm
          parentData={this.getIndexParentNoteWillEdit}
          isEditFormOpen={this.state.isEditFormOpen}
          handleHideShowEditForm={this.handleHideShowEditForm}
          handleHideShowSnackbar={this.handleHideShowSnackbar}
          handleChangeMessage={this.handleChangeMessage}
        />

        <Snackbar
          open={this.state.isOpenSnackbar}
          message={this.state.message}
          autoHideDuration={4000}
          onRequestClose={this.handleCloseSnackbar}
          contentStyle={styles.snackContentStyle}
          style={styles.snackStyle}
        />

      </div >
    );
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(CandidateMain);