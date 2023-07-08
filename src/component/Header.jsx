import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { isRemember, removeToken } from "../service/loginSlice";

export default function Header({ logo }) {
  const {token,error,remember} = useSelector(state => state.login);
  const {value} = useSelector(state => state.profile);
  const storage = localStorage.getItem("token");
  const storageFirstName = localStorage.getItem("userFirstName");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(token, error, remember, storage)

  async function signOut() {
    dispatch(removeToken());
    localStorage.removeItem("token");
    localStorage.removeItem("userFirstName");
    localStorage.removeItem("userLastName");
    dispatch(isRemember(false));
    navigate("/");
  }

  if (token === "" && storage === null) {
    return (
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
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
  } else {
    return (
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="/profile">
            <FontAwesomeIcon className="iconUser" icon={faUserCircle} />
            {value.firstName || storageFirstName}
          </Link>
          <Link className="main-nav-item" to="/" onClick={signOut}>
            <FontAwesomeIcon className="iconUser" icon={faSignOut} />
            Sign Out
          </Link>
        </div>
      </nav>
    );
  }
}
