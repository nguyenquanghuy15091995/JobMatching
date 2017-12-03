'use strict';
import React from 'react';
import {
  Container, Row, Col
} from 'reactstrap';
import {
  List, ListItem, Chip, FloatingActionButton
} from 'material-ui';



import ParentNote from '../../components/ParentNote';
import AddNewParentNote from '../add-new-parent-note';

class EditCVContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      isShowAddDialog: false,

      arrParentNote: [
        <ListItem disabled >
          <ParentNote />
        </ListItem>,
        <ListItem disabled >
          <ParentNote />
        </ListItem>,
        <ListItem disabled >
          <ParentNote />
        </ListItem>,
        <ListItem disabled >
          <ParentNote />
        </ListItem>,
      ],
    }
  }

  handleShowHideAddDialog = () => {
    this.setState({
      isShowAddDialog: !this.state.isShowAddDialog
    });
  }

  render = () => {
    let test = [{ aaa: <Chip>sfsdfsd</Chip> }]
    let arr = [<Chip>sfsdfsd</Chip>, <Chip>sfsdfsd</Chip>, <Chip>sfsdfsd</Chip>]
    return (
      <div>
        <Container>
          <Row>
            <Col md="2" />
            <Col md="8" sm="12" xs="12">
              <List>
                {this.state.arrParentNote.map(
                  (tempNote, i) => {
                    return tempNote
                  }
                )}
              </List>
            </Col>
            <Col md="2" />
          </Row>
        </Container>
        <AddNewParentNote
          isShowAddDialog={this.props.isShowAddDialog}
          handleShowHideAddDialog={this.props.handleShowHideAddDialog}
        />
      </div>
    );
  }
}

export default EditCVContent;