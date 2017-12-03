import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, RaisedButton } from 'material-ui';

class AddNewParentNote extends React.Component {

  constructor(props) {
    super(props);
  }

  render = () => {

    const actions = [
      <RaisedButton
        label="Cancel"
        onClick={this.props.handleShowHideAddDialog}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          open={this.props.isShowAddDialog}
        >
          Only actions can close this dialog.
        </Dialog>
      </div>
    );
  }
}

AddNewParentNote.propTypes = {
  isShowAddDialog: PropTypes.bool,
  handleShowHideAddDialog: PropTypes.func
}

export default AddNewParentNote;