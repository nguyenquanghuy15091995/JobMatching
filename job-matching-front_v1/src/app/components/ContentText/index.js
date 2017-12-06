import React from 'react';
import PropTypes from 'prop-types';

const contentStyle = {
  fontSize: 14,
  wordWrap: 'breakWord',
}

class ContentText extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div>
        <h6 style={contentStyle}>{this.props.value}</h6>
      </div>
    );
  }
}

ContentText.propTypes = {
  value: PropTypes.string,
}

export default ContentText;