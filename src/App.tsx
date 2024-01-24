import './App.css'
import { CharacterSelectUI } from './components/CharacterSelect'
import { LoadingScreen } from './components/LoadingScreen'

function App() {

  return (
    <>
        <div className="mainHeader">
            <h1>Yet Another Arknights Randomizer</h1>
            <h6>Created by Moonlite-S</h6>
            <hr />
            <h2>How to use: <br />
            - Select Operators (All on by default) <br />
            - Select Maps (Only Global events are available) <br />
            - Modify Rules (True Random, Draft, or Roguelike)
            </h2>
        </div>
        <LoadingScreen />  
        {/*CharacterSelectUI />*/}
    </>
  )
}

export default App
