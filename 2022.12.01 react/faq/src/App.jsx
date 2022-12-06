import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DivMaker from "./components/DivMaker";

function App() {
  return (
    <div className="holder">
      <div className="container">
        <div className="row bg-light shadow">
          <div className="col-md-4">
            <h3>Questions and Answers about LOGIN</h3>
          </div>
          <div className="col-md-8">
            <DivMaker />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
