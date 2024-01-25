import './App.css'
import { CharacterSelectUI } from './components/CharacterSelect'
import { LoadingScreen } from './components/LoadingScreen'

function App() {
  return (
    <>
        {/*<LoadingScreen />*/}  
        <div className='mainHeader'>
            <h1>Yet Another Arknights Randomizer</h1>
            <p>Created by Moonlite-S</p>
        </div>
        <CharacterSelectUI />
    </>
  )
}

export default App
