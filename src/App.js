import './index.css';
import {uploadTask} from './firebase-config'
function App() {
  return (
    <div className="App">
      <button onClick={uploadTask}>Upload file</button>
    </div>
  );
}

export default App;
