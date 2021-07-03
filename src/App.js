import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import { Home } from './Views/Home/Home';
import Details from './Views/Details/Details';
function App() {
    return (
        <div className='App'>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/:id' component={Details} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
