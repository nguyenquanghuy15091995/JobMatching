import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col
} from 'reactstrap';
import {
  Card, CardActions, CardHeader, CardMedia, CardTitle, CardText,
  Paper, FlatButton, FontIcon, Avatar, Divider,
} from 'material-ui';
import FullscreenDialog from 'material-ui-fullscreen-dialog';

import UserIcon from 'material-ui/svg-icons/action/account-circle';

import NonTimeChildNote from '../NonTimeChildNote';
import TimeChildNote from '../TimeChildNote';

const styles = {
  headTitle: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 30,
  },
  devider: {
    padding: 2,
    borderColor: '#00796B',
    backgroundColor: '#00796B',
  },
  posHeader: {
    paddingTop: 30
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 12,
  },
  subHeader: {
    fontSize: 20,
    paddingLeft: 10
  },
  deviderHead: {
    paddingTop: 5,
    borderColor: '#000000',
    backgroundColor: '#37474F',
  },
  deviderBody: {
    height: 5,
    backgroundColor: '#37474F',
  }
};

const ParentNoteNonAction = (props) => {
  let childNoteTemp;
  if (props.parentNote.parentType === 'time') {
    childNoteTemp = <div>
      <TimeChildNote childNotes={props.parentNote.childNotes} />
    </div>

  }
  else {
    childNoteTemp = <div>
      <NonTimeChildNote childNotes={props.parentNote.childNotes} />
    </div>
  }

  return (
    <div>
      <Card>
        <CardTitle
          title={props.parentNote.title.toUpperCase()}
          titleStyle={styles.headTitle}
        />
        <Divider style={styles.devider} />

        <CardText>
          {childNoteTemp}
        </CardText>
      </Card>
    </div>
  );
}

class PdfCV extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let screenView = <div />;
    if (this.props.account !== undefined) {
      let personInfo = this.props.account.person;
      screenView = <FullscreenDialog
        open={this.props.isPdfFormOpen}
        onRequestClose={this.props.handleHideShowPdfForm}
        title={`${personInfo.name} details`}
        appBarStyle={{ backgroundColor: '#00897B' }}
        style={{ backgroundColor: '#EEEEEE' }}
      >
        <Container>
          <Row style={{ height: 25 }} />
          <Row>
            <Col md="1" />
            <Col md="10" sm="12" xs="12">
              <Paper>
                <Card>
                  <CardHeader
                    style={styles.posHeader}
                    title={personInfo.name}
                    titleStyle={styles.header}
                    subtitle={personInfo.email}
                    subtitleStyle={styles.subHeader}
                    avatar={<Avatar icon={<UserIcon />} size={100} />}
                  />
                  <Divider style={styles.deviderHead} />
                  <Divider style={styles.deviderHead} />
                  <Divider style={styles.deviderHead} />
                  {
                    personInfo.parentNotes.map(
                      (parentNote, i) => {
                        return (
                          <div key={i}>
                            <CardText>
                              <ParentNoteNonAction parentNote={parentNote} ordinal={i} />
                            </CardText>
                          </div>
                        );
                      }
                    )
                  }
                  <Divider style={styles.deviderHead} />
                </Card>

              </Paper>
            </Col>
            <Col md="1" />
          </Row>
        </Container>
      </FullscreenDialog>;
    }
    return (
      <div>
        {screenView}
      </div>
    );
  }
}

ParentNoteNonAction.propTypes = {
  parentNote: PropTypes.object,
};

PdfCV.propTypes = {
  account: PropTypes.object,
  isPdfFormOpen: PropTypes.bool,
  handleHideShowPdfForm: PropTypes.func,
};

export default PdfCV;
