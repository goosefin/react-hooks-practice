import './App.css';
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvent';
import FunctionalCounter from './components/FunctionalCounter';
import ConditionalComponent from './components/ConditionalComponent';
import Product from './components/Product';
import Form from './components/Form'

function App() {
  return (
    <div className="App">
    {/* <Profile name='Goose' lastName='Fin'/> */}
    {/* <Message messageContent='This is a message from props'/> */}
    {/* <Counter/> */}
    {/* <Resume name="Goose"/> */}
    {/* <FunctionEvent/> */}
    {/* <FunctionalCounter/> */}
    {/* <ConditionalComponent/> */}
    {/* <Product/> */}
    <Form/>
    </div>
  );
}

export default App;
