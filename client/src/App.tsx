import './App.css'
import Board from './components/board'
import { Header } from './components/header/header'

function App() {

  return (
    <div className='flex flex-col h-[100vh]'>
       <Header/>
       <Board/>
    </div>
  )
}

export default App
