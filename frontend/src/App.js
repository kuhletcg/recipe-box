import "./App.css";
import RecipeForm from "./components/RecipeForm";
import RecipesList from "./components/RecipeList";

function App() {
  return (
    <div className="App">
      <RecipeForm />
      <RecipesList />
    </div>
  );
}

export default App;
