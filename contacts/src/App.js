import Contacts from "./components/Contacts";
import Header from "./components/Header";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header branding="Contact Manager" />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
