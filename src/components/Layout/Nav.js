import { Link } from "react-router-dom"
import styles from '../../styles/Nav.module.css'

function Nav () {
    return (
        <nav>
        <ul className={styles.nav}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
      </nav>
    )
}

export default Nav