import React from 'react';
import PropTypes from 'prop-types';
import {
  Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle,
  RaisedButton,
} from 'material-ui';
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ReactTags from 'react-tag-autocomplete';

import MenuIcon from 'material-ui/svg-icons/navigation/menu';

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
  menuButtonTitle: {
    fontWeight: 'bold',
    color: '#F5F5F5',
  },
  appButtonContainer: {
    marginLeft: 9,
  },
  appButtonStyle: {
    backgroundColor: '#00897B',
  },
  appButtonTitle: {
    fontWeight: 'bold',
    color: '#F5F5F5',
  },
  iconStyle: {
    marginBottom: 20,
  },
};

class ToolbarRecruiter extends React.Component {
  render() {
    return (
      <div>
        <Toolbar style={styles.toolbarStyle} >
          <ToolbarGroup firstChild={true}>
            <RaisedButton
              label="Menu"
              labelStyle={styles.menuButtonTitle}
              style={styles.menuButtonContainer}
              buttonStyle={styles.menuButtonStyle}
              icon={<MenuIcon />}
              onClick={this.props.handleMenuClick}
            />
          </ToolbarGroup>

        </Toolbar>
      </div>
    );
  }
}

export default ToolbarRecruiter;
