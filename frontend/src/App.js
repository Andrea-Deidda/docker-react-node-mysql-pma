import './App.css';
import { Fragment } from 'react';
import SignUpComponent from './components/SignUpComponent';
import LogInComponent from './components/LogInComponent';
import HomeComponent from './components/HomeComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
    return (
      <Fragment>
        <Router>
          <Fragment>
            <Routes>
              <Route path="/login" element={<LogInComponent />} />
              <Route path="/signup" element={<SignUpComponent />} />
              <Route path="/home" element={<HomeComponent />} />
              <Route path="/" element={<SignUpComponent />} />
            </Routes>
          </Fragment>
        </Router>
    </Fragment>
    );
  }

export default App;
