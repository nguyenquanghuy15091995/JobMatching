import React from 'react';
import { MuiThemeProvider } from 'material-ui';
import LoginForm from './containers/login-form';
import CurriculumVitae from './containers/candidate-curriculum-vitae';

const App = () => {
  return (
    <div style={{margin:0, display:"relative"}}>
      <MuiThemeProvider>
        <div >
          
          <CurriculumVitae />
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default App;