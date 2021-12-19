
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SpringBootData from "./components/SpringBootData";
import React, { useEffect, useState } from 'react';
import EmpData from "./components/EmpData";
import Header from "./components/Header";
import Hello from './components/Hello';
import Home from './components/Home';
import Login from "./components/Login";
import Logout from './components/Logout';
import Page404 from './components/Page404';
import Register from "./components/Register";
import BankData from './components/BankData';
import PensionDetails from './components/PensionDetails';
import PensionerData from './components/PensionerData';
import SpringPensionerDetails from './components/SpringPensionerDetails';
import ProcessPensionModule from './components/ProcessPensionModule';
import LoginHome from './components/LoginHome';

const Routes = () => {

    let [loginStatus, setLoginStatus] = useState(false);

    useEffect(() => {
        setLoginStatus(sessionStorage.getItem('isUserLoggedIn'));
    }, []);

    if (loginStatus) {
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                            <Switch>
                                <Route exact path="/" loginStatus > <LoginHome /> </Route>
                                <Route path="/home" loginStatus> <LoginHome /> </Route>
                                <Route path="/hello"> <Hello /> </Route>
                                <Route path="/bankData"> <BankData /> </Route>
                                <Route path="/pension"> <PensionDetails /> </Route>
                                <Route path="/pensioner"> <PensionerData /> </Route>
                                <Route path="/pension"> <PensionDetails /> </Route>
                                <Route path="/emp"> <EmpData /> </Route>
                                <Route path="/processPension"> <ProcessPensionModule /> </Route>
                                <Route path="/spring"> <SpringBootData /> </Route>
                                <Route path="/logout"> <Logout /> </Route>
                                <Route path="/*"> <Page404 /> </Route>
                            </Switch>
                        {/* <Footer /> */}
                    </div>
                </Router>
            </div>
        );
    }
    else {
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                            <Switch>
                                <Route exact path="/" loginStatus > <Home /> </Route>
                                <Route path="/home" loginStatus> <Home /> </Route>
                                <Route path="/register"> <Register /> </Route>
                                <Route path="/login"> <Login /> </Route>
                                <Route path="/*"> <Page404 /> </Route>
                            </Switch>
                        {/* <Footer /> */}
                    </div>
                </Router>
            </div>
        );
    }
}



export default Routes;