import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { setDocTitle } from "../service/function";
import { getUserProfile, postFormData } from "../service/call";
import { useDispatch, useSelector } from "react-redux";
import { addError, addToken, removeError, isRemember } from "../service/loginSlice";
import { profile } from "../service/profileSlice";
import { useEffect } from "react";

export default function Connexion({ logo }) {
  setDocTitle("Argent Bank - Connexion Page");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.login);
  const storage = localStorage.getItem("token");

  async function handleSubmit(e) {
    e.preventDefault();
    const inputEmail = e.target[0].value;
    const inputPassword = e.target[1].value;
    const remember = e.target[2].checked;
    const data = await postFormData(inputEmail, inputPassword);

    if (data.err === "error") {
      dispatch(addError(data.message));
      alert(data.message)
    } else {
      const getProfile = await getUserProfile(data)
      if (remember === true) {
        localStorage.setItem("token", data);
        localStorage.setItem("userFirstName", getProfile.firstName);
        localStorage.setItem("userLastName", getProfile.lastName);

        dispatch(addToken(data));
        dispatch(profile(getProfile));
        dispatch(isRemember(remember));
        dispatch(removeError());
      } else {
        dispatch(addToken(data));
        dispatch(profile(getProfile));
        dispatch(removeError());
      }
    }
  }

  useEffect(() => {
    if (token || storage) {
      navigate("/");
    }
  });

  return (
    <>
      <Header logo={logo} />
      <main className="bg-dark">
        <div className="main">
          <section className="sign-in-content">
            <FontAwesomeIcon className="sign-in-icon" icon={faUserCircle} />
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <label>Username</label>
                <input type="text" id="username" />
              </div>
              <div className="input-wrapper">
                <label>Password</label>
                <input type="password" id="password" />
              </div>
              <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label>Remember me</label>
              </div>
              <button type="submit" className="sign-in-button" id="Sign-In">
                Sign In
              </button>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
