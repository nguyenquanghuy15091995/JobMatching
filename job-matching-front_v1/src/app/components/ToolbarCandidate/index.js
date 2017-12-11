import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle, IconButton, RaisedButton } from 'material-ui';

import Menu from 'material-ui/svg-icons/navigation/menu';

const styles = {
  toolbarStyle: {
    //backgroundColor: '#00897B',
    // position: 'fixed',
    // width: '100%',
    // zIndex: 1,
  },
  titleStyle: {
    fontWeight: 'bold',
  },
  menuButtonContainer: {
    marginLeft: 9,
  },
  menuButtonStyle: {
    backgroundColor: '#00897B',
  },
};

class ToolbarCandidate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Toolbar style={styles.toolbarStyle} >
          <ToolbarGroup firstChild={true}>
            <RaisedButton
              label="Menu"
              style={styles.menuButtonContainer}
              buttonStyle={styles.menuButtonStyle}
              icon={<Menu />}
            />
          </ToolbarGroup>
          <ToolbarGroup>
            Ahihi
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}

export default ToolbarCandidate;
