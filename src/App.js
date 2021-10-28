import './App.css';
import { Button } from '@my-scope/test.ui.button'
import { Card } from '@my-scope/test.ui.card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button text="Hello From OAT1" importance="primary"/>
        <br/>
        <Card text="Hello From OAT2" importance="secondary"/>
      </header>
    </div>
  );
}

export default App;
