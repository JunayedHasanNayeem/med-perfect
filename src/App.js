import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import Header from './Components/Shared/Header/Header';
import AuthProvider from './AuthProvider/AuthProvider';
import SignIn from './Components/SignIn/SignIn';
import PrivateRoute from './Components/SignIn/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Shared/Footer/Footer';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Appointment from './Components/Appointment/Appointment';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          {/* Header menu */}
          <Header></Header>

          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

          {/* Private Routes start */}
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>

            <PrivateRoute path="/service-details/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
          {/* Private Routes end */}

            <Route path="/sign-up">
              <SignUp></SignUp>
            </Route>

            <Route path="/sign-in">
              <SignIn></SignIn>
            </Route>
            
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          
          {/* Footer area */}
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
