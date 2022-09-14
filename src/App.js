import SearchForm from "./components/Search/SearchForm";
import FavouritesPage from "./components/FavouritesPage";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/favourites">Favourites</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/" element={<SearchForm />} />
            <Route path="/favourites" element={<FavouritesPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
}

export default App;