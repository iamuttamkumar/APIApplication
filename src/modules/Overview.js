import React, { Component } from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import * as GrIcons from 'react-icons/gr';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';
import * as VscIcons from 'react-icons/vsc';
import * as FaRegIcons from 'react-icons/fa';
import * as cgFile from 'react-icons/cg';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';
import Subscriptions from './Subscriptions';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import * as MdIcons from 'react-icons/md';
import { Button, CardActions, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Content from './Content';
import SDKs from './SDKs';
import Navbar from '../Component/Navbar';
export default class Overview extends Component {
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
            <div className={"overview"}>

                {this.state.isToggleOn &&
                    <Content />
                }

                <Button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'LESS' : 'MORE'}
                </Button >

                <Divider style={{ background: 'black' }} variant={"fullWidth"} />
                <div>
                    <Card className={"card1"}>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <IconContext.Provider value={{ color: 'blue', size: '20px' }}>
                                        <MdIcons.MdSubscriptions />
                                    </IconContext.Provider>
                                </ListItemAvatar>
                                <ListItemText primary="Subscriptions" />
                            </ListItem>
                            <Divider />
                            <CardContent className={"content"}>
                                <Typography variant="body2" color="textPrimary" component="p">
                                    <h3>Subscription</h3>
                                   Subscription enables you to receive access tokens and be
                                   authenticated to invoke this API.
                                </Typography>
                                <Button variant="contained" color="primary">
                                    SUBSCRIBE
                            </Button>
                            </CardContent>
                        </List>
                    </Card>
                    <Card className={"card1"}>

                        <ListItem>
                            <ListItemAvatar>
                                <IconContext.Provider value={{ color: 'blue', size: '20px' }}>
                                    <VscIcons.VscSourceControl />
                                </IconContext.Provider>
                            </ListItemAvatar>
                            <ListItemText primary="Resources" />
                        </ListItem>
                        <Divider />
                        <CardContent>
                        </CardContent>
                        <div className={"footer"}>
                            <Divider />
                            <CardActions >
                                <Link to="tryout">
                                    <Button size="small" color="primary" >
                                        Test {'>>'}
                                    </Button>
                                </Link>
                            </CardActions>
                        </div>
                    </Card>

                    <Card className={"card1"}>

                        <ListItem>
                            <ListItemAvatar>
                                <IconContext.Provider value={{ color: 'blue', size: '20px' }}>
                                    <FaRegIcons.FaRegCommentDots />
                                </IconContext.Provider>
                            </ListItemAvatar>
                            <ListItemText primary="Comments" />
                        </ListItem>
                        <Divider />

                        <CardContent>

                        </CardContent>
                        <div className={"footer"}>
                            <Divider />
                            <CardActions >
                                <Link to="/comments">
                                    <Button size="small" color="primary" >
                                        Show more {'>>'}
                                    </Button>
                                </Link>
                            </CardActions>
                        </div>
                    </Card>
                    <Card className={"card1"}>

                        <ListItem>
                            <ListItemAvatar>
                                <IconContext.Provider value={{ color: 'blue', size: '20px' }}>
                                    <BsIcons.BsCodeSlash />
                                </IconContext.Provider>
                            </ListItemAvatar>
                            <ListItemText primary="SDK Generation" />
                        </ListItem>
                        <Divider />

                        <CardContent>

                        </CardContent>
                        <div className={"footer"}>
                            <Divider />
                            <CardActions >
                                <Link to="sdks">
                                    <Button size="small" color="primary" >
                                        Show more {'>>'}
                                    </Button>
                                </Link>
                            </CardActions>

                        </div>
                    </Card>
                    <Card className={"card1"}>

                        <ListItem>
                            <ListItemAvatar>
                                <IconContext.Provider value={{ color: 'blue', size: '20px' }}>
                                    <cgFile.CgFileDocument />
                                </IconContext.Provider>
                            </ListItemAvatar>
                            <ListItemText primary="Documents" />
                        </ListItem>
                        <Divider />

                        <CardContent>

                        </CardContent>
                        <div className={"footer"}>
                            <Divider />
                            <CardActions >
                                <Link to="documentation">
                                    <Button size="small" color="primary">
                                        Show more{'>>'}
                                    </Button>
                                </Link>
                            </CardActions>

                        </div>
                    </Card>

                </div>

            </div>
        );
    }
}
