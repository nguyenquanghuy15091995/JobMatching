'use strict';
import React from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText, FloatingActionButton, TextField } from 'material-ui';

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
            title={
              <TextField
                hintText="Title"
                inputStyle={styles.headTitle}
                hintStyle={styles.headTitle}
              />
            }
          />
          <CardText>
            
          </CardText>
         
          <CardActions>

          </CardActions>
        </Card>
      </div>
    );
  }
}

export default ParentNote;