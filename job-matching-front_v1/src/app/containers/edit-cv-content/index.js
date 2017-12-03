'use strict';
import React from 'react';
import {
  Container, Row, Col
} from 'reactstrap';
import {
  List, ListItem, Chip, FloatingActionButton 
} from 'material-ui';

import ContentAdd from 'material-ui/svg-icons/content/add';

import ParentNote from '../../components/ParentNote';

class EditCVContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
      </div>
    );
  }
}

export default EditCVContent;