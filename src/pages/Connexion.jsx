import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { setDocTitle } from "../service/function";

export default function Connexion({ logo }) {
  setDocTitle('Argent Bank - Connexion Page')
  return (
    <>
      <Header logo={logo} />
      <main className="bg-dark">
        <div className="main">
          <section className="sign-in-content">
            <FontAwesomeIcon className="sign-in-icon" icon={faUserCircle} />
            <h1>Sign In</h1>
            <form>
              <div className="input-wrapper">
                <label>Username</label>
                <input type="text" id="username" />
              </div>
              <div className="input-wrapper">
                <label>Password</label
                ><input type="password" id="password" />
              </div>
              <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label>Remember me</label
                >
              </div>
              <Link to="/user" className="sign-in-button">Sign In</Link>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}