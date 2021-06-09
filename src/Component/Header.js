
import React from 'react'
import inubeLogo from '../assets/iNube Logo.png';
import { Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
export default function Header() {
    return (
        <div>
            <Card>
                <div className={"Header"}>
                    <div className={"inube_logo"}>
                        <img src={inubeLogo} />
                    </div>

                    <div className={"api_Heading_Menu"}>
                        {SidebarData.map((items, index) => {
                            return (
                                <>
                                   
                                    <Link to={items.path}>
                                    <span></span>
                                        <span> {items.icon} {items.title}</span>

                                    </Link>
                                </>
                            )
                        })}
                    </div>
                </div>
            </Card>
        </div>
    )
}
