import React from 'react';
import {
  Container, Row, Col
} from 'reactstrap';
import {
  Card, CardActions, CardHeader, CardMedia, CardTitle, CardText,
  Paper, FlatButton, FontIcon, Avatar, Divider
} from 'material-ui';
import { connect } from 'react-redux';

import ParentNote from '../../components/ParentNote';

import TDTLogo from './tdt_logo.png';

const styles = {
  posHeader: {
    paddingTop: 30
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30
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
}

const mapStateToProps = (state) => {
  return { userInfo: state.user };
}

class ShowCVContent extends React.Component {

  render() {
    let personInfo = this.props.userInfo.person;
    return (
      <div>
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
                    subtitle={personInfo.dateOfBirth}
                    subtitleStyle={styles.subHeader}
                    avatar={<Avatar icon={<FontIcon />} size={100} />}
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
                              <ParentNote parentNote={parentNote} ordinal={i} />
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
      </div>
    );
  }
}

export default connect(mapStateToProps)(ShowCVContent);