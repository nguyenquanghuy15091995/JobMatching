import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col
} from 'reactstrap';
import {
  List, ListItem, Chip, FloatingActionButton
} from 'material-ui';

import ParentNote from '../../../components/ParentNote';

class CVContentManagement extends React.Component {

  constructor(props) {
    super(props);
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
                            <ParentNote
                              ordinal={i}
                              parentNote={parentNote}
                              handleDeleteParentNote={this.props.handleDeleteParentNote}
                              handleHideShowSnackbar={this.props.handleHideShowSnackbar}
                              handleChangeMessage={this.props.handleChangeMessage}
                            />
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
      </div>
    );
  }
}

CVContentManagement.propTypes = {
  userInfo: PropTypes.object,
}

export default CVContentManagement;