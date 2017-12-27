import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, IconButton } from 'material-ui';

import Menu from 'material-ui/svg-icons/navigation/menu';

const styles = {
  headerStyle: {
    backgroundColor: '#00796B',
    // position: 'fixed',
    // width: '100%',
    // zIndex: 1,
  },
  titleStyle: {
    fontWeight: 'bold',
  },
}

class Header extends React.Component {
  render() {

    let header;

    if (this.props.isNullElement) {
      header = <AppBar
        title={this.props.title}
        titleStyle={styles.titleStyle}
        iconElementLeft={<div />}
        style={styles.headerStyle}
        iconStyleLeft={styles.leftButtonStyle}
      />
    } else {

      header = <AppBar
        title={this.props.title}
        titleStyle={styles.titleStyle}
        iconElementLeft={
          <IconButton
            onClick={this.props.handleLeftButton}
          >
            <Menu />
          </IconButton>
        }
        style={styles.headerStyle}
        iconStyleLeft={styles.leftButtonStyle}
      />
    }

    return (
      <div>
        {header}
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
  isNullElement: PropTypes.bool,
  handleLeftButton: PropTypes.func,
}

export default Header;