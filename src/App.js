import './App.css';
import CardBox from './component/Card';

function App() {
  return (
    <div className="App main-area">
      <div className="container mt-30">
        <div className="row">
          <div className="col-12">
            <h3>Card Component</h3>
            <p className="top-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <CardBox />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <CardBox />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <CardBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
