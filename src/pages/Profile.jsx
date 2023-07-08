import { setDocTitle } from "../service/function";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Profile({ logo }) {
  setDocTitle("Argent Bank - Profile Page");
  const { value } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const isEmpty = Object.keys(value);
  const storageFirstName = localStorage.getItem("userFirstName");
  const storageLastName = localStorage.getItem("userLastName");

  useEffect(() => {
    if (isEmpty.length === 0) {
      if (storageFirstName === null && storageLastName === null) {
        navigate("/");
      }
    }
  });
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
            <button className="edit-button">Edit Name</button>
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
