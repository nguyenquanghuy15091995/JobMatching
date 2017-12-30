import React from 'react';
import ReactTags from 'react-tag-autocomplete';
import { Container, Row, Col } from 'reactstrap';
import { RaisedButton, Card, CardText } from 'material-ui';
import { connect } from 'react-redux';
import axios from 'axios';
import unique from 'array-unique';

import Header from '../../components/Header';
import ToolbarRecruiter from '../../components/ToolbarRecruiter';
import AccountCardView from './AccountCardView';
import PdfCV from '../../components/PdfCV';

import { pushAutocompleteDataToListAction, pushSearchResultsAction } from './action';
import { autocompleteGetListRouter } from '../../../common/autocompleteAPI';
import { accountGetBySearchRouter } from '../../../common/accountAPI';

import './style.css';

const styles = {
  headerStyle: {
    position: 'fixed',
    width: '100%',
    zIndex: 1,
    boxShadow: '0px 5px 7px #888888',
  },
  headerSpace: {
    height: 170,
  },
  searchButtonArea: {
    marginTop: 10,
    width: '100%',
    textAlign: 'right',
  },
  searchButtonContainer: {
    minHeight: 45,
    minWidth: 150,
  },
  searchButtonStyle: {
    minWidth: 150,
    minHeight: 45,
    backgroundColor: '#00897B',
  },
  searchButtonLabel: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  spacingArea: {
    height: 30,
  },
  searchMessageStyle: {
    color: '#F44336',
    fontSize: 15,
    marginLeft: 10,
    width: '100%',
    textAlign: 'left',
  },
}

const mapStateToProps = (state) => {
  return {
    autocompletes: state.autocompletes,
    accountSearchResults: state.accountSearchResults,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    pushAutocompletesToList: (autocompletes) => dispatch(pushAutocompleteDataToListAction(autocompletes)),
    pushSearchResultsToList: (accountSearchResults) => dispatch(pushSearchResultsAction(accountSearchResults)),
  }
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

class RecruiterMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      suggestions: [],
      searchMessage: '',
      screenViews: [],
      isPdfFormOpen: false,
      currentIndex: 0,
    }
  }

  componentDidMount = () => {
    let propsTemps = [];
    axios.get(autocompleteGetListRouter())
      .then(function (response) {
        propsTemps = response.data.autocompletes;
      })
      .catch(function (error) {
        console.log(error);
      });
    sleep(2000).then(() => {
      let temps = [];
      this.props.pushAutocompletesToList(propsTemps);
      propsTemps.map(
        (autocomplete, i) => {
          temps.push({
            id: (i + 1),
            name: autocomplete.name,
          });
        }
      );
      this.setState({
        suggestions: temps,
      });
    });
  }

  handleDelete = (i) => {
    const tags = this.state.tags.slice(0);
    tags.splice(i, 1);
    this.setState({
      tags,
    });
  }

  handleAddition = (tag) => {
    const tags = unique([].concat(this.state.tags, tag));
    this.setState({
      searchMessage: '',
      tags,
    });
  }

  convertTagsToStringQuery = () => {
    let stringQuery = '';
    if (this.state.tags.length > 0) {
      stringQuery += this.state.tags[0].name;

      for (let i = 1; i < this.state.tags.length; i++) {
        stringQuery += `|${this.state.tags[i].name.toLowerCase()}`;
      }
    }
    return stringQuery;
  }

  handleSearchButtonClick = () => {
    let propsSearchTemps = [];
    if (this.state.tags.length === 0) {
      this.setState({
        searchMessage: '* Search field is required!',
      });
    }
    if (this.state.tags.length > 0) {
      axios.get(accountGetBySearchRouter(this.convertTagsToStringQuery()))
        .then(function (response) {
          propsSearchTemps = response.data.finalResults;
        })
        .catch(function (error) {
          console.log(error);
        });

      sleep(2000).then(() => {
        this.props.pushSearchResultsToList(propsSearchTemps);
        let screenViewTemps = [];
        propsSearchTemps.map(
          (searchTemp, i) => {
            screenViewTemps.push(
              <Col key={i} md={6}>
                <AccountCardView
                  ordinal={i}
                  account={searchTemp}
                  handleHideShowPdfForm={this.handleHideShowPdfForm}
                  getCurrentAccountIndex={this.getCurrentAccountIndex}
                />
              </Col>
            );
          }
        );
        this.setState({
          screenViews: screenViewTemps,
        });
      });
    }
  }

  handleHideShowPdfForm = () => {
    this.setState({
      isPdfFormOpen: !this.state.isPdfFormOpen,
    })
  }

  getCurrentAccountIndex = (index) => {
    this.setState({
      currentIndex: index,
    })
  }

  render() {
    console.log(this.props.accountSearchResults);
    return (
      <div>
        <div style={styles.headerStyle}>
          <Header title="Job Matching System" isNullElement={true} handleLeftButton={this.handleToggleDrawer} />
          <ToolbarRecruiter />
        </div>
        <div style={styles.headerSpace} />
        <Container>
          <Card>
            <CardText>
              <ReactTags
                autoresize={false}
                placeholder="Ex: Java, Teamwork or another keywords."
                tags={this.state.tags}
                suggestions={this.state.suggestions}
                handleDelete={this.handleDelete}
                handleAddition={this.handleAddition}
              />
              <div style={styles.searchButtonArea}>
                <div style={styles.searchMessageStyle}>
                  {this.state.searchMessage}
                </div>
                <RaisedButton
                  label="Search"
                  style={styles.searchButtonContainer}
                  buttonStyle={styles.searchButtonStyle}
                  labelStyle={styles.searchButtonLabel}
                  onClick={this.handleSearchButtonClick}
                />
              </div>
            </CardText>
          </Card>
          <div style={styles.spacingArea} />
          <Card style={{ backgroundColor: '#FAFAFA' }}>
            <Container fluid>
              <CardText>
                <Row>
                  {this.state.screenViews.map(
                    (screenView, i) => screenView
                  )}
                </Row>
              </CardText>
            </Container>
          </Card>
        </Container>

        <PdfCV 
          account={this.props.accountSearchResults[this.state.currentIndex]}
          isPdfFormOpen={this.state.isPdfFormOpen}
          handleHideShowPdfForm={this.handleHideShowPdfForm}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterMain);