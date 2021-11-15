import "./App.css";
import { useState } from "react";

import RestrictedPage from "./components/RestrictedPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = "Rômulo";

  const Login = () => {
    setIsLoggedIn(true);
  };

  const Logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <RestrictedPage
          user={user}
          Login={Login}
          Logout={Logout}
          isLoggedIn={isLoggedIn}
        />
      </header>
    </div>
  );
}

export default App;
