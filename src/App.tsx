import { Provider } from 'react-redux';
import store from './store/app';
import Contacts from './screens/Contacts';

function App() {
  return (
    <div className="content">
      <Provider store={store}>
        <Contacts />
      </Provider>
    </div>
  );
}

export default App;
