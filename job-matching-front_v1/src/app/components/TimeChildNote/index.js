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

  render() {
    return (
      <div>
        <Table selectable={false}  >
          <TableBody displayRowCheckbox={false}>
            {this.props.childNotes.map(
              (childNote, i) => (
                <TableRow key={i} >
                  <TableRowColumn style={styles.rowColumnTitle} >
                    <CaptionText value={childNote.title} />
                  </TableRowColumn>
                  <TableRowColumn style={styles.rowColumnContent} >
                    <div><br/>
                      <TimeText
                        startDate={childNote.startDate}
                        endDate={childNote.endDate}
                      />
                    </div>
                    {childNote.value.split("\n").map(
                      (text, j) => {
                        return <div key={j}><ContentText value={text} /></div>;
                      }
                    )}
                  </TableRowColumn>
                </TableRow>

              ))
            }
          </TableBody>
        </Table>
      </div>
    );
  }
}

TimeChildNote.propTypes = {
  childNotes: PropTypes.array,
}

export default TimeChildNote;