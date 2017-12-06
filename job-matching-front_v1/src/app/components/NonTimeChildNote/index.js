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

class NonTimeChildNote extends React.Component {
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

NonTimeChildNote.propTypes = {
  childNote: PropTypes.object
}

export default NonTimeChildNote;