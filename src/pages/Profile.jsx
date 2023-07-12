import { setDocTitle } from "../service/function";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { modifyUser } from "../service/call";
import { profile } from "../service/profileSlice";

export default function Profile({ logo }) {
  setDocTitle("Argent Bank - Profile Page");
  const { value } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isEmpty = Object.keys(value);
  const storageFirstName = localStorage.getItem("userFirstName");
  const storageLastName = localStorage.getItem("userLastName");
  const storageToken = localStorage.getItem("token");
  let EditName = false

  useEffect(() => {
    if (isEmpty.length === 0) {
      if (storageFirstName === null && storageLastName === null) {
        navigate("/");
      }
    }
  });

  async function name(e) {
    e.preventDefault();
    if (EditName) {
      document.getElementsByClassName("edit-button")[0].removeAttribute("style");
      document.getElementsByClassName("edit-div")[0].style.display = "none";
      EditName = false
    } else {
      document.getElementsByClassName("edit-button")[0].style.display = "none";
      document.getElementsByClassName("edit-div")[0].style.display = "flex";
      EditName = true
    }
    
  }

  async function submitHandler(e) {
    e.preventDefault();
    const date = new Date()
    const modify = await modifyUser(token || storageToken,e.target[0].value, e.target[1].value, date.toJSON())

    if (modify === "Current user successfully changed") {

      document.getElementsByClassName("edit-button")[0].removeAttribute("style");
      document.getElementsByClassName("edit-div")[0].style.display = "none";
      dispatch(profile({ ...value, firstName: e.target[0].value, lastName: e.target[1].value, updatedAt: date.toJSON() }))
      if (storageFirstName && storageLastName) {
        localStorage.setItem("userFirstName", e.target[0].value);
        localStorage.setItem("userLastName", e.target[1].value);
      }
    } else {
      alert(modify);
    }
  }

  return (
    <>
      <Header logo={logo} />
      <main className="bg-dark">
        <div className="main">
          <div className="header">
            <h1>
              Welcome back
              <br />
              {value.firstName || storageFirstName}{" "}
              {value.lastName || storageLastName}!
            </h1>
            <form className="edit-div" onSubmit={submitHandler}>
              <label>Prénom</label>
              <input type="text" required/>
              <label>Nom</label>
              <input type="text" required/>
              <div className="edit-divBtn">
                <button type="submit">Modifier</button><button onClick={name}>Annuler</button>
              </div>
            </form>
            <button className="edit-button" onClick={name}>Edit Name</button>
          </div>
          <h2 className="sr-only">Accounts</h2>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Checking (x8349)</h3>
              <p className="account-amount">$2,082.79</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Savings (x6712)</h3>
              <p className="account-amount">$10,928.42</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
              <p className="account-amount">$184.30</p>
              <p className="account-amount-description">Current Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
