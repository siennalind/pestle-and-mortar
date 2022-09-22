import SearchForm from "./components/Search/SearchForm";
import Favourites from "./pages/Favourites";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { FavouritesContextProvider } from './store/fav-context'

function App() {
  return (
    <FavouritesContextProvider>
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

          <Routes>
            <Route path="/" element={<SearchForm />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </div>
      </BrowserRouter>
    </FavouritesContextProvider>
    )
}

export default App;