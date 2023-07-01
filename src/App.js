import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./assets/img/argentBankLogo.png";
import iconChat from "./assets/img/icon-chat.png";
import iconMoney from "./assets/img/icon-money.png";
import iconSecurity from "./assets/img/icon-security.png";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                logo={logo}
                chat={iconChat}
                money={iconMoney}
                security={iconSecurity}
              />
            }
          />
          <Route path="/login" element={<Connexion />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
