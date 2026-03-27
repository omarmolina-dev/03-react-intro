import { useState, useEffect } from "react";

function App() {
    const [rate, setRate] = useState(null);

    useEffect(() => {
        fetch("https://api.frankfurter.app/latest?from=USD&to=MXN")
            .then(res => res.json())
            .then(data => setRate(data.rates.MXN));
    }, []);

    return (
        <div>
            <h1>USD to MXN</h1>
            {rate ? <p>1 USD = {rate} MXN</p> : <p>Loading...</p>}
        </div>
    );
}

export default App;