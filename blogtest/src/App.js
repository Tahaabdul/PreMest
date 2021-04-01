import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import Login from './Login';
import Signup from './Signup';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <div className="content">
          <Switch>
            <Route path="/create">
              <Create isLoggedIn={isLoggedIn}/>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
            </Route>
            <Route exact path="/signup">
              <Signup setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
