import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { getUserProfile } from "../service/call";
import { useSelector } from "react-redux";


export default function Header({ logo }) {
  const token = getUserProfile(localStorage.getItem("token"))

  if (token === "token received") {
    console.log(token)
    return (
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
        <Link className="main-nav-item" to="/profile">
        <FontAwesomeIcon className="iconUser" icon={faUserCircle} />
          Tony
        </Link>
          <Link className="main-nav-item" to="/">
          <FontAwesomeIcon className="iconUser" icon={faSignOut} />
            Sign Out
          </Link>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="/login">
            <FontAwesomeIcon className="iconUser" icon={faUserCircle} />
            Sign In
          </Link>
        </div>
      </nav>
    );
  }
}
