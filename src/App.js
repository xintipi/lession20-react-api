import React, {Component, Fragment} from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
    showContent = (routes) => {
        let result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                )
            });
        }
        return (
            <Switch>
                {result}
            </Switch>
        )
    };

    render() {
        return (
            <Router>
                <Fragment>
                    <Menu/>
                    <div className="container">
                        <div className="row">
                            {this.showContent(routes)}
                        </div>
                    </div>
                </Fragment>
            </Router>
        );
    }
}

export default App;
