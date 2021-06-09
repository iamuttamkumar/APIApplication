import { Card, Container, List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import { Component } from 'react';
import { Link } from 'react-router-dom'
import HealthLogo from '../assets/healthLogo.png';

import Navbar from '../Component/Navbar';
import HealthApi from './HealthApi';

export default class Health extends Component {
   
    render() {
        return (
            <>
                <div className={'health'}>
                    <Container>
                        <Card className={"health_card"}>
                            <div>
                                <Link to="/overview" >
                                    <img className={"health_image"} src={HealthLogo} />
                                </Link>
                            </div>
                            <div className={"card-Details"}>
                                <Link to="#">
                                    <h2>Health-Flexi-Retail</h2>
                                </Link>
                                <div className={"details"}>
                                    <span>By : admin </span>
                                </div>
                                <div className={"data"}>
                                    <List>
                                        <span style={{ marginRight: '20px' }}>v1.0.0</span>
                                        <span>/Health-FlexiRetails</span>
                                    </List>
                                </div>
                                <div>
                                    <List>
                                        <ListItem>
                                            <ListItemText secondary="Version" />
                                            <ListItemText secondary="context" />
                                        </ListItem>
                                    </List>
                                </div>
                            </div>
                        </Card>
                    </Container>
                </div>
            </>
        )
    }
}


