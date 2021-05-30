import Contacts from "./components/Contacts";
import Header from "./components/Header";
import "./App.css";
import { ContextProvider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <div className="container">
          <Header branding="Contact Manager" />
          <Contacts />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
