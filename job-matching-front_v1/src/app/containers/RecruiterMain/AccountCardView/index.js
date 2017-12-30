import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText, CardActions, Table, TableBody, TableRowColumn, TableRow, Avatar, FlatButton } from 'material-ui';

import UserIcon from 'material-ui/svg-icons/action/account-circle';

const styles = {
  accountCardViewContainer: {
    marginBottom: 15,
    marginTop: 15,
  },
  cardHeadTitle: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 11,
  },
  cardHeadSubTitle: {
    fontSize: 20,
  },
};

class AccountCardView extends React.Component {
  constructor(props) {
    super(props);
  }

  handleShowDetailButtonClick = () => {
    this.props.handleHideShowPdfForm();
    this.props.getCurrentAccountIndex(this.props.ordinal);
  }

  render() {
    const account = this.props.account;
    return (
      <div style={styles.accountCardViewContainer}>
        <Card>
          <CardHeader
            title={account.person.name}
            subtitle={account.person.email}
            avatar={<Avatar icon={<UserIcon />} size={90} />}
            titleStyle={styles.cardHeadTitle}
            subtitleStyle={styles.cardHeadSubTitle}
          />
          <CardText>
            <Table>
              <TableBody displayRowCheckbox={false} selectable={false}>
                <TableRow>
                  <TableRowColumn><strong>ID Code</strong></TableRowColumn>
                  <TableRowColumn>{account.person.personCode}</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn><strong>Date of Birth</strong></TableRowColumn>
                  <TableRowColumn>{account.person.dateOfBirth}</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn><strong>Phone Number</strong></TableRowColumn>
                  <TableRowColumn>{account.person.phoneNumber}</TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>
          </CardText>
          <CardActions style={{ textAlign: 'right' }}>
            <FlatButton
              label="Show details"
              labelStyle={{ fontWeight: 'bold', color: '#00796B' }}
              onClick={this.handleShowDetailButtonClick}
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}

AccountCardView.propTypes = {
  account: PropTypes.object,
  handleHideShowPdfForm: PropTypes.func,
  getCurrentAccountIndex: PropTypes.func,
  ordinal: PropTypes.number,
};

export default AccountCardView;
