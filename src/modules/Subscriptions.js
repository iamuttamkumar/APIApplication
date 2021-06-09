import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Content from './Content';
import { Divider, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';


export default class Subscriptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render() {
        const { text } = this.state;
        return (
            <div className={"subscriptions"}>
                {this.state.isToggleOn &&
                    <Content />
                }
                <Button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'LESS' : 'MORE'}
                </Button>

                <Divider style={{ background: 'black' }} variant={"fullWidth"} />
                <h1>Subscriptions</h1>
                <div className={"subscribe"}>
                    <p>An Application is Primarily used to decouple the Consumer from the APIs.It is allows you to generate and
                    use a Single key for multiple APIs and subscribe multiple times to a Single API with different SLA levels.
                </p>
                    <h2>Subscribe</h2>
                    <div className={"sub"}>
                        <p>Use the Subscription and key Generation Wizard.Create a new application --Subscribe-- generate
                        keys and Access Token to invoke this API.
                     </p>
                        <div className={"button"}>
                            <Button variant="contained" color="primary"   >
                                SUBSCRIPTION & KEY GENERATION WIZARD
                    </Button>
                        </div>
                    </div>

                </div>
                <div className={"sub1"}>
                    <h2>Subscriptions </h2>
                    <p className={"para"}>(Applications Subscribed to this Api)</p>
                    <Divider variant={"middle"} />
                    <ListItem>
                        <ListItemText primary="Application Name" />
                        <ListItemText primary="Throting Tier" />
                        <ListItemText primary="Application Status" />
                        <ListItemText primary="Actions" />
                    </ListItem>
                    <Divider variant={"middle"} />
                </div>
            </div>
        )
    }
}
