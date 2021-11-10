import Navbar from './navbar';
import Home from './home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
        <div className="content">
          <Switch>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
