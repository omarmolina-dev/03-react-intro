import { useState, useEffect } from "react";

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            });
    }, []);

    <input value={search} onChange={(e) => setSearch(e.target.value)} />

    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(search.toLowerCase()));
   
    if (loading) return <p>Loading users...</p>;

    return (
        <div>
            <h1>Users</h1>
            <input 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search user..." />
            {filteredUsers.map(user => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );

}

export default App;