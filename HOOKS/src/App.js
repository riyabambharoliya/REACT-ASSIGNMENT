import { Provider } from 'react-redux';
import './App.css';
import Task1 from './hooks-components/Task1';
import Task2 from './hooks-components/Task2';
import Task3, { store } from './hooks-components/Task3';
import Task4 from './hooks-components/Task4';

function App() {
  return (
    <div>
     {/* <Task1/> */}
     {/* <Task2/> */}
    
     {/* <Provider store={store}> <Task3 /></Provider> */}
    <Task4></Task4>
    </div>
  );
}

export default App;
