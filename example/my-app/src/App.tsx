import React from 'react';
import './App.css';
import { AThemeProvider } from 'avocado-ui'

function App() {
  return (
    <div className="App">
      <AThemeProvider children={null} />
        {/* <ThemeProvider>
          <h1>dashbd</h1>
        </ThemeProvider> */}
    </div>
  );
}

export default App;
