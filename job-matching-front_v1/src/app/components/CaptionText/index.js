import React from 'react';
import PropTypes from 'prop-types';

const captionStyle = {
  fontWeight: 'bold',
  fontSize: 18,
}

class CaptionText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h6 style={captionStyle}>{this.props.value}</h6>
      </div>
    );
  }
}

CaptionText.propTypes = {
  value: PropTypes.string,
}

export default CaptionText;