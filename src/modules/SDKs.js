import { Button, Card, Divider, ListItemText } from '@material-ui/core';
import React, { Component } from 'react'
import Content from './Content'
import java from '../assets/java.png';
import android from '../assets/android.png';
import js from '../assets/js.png';
import jmeter from '../assets/jmeter.png';
import node from '../assets/node.jpg';
import * as Aiout from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
export default class SDKs extends Component {
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
        
        return (
            <div className={"SDKs"}>

                {this.state.isToggleOn &&
                    <Content />
                }
                <Button  onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'LESS' : 'MORE'}
                </Button >

                <Divider style={{ background: 'black' }} variant={"fullWidth"} />
                <h1 className={"heading"}>Software Development Kits (SDKs)</h1>
                <div className={"card-div"}>
                    <IconContext.Provider value={{ color: 'blue', size: '20px' }}>
                        <Card className={"sdk_card"}>
                            {/* <ListItemText primary="Android"/> */}
                            <h3 >ANDROID</h3>
                            <Divider variant={"fullWidth"} />

                            <img className={"image"} src={android} />
                            <Button style={{color:"blue"}} ><Aiout.AiOutlineArrowDown />Download</Button>

                        </Card>
                        <Card className={"sdk_card"}>
                            <h3>JAVA</h3>
                            <Divider variant={"fullWidth"} />
                            <img className={"image"} src={java} />
                            <Button style={{color:"blue"}} ><Aiout.AiOutlineArrowDown />Download</Button>
                        </Card>
                        <Card className={"sdk_card"}>
                            <h3>JAVASCRIPT</h3>
                            <Divider variant={"fullWidth"} />
                            <img className={"image"} src={js} />
                            <Button style={{color:"blue"}} ><Aiout.AiOutlineArrowDown />Download</Button>
                        </Card>
                        <Card className={"sdk_card"}>
                            <h3>JMETER</h3>
                            <Divider variant={"fullWidth"} />
                            <img className={"image"} src={jmeter} />
                            <Button style={{color:"blue"}} ><Aiout.AiOutlineArrowDown />Download</Button>
                        </Card>
                        <Card className={"sdk_card"}>
                            <h3>Node Js</h3>
                            <Divider variant={"fullWidth"} />
                            <img className={"image"} src={node} />
                            <Button style={{color:"blue"}} ><Aiout.AiOutlineArrowDown />Download</Button>
                        </Card>
                       
                    </IconContext.Provider>
                </div>
            </div>
        )
    }
}
