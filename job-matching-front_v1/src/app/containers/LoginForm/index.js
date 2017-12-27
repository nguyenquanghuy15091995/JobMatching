import React from 'react';
import { TextField, RaisedButton, Paper, List, ListItem, AppBar } from 'material-ui';
import { Container, Row, Col } from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import CircularProgress from 'material-ui/CircularProgress';
import { SubmissionError } from 'redux-form';
import axios from 'axios';
import { connect } from 'react-redux';

import { loginAction } from './action';
import { loadUserDatabaseAction } from '../../action';
import { CANDIDATE_SITE, RECRUITER_SITE } from '../../../common/link';
import { accountGetByIdRouter } from '../../../common/accountAPI';

const styles = {

  textUnderline: {
    borderColor: '#4DB6AC',
  },
  textFloatLabel: {
    color: '#00897B',
  },
  textFloatLabelFocus: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  paperStyle: {
    margin: '0 auto',
  },
  appbarStyle: {
    backgroundColor: '#00897B',
  },
  listItemTitle: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#00897B',
    textAlign: 'center',
  },
  listItemContentHead: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF',
    backgroundColor: '#00897B',
  },
  loginButtonContainer: {
    marginTop: 30,
    height: 50,
  },
  loginButtonStyle: {
    backgroundColor: '#00897B',
    height: 50,
  },
  loginButtonLabel: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  loginButtonDisableBackground: {
    backgroundColor: '#CCCCCC',
    height: 50,
  },
  loginButtonDisableLabel: {
    color: '6F6F6F',
    fontWeight: 'bold',
    fontSize: 20,
  },
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const validate = (values) => {
  const errors = {}
  const requiredFields = [
    'username',
    'password',
  ]
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  })

  return errors;
}

const renderTextField = ({ input, label, hint, meta: { touched, error }, ...custom }) => (
  <TextField
    fullWidth={true}
    hintText={hint}
    floatingLabelText={label}
    errorText={touched && error}
    floatingLabelFocusStyle={styles.textFloatLabelFocus}
    floatingLabelStyle={styles.textFloatLabel}
    underlineFocusStyle={styles.textUnderline}
    {...input}
    {...custom}
  />
);

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    doLogin: () => dispatch(loginAction()),
    loadDataToUserState: (data) => dispatch(loadUserDatabaseAction(data)),
  };
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenAskDialog: false,
      isCheckedHuman: false,
    };
  }

  handleShowHideAskDialog = () => {
    this.setState({
      isOpenAskDialog: !this.state.isOpenAskDialog,
    });
  }

  submit = (values) => {
    let account = null;
    axios.get(accountGetByIdRouter(values.username))
      .then(function (response) {
        account = response.data.account;
      })
      .catch(function (error) {
        console.log(error);
      });
    return sleep(1000).then(() => {

      if (account === null) {
        throw new SubmissionError({
          username: 'Username is not valid!',
        });
      } else {
        if (values.password !== account.password) {
          throw new SubmissionError({
            password: 'Wrong password!',
          });
        } else {

          this.props.doLogin();
          this.props.loadDataToUserState(account);
          if (account.role === 'CANDIDATE') {
            this.props.handleChangeRedirect(CANDIDATE_SITE);
          } else if (account.role === 'RECRUITER') {
            this.props.handleChangeRedirect(RECRUITER_SITE);
          }
          this.props.handleShowHideAskDialog();
        }
      }
    });
  }

  render() {
    const { submitting, pristine, invalid } = this.props;
    let propressAnimation = <div />;
    if (submitting) {
      propressAnimation = <div style={{ width: '100%', textAlign: 'center' }}>
        <CircularProgress color="#00897B" size={80} thickness={7} />
      </div>;
    }
    return (
      <div>
        <AppBar iconElementLeft={<i />} style={styles.appbarStyle} />
        <form>
          <List>
            <ListItem disabled />
            <Container>
              <Row>
                <Col md="3" />
                <Col md="6" xs="12" sm="12">
                  <ListItem disabled style={styles.listItemTitle} >
                    Job Matching System
                  </ListItem>
                  <ListItem disabled />
                  <Paper style={styles.paperStyle}>
                    <ListItem primaryText="Login" style={styles.listItemContentHead} disabled />
                    <ListItem disabled>

                      <Field
                        name="username"
                        component={renderTextField}
                        hint="Enter your Username"
                        label="Username"
                      />
                      <br /><br />
                      <Field
                        name="password"
                        component={renderTextField}
                        type="password"
                        hint="Enter your Password"
                        label="Password"
                      />

                      <RaisedButton
                        disabled={submitting || pristine || invalid}
                        onClick={this.props.handleSubmit(this.submit)}
                        labelStyle={
                          (submitting || pristine || invalid) ? styles.loginButtonDisableLabel : styles.loginButtonLabel
                        }
                        buttonStyle={
                          (submitting || pristine || invalid) ? styles.loginButtonDisableBackground : styles.loginButtonStyle
                        }
                        style={styles.loginButtonContainer}
                        disabledBackgroundColor="#CCCCCC"
                        disabledLabelColor="#6F6F6F"
                        fullWidth={true}
                        label="Submit"
                      />

                    </ListItem>
                  </Paper>
                  <ListItem disabled />
                  <ListItem disabled>
                    {propressAnimation}
                  </ListItem>
                </Col>
                <Col md="3" />
              </Row>
            </Container>
          </List>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'LoginForm',
  validate
})(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
