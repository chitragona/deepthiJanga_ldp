import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterUseEffect from './components/HookCounterUseEffect';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer'
import DataFetching from './components/DataFetching';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman" /> */}
        
        {/* <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
         <Welcome name="Diana" heroName="Wonder Woman" /> */}

          {/* <Message message='Welcome Visitor' />
          <Message message='Welcome Guest' />   */}

        {/* <ClassCounter /> 

        <HookCounter />

        <HookCounterTwo />

        <HookCounterThree />

        <HookCounterFour /> 

        <HookCounterUseEffect />

        <HookMouse />

        <MouseContainer />*/}

        <DataFetching />
    </div>
  );
}

export default App;
