
import Nav from "./components/Nav/Nav";
import "./App.css";
import { useSearch } from "./components/Context/SearchContext";
import SearchResults from "./components/SearchResults/SearchResults";
import HomePage from "./components/main/HomePage";

function App() {
  const { flag } = useSearch();
  return (
    <>
      <div className="App">
        <div><Nav /></div>
        <div className="main-content">
        {flag ? <SearchResults/> : <HomePage/>}
        </div>
        
      </div>
    </>
  );
}

export default App;
