import React from 'react';
import { Drawer, MenuItem } from 'material-ui';
import { Container, Row, Col } from 'reactstrap';

import CurriculumVitae from '../CandidateCurriculumVitae';
import Header from '../../components/Header';
import ToolbarCandidate from '../../components/ToolbarCandidate';

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
    }
  }

  handleToggleDrawer = () => this.setState({ isOpenDrawer: !this.state.isOpenDrawer });

  handleCloseDrawer = () => this.setState({ isOpenDrawer: false });

  handleRequestChange = (isOpenDrawer) => this.setState({ isOpenDrawer });

  render() {
    return (
      <div>
        <div style={styles.headerStyle} >
          <Header title="Job Matching System" isNullElement={true} handleLeftButton={this.handleToggleDrawer} />
          <ToolbarCandidate />
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

        {/* Set Route here */}
        <CurriculumVitae />


      </div >
    );
  }
}

export default CandidateLayout;