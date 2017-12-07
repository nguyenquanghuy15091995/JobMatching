import React from 'react';
import { Drawer, MenuItem } from 'material-ui';

import CurriculumVitae from '../CandidateCurriculumVitae';
import Header from '../../components/Header';

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

  render = () => {
    return (
      <div>
        <Header title=" TDT Job Matching System" isNullElement={false} handleLeftButton={this.handleToggleDrawer} />
        <Drawer
          docked={false}
          width={250}
          open={this.state.isOpenDrawer}
          onRequestChange={this.handleRequestChange}
        > 
          {/* Set Link here */}
          <MenuItem>Candidate Details</MenuItem>
          <MenuItem>Show Details as CV</MenuItem>
          <MenuItem>Setting</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Drawer>

        {/* Set Route here */}

        <CurriculumVitae />
      </div>
    );
  }
}

export default CandidateLayout;