import './App.css';
import Body from './Components/Body';
import appstore from './Utils/AppStore';
import { Provider } from 'react-redux';

function App() {
  return (
    <div>
      <Provider store={appstore}>
      <Body />
      </Provider>
    </div>
  );
}

export default App;
