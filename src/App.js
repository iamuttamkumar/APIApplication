import logo from './logo.svg';
import './App.css';

import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Overview from './modules/Overview';
import Subscriptions from './modules/Subscriptions';
import SDKs from './modules/SDKs';
import TryOut from './modules/TryOut';
import Documentation from './modules/Documentation';
import Comments from './modules/Comments';
import ApiCategoryMenu from './Component/ApiCategoryMenu';
import Health from './modules/Health';
import NoApi from './modules/NoApi';

import { Component } from 'react';
import ApiDetails from './modules/ApiDetails';
export default class App extends Component {

  constructor(props) {

    super(props);
    this.state = {           
      isHomePage : true,
    };   
  }  
  render() {
    const { isHomePage } = this.state
    return (
      <div className="App">
        <Router>
        
          {isHomePage ? <ApiCategoryMenu />:<Navbar />}  
        
         <Switch>
            <Route path="/" exact component={Health} />
            <Route path="/noApi" component={NoApi} />
            <Route path="/apiDetails" component={ApiDetails} />
            <Route path="/overview"  component={Overview} />
            <Route path="/subscriptions" component={Subscriptions} />
            <Route path="/sdks" component={SDKs} />
            <Route path="/tryout" component={TryOut} />
            <Route path="/documentation" component={Documentation} />
            <Route path="/comments" component={Comments} />

          </Switch>
        </Router>        

      </div>
    );
  }
}


