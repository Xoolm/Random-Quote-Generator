import { useSelector } from "react-redux";
import "./style/app.css";
import "./style/quote.css";
import AddQuote from "./components/AddQuote/AddQuote";
import NextQuote from "./components/NextQuote/NextQuote";

function App() {
  const randomColor = useSelector((state) => state.toolkit.randomColor);

  return (
    <div
      style={{ background: randomColor, color: randomColor }}
      className="App"
    >
      <AddQuote />
      <NextQuote />
    </div>
  );
}

export default App;
