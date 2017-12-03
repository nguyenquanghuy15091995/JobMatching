import React from 'react';
import { Tabs, Tab, AppBar } from 'material-ui';

import SwipeableViews from 'react-swipeable-views';

import ShowCVContent from '../show-cv-content';
import EditCVContent from '../edit-cv-content';


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
};

class CurriculumVitae extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render = () => {
    return (
      <div style={{backgroundColor:"#00838F"}}>
        <div style={styles.fixElement}>
          <AppBar />
          <Tabs
            onChange={this.handleChange}
            value={this.state.slideIndex}
          >
            <Tab label="View" value={0} style={styles.tabFont} />
            <Tab label="Edit" value={1} style={styles.tabFont} />
          </Tabs>
        </div>
        <div style={styles.fixContent}>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          
          <div style={styles.slide}>
            {/*Show*/}
            <ShowCVContent />
          </div>
          <div style={styles.slide}>
            {/*Edit*/}
            <EditCVContent/>
          </div>
        </SwipeableViews>
        </div>
      </div>
    );
  }
}

export default CurriculumVitae;