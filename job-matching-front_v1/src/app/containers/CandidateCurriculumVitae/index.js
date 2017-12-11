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
    right: 20,
    bottom: 20,
    position: 'fixed',
  },
};

class CurriculumVitae extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <EditCVContent />
      </div>
    );
  }
}

export default CurriculumVitae;