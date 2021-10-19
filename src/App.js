
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Doctors from './components/Doctors/Doctor';
import Home from './components/home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Services from './components/Services/Services';
import Header from './components/shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import Register from './components/Login/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/shared/Footer/Footer';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/"><Home></Home></Route>
            <Route path="/home"><Home></Home></Route>
            <PrivateRoute path="/serviceDetails/:id"><ServiceDetails></ServiceDetails></PrivateRoute>
            <Route path="/doctors"><Doctors></Doctors></Route>
            <Route path="/services"><Services></Services></Route>
            <Route path="/about"><About></About></Route>
            <Route path="/login"><Login></Login></Route>
            <Route path="/register"><Register></Register></Route>
            <Route path="*"><NotFound></NotFound></Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
