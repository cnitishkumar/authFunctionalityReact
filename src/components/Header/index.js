import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav>
    <ul className="ul-el">
      <li className="li-el">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          about
        </Link>
      </li>
    </ul>
  </nav>
)

export default withRouter(Header)
