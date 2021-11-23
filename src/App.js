import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './custome/components/header/Header'
import './App.css';
import Home from './custome/home/Home'
import Services from './custome/services/Services';
import Teachers from './custome/doctor/Doctors';
import AboutUs from './custome/aboutus/AboutUs';
import NotFound from './custome/NotFound';
import Footer from './custome/components/footer/Footer';
import Login from './custome/login/Login';
import Register from './custome/register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './custome/components/PrivateRoute';
import ServiceDetails from './custome/serviceDetails/ServiceDetails';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path="/details/:cid">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>
          <Route exact path='/teachers'>
            <Teachers></Teachers>
          </Route>
          <Route exact path='/about'>
            <AboutUs></AboutUs>
          </Route>
          <Route exact path='/register'>
            <Register></Register>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

