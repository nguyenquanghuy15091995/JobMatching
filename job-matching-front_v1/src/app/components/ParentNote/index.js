import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardHeader, CardTitle, CardText, FloatingActionButton, TextField } from 'material-ui';

import NonTimeChildNote from '../NonTimeChildNote';
import TimeChildNote from '../TimeChildNote';

const styles = {
  headTitle: {
    fontWeight: 'bold',
    fontSize: 25
  }
}

class ParentNote extends React.Component {

  constructor(props) {
    super(props);
  }

  render = () => {
    
    return (
      <div>
        <Card>

          <CardTitle
            title={this.props.parentNote.title.toUpperCase()}
            titleStyle={styles.headTitle}
          />

          <CardText>
            {
              this.props.parentNote.childNotes.map(
                (childNote, i) => {
                  if (this.props.parentNote.parentType === 'time') {
                    return (
                      <div key={i}>
                        <TimeChildNote ordinal={i} childNote={childNote} />
                      </div>
                    )
                  }
                  else {
                    return (
                      <div key={i}>
                        <NonTimeChildNote ordinal={i} childNote={childNote} />
                      </div>
                    )
                  }
                }
              )
            }
          </CardText>

          <CardActions>

          </CardActions>
        </Card>
      </div>
    );
  }
}

ParentNote.propTypes = {
  parentNote: PropTypes.object,
  ordinal: PropTypes.number
}

export default ParentNote;