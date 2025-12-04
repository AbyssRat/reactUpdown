import { useState, useEffect } from 'react'
import CountCard from './components/CountCard'
import './index.css'

function App() {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        document.title = `Count: ${count}`
    }, [count])
    
    return (
        <div>
        <h1>számolj vro: {count}</h1>
        <button onClick={() => setCount(count + 1)}>több :3</button>
        
        <button onClick={() => setCount(count - 1)}>kevesebb :3</button>
        </div>
    )

  
}

export default App
