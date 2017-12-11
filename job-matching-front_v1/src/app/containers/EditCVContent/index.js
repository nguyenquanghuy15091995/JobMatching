import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col
} from 'reactstrap';
import {
  List, ListItem, Chip, FloatingActionButton
} from 'material-ui';
import { connect } from 'react-redux';

import ParentNote from '../../components/ParentNote';
import AddNewParentNote from '../AddNewParentNote';

const mapStateToProp = (state) => {
  return {
    userInfo: state.user,
  };
}

class EditCVContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowAddDialog: false,
    };
  }

  handleShowHideAddDialog = () => {
    this.setState({
      isShowAddDialog: !this.state.isShowAddDialog
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="1" />
            <Col md="10" sm="12" xs="12">
              <List>
                {
                  this.props.userInfo.person.parentNotes.map(
                    (parentNote, i) => {
                      return (
                        <div key={i}>
                          <ListItem disabled >
                            <ParentNote ordinal={i} parentNote={parentNote} />
                          </ListItem>
                        </div>
                      );
                    }
                  )
                }
              </List>
            </Col>
            <Col md="1" />
          </Row>
        </Container>
        {/* <AddNewParentNote
          isShowAddDialog={this.props.isShowAddDialog}
          handleShowHideAddDialog={this.props.handleShowHideAddDialog}
        /> */}
      </div>
    );
  }
}

EditCVContent.propTypes = {
  userInfo: PropTypes.object,
}

export default connect(mapStateToProp)(EditCVContent);