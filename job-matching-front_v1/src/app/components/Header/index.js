import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, IconButton } from 'material-ui';

import Dehaze from 'material-ui/svg-icons/image/dehaze';

const styles = {
  headerStyle: {
    backgroundColor: '#00897B',
  },
  titleStyle: {
    fontWeight: 'bold',
    marginLeft: '1%',
  },

}

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render = () => {

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
        iconElementLeft={<IconButton><Dehaze /></IconButton>}
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