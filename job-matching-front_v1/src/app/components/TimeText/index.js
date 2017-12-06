import React from 'react';
import PropTypes from 'prop-types';

import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';

const timeStyle = {
  fontSize: 15,
  wordWrap: 'breakWord',
}

const iconStyle = {
  height: 15,
  paddingTop: 3,
}

class TimeText extends React.Component {

  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div>
        <h6 style={timeStyle} >
          <strong>From:</strong> {this.props.startDate} <ArrowForward style={iconStyle} />
          <strong> To:</strong> {this.props.endDate}
        </h6>
      </div>
    );
  }
}

TimeText.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
}

export default TimeText;