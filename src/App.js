import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navibar} from "./Components/Navibar";
import {Home} from "./Components/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Users} from "./Components/Users";
import {About} from "./Components/About";
import {Footer} from "./Components/Footer";

function App() {
    return (
        <>
            <Router>
                <Navibar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/users' component={Users}/>
                    <Route path='/about' component={About}/>
                </Switch>
            </Router>
            <Footer/>
        </>
    );
}

export default App;
