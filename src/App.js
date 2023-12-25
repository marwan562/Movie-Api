import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import WatchList from './Header/WatchList/WatchList';
import Add from './Header/Add/Add';
import Watched from './Header/Watched/Watched';
import ContextProvider from './Context/GlobalContext';

function App() {
  return (
    <Router>
      <ContextProvider>
          <Header/>
          <Routes>
            <Route path='/'  element={<WatchList/>}/>
            <Route path='watched' element={<Watched/>}/>
            <Route path='add' element={<Add/>}/>
          </Routes>
      </ContextProvider>
    </Router>
  );
}

export default App;
