import React from 'react';
import { MuiThemeProvider, Dialog, Checkbox, RaisedButton } from 'material-ui';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import LoginForm from './containers/LoginForm';
import CandidateMain from './containers/CandidateMain';
import RecruiterMain from './containers/RecruiterMain';

import { CANDIDATE_SITE, LOGIN_SITE, RECRUITER_SITE } from '../common/link';
import recordVoiceOver from 'material-ui/svg-icons/action/record-voice-over';

const styles = {
  icontCheckboxStyle: {
    fill: '#00897B',
    width: 100,
    height: 100,
  },
  checkboxInputStyle: {
    width: 100,
    height: 100,
  },
  confirmLabelStyle: {
    fontSize: 40,
    margin: '0 auto',
    textAlign: 'center',
    color: '#333',
  },
  goHomeButtonContainer: {
    height: 50,
  },
  goHomeButtonStyle: {
    height: 50,
    backgroundColor: '#00897B',
  },
  goHomeButtonLabel: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  goHomeLink: {
    width: '100%',
    marginTop: 20,
  },
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectLink: LOGIN_SITE,
      isOpenAskDialog: false,
      isCheckedHuman: false,
    };
  }

  handleChangeRedirect = (link) => {
    this.setState({
      redirectLink: link,
    });
  }

  handleShowHideAskDialog = () => {
    this.setState({
      isOpenAskDialog: !this.state.isOpenAskDialog,
    });
  }

  handleToggleCheckbox = () => {
    this.setState({
      isCheckedHuman: true,
    });
  }

  render() {

    let goHomePageAction = <div />
    if (this.state.isCheckedHuman) {
      goHomePageAction = <Link to="/" style={styles.goHomeLink}>
        <RaisedButton
          fullWidth
          style={styles.goHomeButtonContainer}
          buttonStyle={styles.goHomeButtonStyle}
          labelStyle={styles.goHomeButtonLabel}
          label="Go to HomePage"
          labelPosition="before"
          onClick={this.handleShowHideAskDialog}
        />
      </Link>
    }

    let redirect = <Redirect to={RECRUITER_SITE} />;
    if (this.state.redirectLink === CANDIDATE_SITE) {
      redirect = <Redirect to={CANDIDATE_SITE} />;
    } else if (this.state.redirectLink === RECRUITER_SITE) {
      redirect = <Redirect to={RECRUITER_SITE} />;
    }
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <Router>
              <div>
                <Switch>
                  <Route
                    path={LOGIN_SITE}
                    component={
                      () => <LoginForm
                        handleChangeRedirect={this.handleChangeRedirect}
                        handleShowHideAskDialog={this.handleShowHideAskDialog}
                      />
                    }
                  />
                  <Route path={CANDIDATE_SITE} component={CandidateMain} />
                  <Route path={RECRUITER_SITE} component={RecruiterMain} />
                  {redirect}
                </Switch>
                <Dialog
                  modal={true}
                  open={this.state.isOpenAskDialog}
                >
                  <Row>
                    <Col md={5} />
                    <Col md={2} >
                      <Checkbox
                        iconStyle={styles.icontCheckboxStyle}
                        inputStyle={styles.checkboxInputStyle}
                        checked={this.state.isCheckedHuman}
                        onCheck={this.handleToggleCheckbox}
                      />
                    </Col>
                    <Col md={5} />
                  </Row>
                  <Row>
                    <div style={styles.confirmLabelStyle}>
                      I'm not a robot
                    </div>
                  </Row>
                  <Row>
                    {goHomePageAction}
                  </Row>

                </Dialog>
              </div>
            </Router>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;