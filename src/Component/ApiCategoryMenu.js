import React, { Component } from 'react'
import { Api_Category_Data } from './SidebarData';
import * as Setting from 'react-icons/gr';
import * as BsIcons from 'react-icons/bs';
import * as List from 'react-icons/io5';
import * as Grid from 'react-icons/io';
import { IconContext } from 'react-icons';
import './Navbar.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Header from './Header';
import IconButton from '@material-ui/core/IconButton';
import { Button } from '@material-ui/core';

export default class ApiCategoryMenu extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         sidebar:false,
    //         // setSidebar:false
    //     },
    //     this.showSidebar=this.showSidebar.bind(this);
    // }
    // //  const[sidebar, setSidebar] = useState(false);
    // // showSidebar = () => setSidebar(!sidebar);

    // showSidebar=()=>{
    //     const{sidebar}=this.state;
    //     this.setState({
    //         sidebar:!sidebar
    //     })
    // }
    constructor(props) {
        super(props);
        this.state = {
            showMore: false,


        };

        this.toggleMore = this.toggleMore.bind(this);
        // this.showMore = this.showMore.bind(this);
    }

    toggleMore = () => {
        const { showMore } = this.state;
        this.setState({
            showMore: !showMore
        })
    }
    render() {
        return (
            <>
                <Header />

                <div className={"menu"}>
                    {this.state.showMore ?
                        <IconContext.Provider value={{ color: 'black', size: '25px' }}>
                            <div className={"categories"}>
                                <span>API Categories</span>
                                <Button style={{ color: 'white', marginBottom: '30px ', fontWeight: 'bolder', fontSize: '1rem' }}
                                    onClick={this.toggleMore}> {"<<"} </Button>
                            </div>

                            <nav className="api-nav-menu">
                                <ul className="nav-menu-items">
                                    {Api_Category_Data.map((items, index) => {
                                        return (
                                            <li key={index} className={items.cName}>
                                                <Link to={items.path}>
                                                    {items.icon}
                                                    <span>{items.title}</span>
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </nav>
                        </IconContext.Provider> :
                        <div className={"api_Categories"}>
                            <div className={"api_Categories_btn"}>
                                <Button style={{ color: 'white', marginLeft: '-20px ', marginTop: '15px ', fontWeight: 'bolder', fontSize: '1rem' }}
                                    onClick={this.toggleMore}> {">>"} </Button>

                            </div>
                            <div className={"side_btn"}>
                                {Api_Category_Data.map((items, index) => {
                                    return (
                                        <li key={index} className={items.cName}>
                                            <IconContext.Provider value={{ color: 'black', size: '25px' }}>
                                                <Link to={items.path}>
                                                    {items.icon}

                                                </Link>
                                            </IconContext.Provider>
                                        </li>
                                    )
                                })}
                            </div>
                        </div>
                    }
                </div>
                <div className={"Api-div"}>
                    <div className={"Setting_icon"}>
                        <IconContext.Provider value={{ size: '40px' }}>
                            <Setting.GrSettingsOption />
                        </IconContext.Provider>
                    </div>
                    <div className={'api_heading'}>
                        <h1>APIs</h1>
                    </div>
                    <div className={"listGrid"}>
                        <IconButton edge="start" color="inherit" >
                            <Link to="/apiDetails">
                                <List.IoList />
                            </Link>
                        </IconButton>
                        <IconButton edge="start" color="inherit" >
                            <Link to="/">
                                <Grid.IoMdGrid />
                            </Link>
                        </IconButton>
                    </div>
                </div>
            </>
        )
    }
}



