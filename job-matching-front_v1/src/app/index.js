import React from 'react';
import { MuiThemeProvider } from 'material-ui';
import LoginForm from './containers/LoginForm';
import CandidateLayout from './containers/CandidateLayout';

const App = () => {
  return (
    <div>
      <MuiThemeProvider>
        <div>
          <CandidateLayout />
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default App;