import React from 'react';
import { MuiThemeProvider } from 'material-ui';
import LoginForm from './containers/LoginForm';
import CandidateMain from './containers/CandidateMain';

const App = () => {
  return (
    <div>
      <MuiThemeProvider>
        <div>
          <CandidateMain />
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default App;