import React from "react";
import ReactDOM from "react-dom";
import { Button, ThemeProvider } from 'avocado-ui';

function App() {
  return (
    <div>
      <ThemeProvider>
        <Button>asdasd</Button>
      </ThemeProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));