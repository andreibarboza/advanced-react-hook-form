import './App.css'
import { Provider } from 'react-redux'
import store from './store/app';
import Contacts from './screens/Contacts';

function App() {
  return (
    <Provider store={store}>
      <Contacts />
    </Provider>
  )
}

export default App
