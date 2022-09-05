
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Loading from './component/Loading/Loading';


function App() {
  return (
    <BrowserRouter>
      <Loading/>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
