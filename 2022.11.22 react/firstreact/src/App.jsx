import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Counter} from './components/Counter'
import Login from './components/Login';

function App() {
  return (
    <div className='container p-5'>
      <h1 className='border-bottom border-info text-center'>My First React App</h1>
      <Counter />
      <Login />
    </div>
  );
}

export default App;
