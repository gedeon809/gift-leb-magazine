import TopBar from './components/topbar/TopBar';
import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const user = false;
  return (
    <div className="container">
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" exact element={<Homepage />}></Route>
          <Route
            path="/register"
            element={user ? <Homepage /> : <Register />}
          ></Route>
          <Route
            path="/login"
            element={user ? <Homepage /> : <Login />}
          ></Route>
          <Route
            path="/write"
            element={user ? <Write /> : <Register />}
          ></Route>
          <Route
            path="/settings"
            element={user ? <Settings /> : <Register />}
          ></Route>
          <Route path="/post/:postId" element={<Single />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
