import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Screens
import Playlist from "./components/playlist";
import Login from "./components/screens/Login";
import Register from "./components/screens/Register";

const App = () => {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <PrivateRoute exact path="/" component={Playlist} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
