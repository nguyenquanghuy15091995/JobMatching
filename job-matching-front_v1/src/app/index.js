import React from 'react';
import { MuiThemeProvider } from 'material-ui';
import LoginForm from './containers/LoginForm';
import CandidateLayout from './containers/CandidateLayout';

const styles = {
  backColor: {
    backgroundColor: '#EEEEEE',
  }
}

const App = () => {
  return (
    <div>
      <MuiThemeProvider>
        <div style={styles.backColor}>
          <CandidateLayout />
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default App;