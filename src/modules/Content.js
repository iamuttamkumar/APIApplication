import React from 'react';
import { Component } from 'react';
import Button from '@material-ui/core/Button';

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
import * as FaCloud from 'react-icons/fa';
import * as IoMdDoc from 'react-icons/io';

import { IconContext } from 'react-icons';
import IconButton from '@material-ui/core/IconButton';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { ExpandMore } from '@material-ui/icons';
import Box from '@material-ui/core/Box';

import TextField from '@material-ui/core/TextField';



export default class Content extends Component {
    render() {
        return (

            <div>
                <div className={"items"}>
                    {/* <h2> Health-Flexi-Retail</h2>
                    <div>
                        <Divider style={{ background: 'black' }} variant="fullWidth" />
                        <h3></h3>
                        <Divider style={{ background: 'black' }} variant="fullWidth" />
                    </div> */}

                    <List >
                        <IconContext.Provider value={{ color: 'blue', size: '20px' }}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Link>
                                        <GrIcons.GrConnect />
                                    </Link>
                                </ListItemAvatar>
                                <ListItemText primary="Version" />
                                <ListItemText primary="V1.0.0" />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemAvatar>
                                    <AiIcons.AiOutlineWallet />
                                </ListItemAvatar>
                                <ListItemText primary="Context" />
                                <ListItemText primary="/Health-Flexiretail/v1.0.0" />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemAvatar>
                                    <BsIcons.BsPeopleCircle />
                                </ListItemAvatar>
                                <ListItemText primary="Provider" />
                                <ListItemText primary="admin" />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemAvatar>
                                    <BsIcons.BsPersonSquare />

                                </ListItemAvatar>
                                <ListItemText primary="Technical Owner" />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemAvatar>
                                    <BsIcons.BsFillStarFill />
                                </ListItemAvatar>
                                <ListItemText primary="Rating" />
                                {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */}

                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemAvatar>
                                    <RiIcons.RiComputerLine />
                                </ListItemAvatar>
                                <ListItemText primary="Gateway Environments" />
                                <Accordion style={{ width: '70%' }} >
                                    <AccordionSummary
                                        // expandIcon={<ExpandMoreIcon />}
                                        expandIcon={<ExpandMore />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header" >
                                        <IconContext.Provider value={{ size: '30px' }}>
                                            <Typography class={'icon_heading'}> <AiIcons.AiFillCloud /></Typography>
                                        </IconContext.Provider>
                                        <Typography style={{ margin: '10px' }}>Production and Sandbox</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div style={{ width: '100%' }}>
                                                <span style={{ fontWeight: 'bold' }}>GateWay URLs</span>
                                                <div style={{ margin: '10px 0px 0px 10px' }}>
                                                    <TextField
                                                        margin='dense'
                                                        type='text'
                                                        style={{ width: '80%', marginRight: '10px', marginTop: '-5px' }}
                                                        defaultValue='http://developer.cholainsurance.com/endpoint/Health-flexiretail/v1.0.0'
                                                        variant='outlined'
                                                        inputProps={
                                                            { readOnly: true, }
                                                        }
                                                    />

                                                    <IconButton edge="start" color="inherit" >
                                                        <IoMdDoc.IoMdDocument />
                                                    </IconButton>

                                                    <TextField
                                                        margin='dense'
                                                        style={{ width: '80%', marginRight: '10px' }}
                                                        type='text'
                                                        defaultValue='http://developer.cholainsurance.com/endpoint/Health-flexiretail/v1.0.0'
                                                        variant='outlined'
                                                        inputProps={
                                                            { readOnly: true, }
                                                        }
                                                    />
                                                    <IconButton edge="start" color="inherit" >
                                                        <IoMdDoc.IoMdDocument />
                                                    </IconButton>


                                                </div>
                                                <Button
                                                    style={{ fontSize: '0.7rem', fontWeight: 'bolder' }}
                                                ><FaCloud.FaCloudDownloadAlt />
                                                    <span>Swagger</span>
                                                </Button>
                                            </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                            </ListItem>
                            <Divider  />
                        </IconContext.Provider>
                    </List>
                </div>
               
            </div>

        );
    }
}
