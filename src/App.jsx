import Card from "./Card";
import "./App.css";

function App() {
  const name = "Omar";
  const age = 22;
  const city = "Hermosillo";
  return (
    <div>
      <Card name="Omar" age={22} city="Hermosillo" />
      <Card name="Sofia" age={24} city="Hermosillo" />
      <Card name="Luis" age={23} city="Hermosillo" />
    </div>
  );
}

export default App;