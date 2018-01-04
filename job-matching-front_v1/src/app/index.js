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
import { connect } from 'react-redux';

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

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => (
  <Route {...rest} render={props => (
    loggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to={{
          pathname: LOGIN_SITE,
          state: { from: props.location }
        }} />
      )
  )} />
)

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <Router>
              <div>
                <Switch>
                  <Route
                    path={LOGIN_SITE}
                    component={LoginForm}
                  />

                  <PrivateRoute
                    path={RECRUITER_SITE}
                    loggedIn={isLoggedIn}
                    component={RecruiterMain}
                  />

                  <PrivateRoute
                    path={CANDIDATE_SITE}
                    loggedIn={isLoggedIn}
                    component={CandidateMain}
                  />

                  <Redirect from="/" to={LOGIN_SITE} />

                </Switch>
              </div>
            </Router>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
}

export default connect(mapStateToProps)(App);