import { useState, useEffect } from "react";
import UserCard from "./Card";
import "./App.css";

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

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase()));

    if (loading) return <p>Loading users...</p>;

    return (
        <div className="app">
            <h1>Users</h1>
            <input className = "search-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search users..."
            />
            <div className="users-grid">
                {filteredUsers.map(user => (
                    <UserCard key={user.id} name={user.name} email={user.email} />
                ))}
            </div>
        </div>
    );
}

export default App;