

import { Switch } from '@material-ui/core'
import { Router } from '@material-ui/icons'
import React from 'react';
import { Route } from 'react-router';
import Navbar from '../Component/Navbar';
import Comments from './Comments';
import Documentation from './Documentation';
import Overview from './Overview';
import SDKs from './SDKs';
import Subscriptions from './Subscriptions';
import TryOut from './TryOut';

export default function HealthApi() {
    return (
        <div>           
            <Router>
            <Navbar />
                <Switch>
                    <Route path="/" exact component={Overview} />
                    <Route path="/subscriptions" component={Subscriptions}/>
                    <Route path="/sdks" component={SDKs}/>
                    <Route path="/tryout" component={TryOut}/>
                    <Route path="documentation" component={Documentation}/>
                    <Route path="/comments" component={Comments}/>
                </Switch>
            </Router>
        </div>
    )
}


