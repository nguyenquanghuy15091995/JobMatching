import React from 'react';
import { Tabs, Tab, FloatingActionButton } from 'material-ui';

import ContentAdd from 'material-ui/svg-icons/content/add';
import SwipeableViews from 'react-swipeable-views';

import ShowCVContent from '../ShowCVContent';
import EditCVContent from '../EditCVContent';
import AddNewParentNote from '../AddNewParentNote';

const styles = {
  fixElement: {
    position: 'fixed',
    width: '100%',
    zIndex: 1
  },
  fixContent: {
    paddingTop: 125
  },
  tabFont: {
    fontWeight: 'bold'
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
  addButton: {
    right: 0,
    bottom: 0,
    position: 'fixed',
    marginRight: 20,
    marginBottom: 20,
  }
};

class CurriculumVitae extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      isShowAddDialog: false,
    };
  }

  handleShowHideAddDialog = () => {
    this.setState({
      isShowAddDialog: !this.state.isShowAddDialog
    });
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render = () => {
    return (
      <div>
        <div style={styles.fixElement}>
          <Tabs
            onChange={this.handleChange}
            value={this.state.slideIndex}
          >
            <Tab label="Edit" value={0} style={styles.tabFont} />
            <Tab label="View" value={1} style={styles.tabFont} />

          </Tabs>
        </div>
        <div style={styles.fixContent}>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
          >

            <div style={styles.slide}>
              {/*Edit*/}
              <EditCVContent
                isShowAddDialog={this.state.isShowAddDialog}
                handleShowHideAddDialog={this.handleShowHideAddDialog}
              />

            </div>
            <div style={styles.slide}>
              {/*Show*/}
              <ShowCVContent />


            </div>
          </SwipeableViews>
          <FloatingActionButton
            secondary={true}
            style={styles.addButton}
            onClick={this.handleShowHideAddDialog}
          >
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </div>
    );
  }
}

export default CurriculumVitae;