'use strict';
import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { TextField, RaisedButton, Paper, List, ListItem, AppBar } from 'material-ui';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const LoginForm = () => {
  return (
    <div>
      <AppBar iconElementLeft={<i/>} />
      <form>
        <List>
          <ListItem disabled />
          <Container>
            <Row>
              <Col md="3" />
              <Col md="6" xs="12" sm="12">
                <ListItem disabled style={{fontWeight:"bold",fontSize:"40px",color:"#00BCD4",textAlign:"center"}} >
                  Job Matching System
                </ListItem>
                <ListItem disabled />
                <Paper style={{ margin: "0 auto" }}>
                  <ListItem primaryText="Login" style={{ fontWeight: "bold", fontSize: "20px", color: "#FFFFFF", backgroundColor: "#00BCD4" }} disabled />
                  <ListItem disabled>
                    <TextField
                      fullWidth={true}
                      hintText="Enter your Username"
                      floatingLabelText="Username"
                      style={{ margin: "0 auto" }}
                    />
                    <br /><br />
                    <TextField
                      fullWidth={true}
                      hintText="Enter your Password"
                      floatingLabelText="Password"
                      type="password"
                    />

                    <RaisedButton style={{ marginTop: "25px" }} fullWidth={true} label="Login" primary={true} />
                  </ListItem>
                </Paper>
              </Col>
              <Col md="3" />
            </Row>
          </Container>
        </List>
      </form>
    </div>
  );
}

export default LoginForm;