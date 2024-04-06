import Board from './components/board';
import { Header } from './components/header/header';
import './App.css';

function App() {

  return (
    <div className='flex flex-col h-[100vh]'>
      <Header />
      <Board />
    </div>
  )
}

export default App
