import SearchForm from "./components/Search/SearchForm";
import Favourites from "./pages/Favourites";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { FavouritesContextProvider } from './store/fav-context'
import Nav from "./components/layout/Nav"
import './styles/reset.css'
import './styles/general.css'
import Header from './components/layout/Header'

function App() {
  return (
    <FavouritesContextProvider>
    <Header />
      <BrowserRouter>
        <div>
          <Nav />

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