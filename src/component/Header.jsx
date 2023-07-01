import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function Header({ logo }) {
  return (
    <nav class="main-nav">
      <Link class="main-nav-logo" to="/">
        <img class="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link class="main-nav-item" to="/login">
          <FontAwesomeIcon icon={faUserCircle} />
          Sign In
        </Link>
      </div>
    </nav>
  );
}
