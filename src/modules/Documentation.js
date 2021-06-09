import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Content from './Content'
import { Button, Card, Divider, ListItemText } from '@material-ui/core';
import * as RiFile from 'react-icons/ri';
import * as Aiout from 'react-icons/ai';
import * as FiCh from 'react-icons/fi';
import { IconContext } from 'react-icons';
export default class Documentation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //  showMore: false,
            //  show: false,
            // text: "MORE",
            // text1: "SHOW",
            isToggleOn: false,
            isToggleShow:false,
            
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleClickShow=this.handleClickShow.bind(this);      
    }  
 
    handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
      handleClickShow() {
        this.setState(prevState => ({
            isToggleShow: !prevState.isToggleShow
        }));
      }

    render() {
        return (
            <div className={"documentation"}>
                {this.state.isToggleOn &&
                    <Content />
                }

                 <Button  onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'LESS' : 'MORE'}
                </Button >
                <Divider style={{ background: 'black' }} variant={"fullWidth"} />

                <h1 className={"heading"}>API Documentation</h1>
                <div className={"Doc-Content"}>
                    <IconContext.Provider value={{ size: '30px' }}>

                        {this.state.isToggleShow &&
                            <div className={"left-content"}>
                                <Divider style={{ background: 'black' }} variant={"fullWidthx"} />
                                <div id="left-div">
                                    <RiFile.RiFileCopy2Line />
                                    <h3>HowTo</h3>
                                </div>
                                <Button variant={"contained"} size={"medium"}><Aiout.AiOutlineArrowDown />
                                Help Document-FlexiRetail-V1.0.0</Button>
                            </div>
                            
                        }                      
                    
                        <div className={"right-content"}>
                            <div className="tag">
                                <p>HOWTO</p>
                            </div>                            
                            <div className={"center"}>
                              
                                 <Link  onClick={this.handleClickShow}>
                    {this.state.isToggleShow ? 'HIDE' : 'SHOW'}
                </Link >
                            </div>                            
                            <p>How to Use FlexiRetail API Step by Step</p>
                            <Button variant={"contained"} size={"large"} style={{ marginLeft: '10px' }}>
                                Download
                                
                            </Button>
                        </div>
                        </IconContext.Provider>
                </div>
            </div >
        )
    }
}
