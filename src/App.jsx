import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Omar");

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(0)}>Reset</button>
            
            <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>Hello, {name}!</p>
        </div>
    );
}

export default App;