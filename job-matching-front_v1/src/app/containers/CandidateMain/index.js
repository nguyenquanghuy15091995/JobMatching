import React from 'react';
import { Drawer, MenuItem, Snackbar } from 'material-ui';
import { Container, Row, Col } from 'reactstrap';
import SwipeableViews from 'react-swipeable-views';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import ToolbarCandidate from '../../components/ToolbarCandidate';
import ShowCVContent from '../ShowCVContent';
import CVContentManagement from './CVContentManagement';
import ParentNoteAddForm from './ParentNoteAddForm';
import { deleteParentNoteAction } from '../../action';

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
};

const mapStateToProp = (state) => {
  return {
    userInfo: state.user,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteParentNote: (index) => dispatch(deleteParentNoteAction(index)),
  };
}

class CandidateMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpenDrawer: false,
      slideIndex: 0,
      isAddFormOpen: false,
      message: '',
      isOpenSnackbar: false,
    };
  }

  handleHideShowAddForm = () => this.setState({ isAddFormOpen: !this.state.isAddFormOpen });

  handleDownloadClick = () => {
    console.log('Ahihi');
  }

  handleEditDetailsClick = () => this.setState({ slideIndex: 0 });

  handlePreviewPDFClick = () => this.setState({ slideIndex: 1 });

  handleSwipeableChange = (value) => this.setState({ slideIndex: value });

  handleToggleDrawer = () => this.setState({ isOpenDrawer: !this.state.isOpenDrawer });

  handleCloseDrawer = () => this.setState({ isOpenDrawer: false });

  handleRequestChange = (isOpenDrawer) => this.setState({ isOpenDrawer });

  handleHideShowSnackbar = () => this.setState({ isOpenSnackbar: !this.state.isOpenSnackbar });

  handleCloseSnackbar = () => this.setState({ isOpenSnackbar: false });

  handleChangeMessage = (newMessage) => this.setState({ message: newMessage });

  render() {
    return (
      <div>
        <div style={styles.headerStyle} >
          <Header title="Job Matching System" isNullElement={true} handleLeftButton={this.handleToggleDrawer} />
          <ToolbarCandidate
            handleMenuClick={this.handleToggleDrawer}
            handleEditDetailsClick={this.handleEditDetailsClick}
            handlePreviewPDFClick={this.handlePreviewPDFClick}
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

          <MenuItem>Candidate Details</MenuItem>
          <MenuItem>Show Details as CV</MenuItem>
          <MenuItem>Setting</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Drawer>

        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleSwipeableChange}
        >
          <div>
            <CVContentManagement
              userInfo={this.props.userInfo}
              handleDeleteParentNote={this.props.deleteParentNote}
              handleHideShowSnackbar={this.handleHideShowSnackbar}
              handleChangeMessage={this.handleChangeMessage}
            />
          </div>
          <div>
            <ShowCVContent />
          </div>
        </SwipeableViews>

        <ParentNoteAddForm
          isAddFormOpen={this.state.isAddFormOpen}
          handleHideShowAddForm={this.handleHideShowAddForm}
          handleHideShowSnackbar={this.handleHideShowSnackbar}
          handleChangeMessage={this.handleChangeMessage}
        />

        <Snackbar
          open={this.state.isOpenSnackbar}
          message={this.state.message}
          autoHideDuration={4000}
          onRequestClose={this.handleCloseSnackbar}
        />

      </div >
    );
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(CandidateMain);