import './App.css';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Main />
      </header>
    </div>
  );
}

export default App;
