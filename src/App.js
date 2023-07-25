import './App.css';
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvent';

function App() {
  return (
    <div className="App">
    {/* <Profile name='Goose' lastName='Fin'/> */}
    {/* <Message messageContent='This is a message from props'/> */}
    <Counter/>
    {/* <Resume name="Goose"/> */}
    {/* <FunctionEvent/> */}
    </div>
  );
}

export default App;
