import React, { useState } from 'react';
import './Navbar.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import *as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import { Api_Category_Data } from './SidebarData';
import { IconContext } from 'react-icons';
import Divider from '@material-ui/core/Divider';
import Header from './Header';
import HealthLogo from '../assets/healthLogo.png';
import './Navbar.css';

import IconButton from '@material-ui/core/IconButton';
import { Button } from '@material-ui/core';
export default function Navbar() {
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <Header />
            <div className={"menu"}>

                {/* <div>
                    <Button onClick={showSidebar}>{'<<'}</Button>
                </div> */}
                {sidebar &&
                    <div>
                        <div className={"setting"} >
                            <Link to="#" className={"icon"} >
                                <AiIcons.AiOutlineSetting size="40px" />
                            </Link>
                        </div>
                        <IconContext.Provider value={{ color: 'white' }}>
                            <nav className={"nav-menu"}>
                                <ul className="nav-menu-items">
                                    {Api_Category_Data.map((item, index) => {
                                        return (
                                            <li key={index} className={item.cName}>
                                                <Link to={item.path}>
                                                    {item.icon}
                                                    <span>{item.title}</span>
                                                </Link>
                                            </li>)
                                    })}
                                </ul>
                            </nav>
                        </IconContext.Provider>
                    </div>
                }
            </div>

            <div className={"health-head-div"}>
                <div className={"health_icon"}>

                    <Link to="/overview" >
                        <img className={"health_image"} src={HealthLogo} />
                    </Link>

                </div>
                <div className={'api_heading'}>
                    <Link to="/overview" >
                        <h1>Health-Flexi-Retail</h1>
                    </Link>
                    <span>admin</span>
                </div>
                <Divider orientation={"horizontal"} />

            </div>

        </>
    )
}

