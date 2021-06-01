import "./App.css";
import RecipeShow from "./components/RecipeShow";
import RecipesList from "./components/RecipeList";

function App() {
  return (
    <div className="App">
      <RecipeShow />
      <RecipesList />
    </div>
  );
}

export default App;
