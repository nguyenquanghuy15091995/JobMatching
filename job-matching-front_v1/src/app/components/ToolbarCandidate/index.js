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

import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import AppsIcon from 'material-ui/svg-icons/navigation/apps';
import RemoveRedEyeIcon from 'material-ui/svg-icons/image/remove-red-eye';
import DownloadIcon from 'material-ui/svg-icons/file/file-download';
import NoteAddIcon from 'material-ui/svg-icons/action/note-add';
import AssignmentIcon from 'material-ui/svg-icons/action/assignment';

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

class ToolbarCandidate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenFeatures: false,
    };
  }

  handleClickFeaturesButton = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      isOpenFeatures: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestCloseFeatures = () => {
    this.setState({
      isOpenFeatures: false,
    });
  };

  reHandleAddNewInfoClick = () => {
    this.props.handleAddNewInfoClick();
    this.handleRequestCloseFeatures();
  }

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

          <ToolbarGroup lastChild={true} >
            <ToolbarSeparator />
            <RaisedButton
              label="Features"
              labelStyle={styles.appButtonTitle}
              buttonStyle={styles.appButtonStyle}
              style={styles.appButtonContainer}
              icon={<AppsIcon />}
              onClick={this.handleClickFeaturesButton}
            />
            <Popover
              open={this.state.isOpenFeatures}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              targetOrigin={{ horizontal: 'right', vertical: 'top' }}
              onRequestClose={this.handleRequestCloseFeatures}
              animation={PopoverAnimationVertical}
            >
              <Menu>
                <Divider />
                <MenuItem
                  primaryText="Manage CV Details"
                  leftIcon={<AssignmentIcon color="#00897B" />}
                  onClick={this.props.handleEditDetailsClick}
                />
                <MenuItem
                  primaryText="Preview as PDF"
                  leftIcon={<RemoveRedEyeIcon color="#00897B" />}
                  onClick={this.props.handlePreviewPDFClick}
                />
                <MenuItem
                  primaryText="Add new Info"
                  leftIcon={<NoteAddIcon color="#00897B" />}
                  onClick={this.reHandleAddNewInfoClick}
                />
                <Divider />
                <MenuItem
                  primaryText="Download"
                  leftIcon={<DownloadIcon color="#00897B" />}
                  onClick={this.props.handleDownloadClick}
                />
              </Menu>
            </Popover>

          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}

ToolbarCandidate.propTypes = {
  handleMenuClick: PropTypes.func,
  handleEditDetailsClick: PropTypes.func,
  handlePreviewPDFClick: PropTypes.func,
  handleDownloadClick: PropTypes.func,
  handleAddNewInfoClick: PropTypes.func,
};

export default ToolbarCandidate;
