import './App.css';
import react from 'react';
import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation' 

function App() {
  return (
  <div className="App">
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <Sidebar/>
        </div>
        <div className="col-lg-9 app_main">
        <Navigation/>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
