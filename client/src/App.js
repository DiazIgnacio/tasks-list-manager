import axios from 'axios';

import './css/App.css';

const API_URL = process.env.API_URL || 'http://localhost:8000';

function App() {
  const testFetchHandler = () => {
    axios(`${API_URL}/api/test`)
      .then((response) => response.data)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={testFetchHandler}>Test Fetch</button>
      </header>
    </div>
  );
}

export default App;
