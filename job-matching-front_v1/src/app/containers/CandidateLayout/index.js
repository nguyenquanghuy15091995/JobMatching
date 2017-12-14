import React from 'react';
import { Drawer, MenuItem } from 'material-ui';
import { Container, Row, Col } from 'reactstrap';
import SwipeableViews from 'react-swipeable-views';

import Header from '../../components/Header';
import ToolbarCandidate from '../../components/ToolbarCandidate';
import ShowCVContent from '../ShowCVContent';
import EditCVContent from '../EditCVContent';
import ParentNoteAddForm from '../ParentNoteAddForm';

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

class CandidateLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpenDrawer: false,
      slideIndex: 0,
      isAddFormOpen: false,
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
            <EditCVContent />
          </div>
          <div>
            <ShowCVContent />
          </div>
        </SwipeableViews>

        <ParentNoteAddForm
          isAddFormOpen={this.state.isAddFormOpen}
          handleHideShowAddForm={this.handleHideShowAddForm}
        />

      </div >
    );
  }
}

export default CandidateLayout;