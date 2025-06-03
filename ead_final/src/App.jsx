import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TrafficLightSimulator from './components/TrafficLightSimulator';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div><h2>Traffic Light Simulator</h2>
          <TrafficLightSimulator />
    </div>
    </>
  )
}

export default App
