import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui';

class NonTimeChildNote extends React.Component {
  render = () => {
    return (
      <div>
        <Table selectable={false}>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>
                {this.props.childNote.title}
              </TableRowColumn>
              <TableRowColumn>
                {this.props.childNote.value.split("\n").map(
                  (text, i) => {
                    return <div key={i}>{text}</div>;
                  }
                )}
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

NonTimeChildNote.propTypes = {
  childNote: PropTypes.object
}

export default NonTimeChildNote;