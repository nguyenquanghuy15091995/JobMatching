import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
  Divider,
} from 'material-ui';

import CaptionText from '../CaptionText';
import ContentText from '../ContentText';
import TimeText from '../TimeText';

const styles = {
  rowColumnTitle: {
    wordWrap: 'normal',
    whiteSpace: 'normal',
  },
  rowColumnContent: {
    wordWrap: 'break-word',
    whiteSpace: 'normal',
    width: '70%',
  },
  devider: {
    margin: 10,
  }
}

class TimeChildNote extends React.Component {

  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div>
        <Table selectable={false}  >
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn style={styles.rowColumnTitle} >
                <CaptionText value={this.props.childNote.title} />
              </TableRowColumn>
              <TableRowColumn style={styles.rowColumnContent} >
                <div>
                  <TimeText 
                    startDate={this.props.childNote.startDate}
                    endDate={this.props.childNote.endDate} 
                  />
                </div>
                {this.props.childNote.value.split("\n").map(
                  (text, i) => {
                    return <div key={i}><ContentText value={text} /></div>;
                  }
                )}
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
        <Divider style={styles.devider} />
      </div>
    );
  }
}

TimeChildNote.propTypes = {
  childNote: PropTypes.object,
}

export default TimeChildNote;