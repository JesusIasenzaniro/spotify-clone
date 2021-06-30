// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import { Home } from './Views/Home/Home';
function App() {
    return (
        <div className='App'>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
