import { Button, Card, Divider, Link } from '@material-ui/core';
import React, { Component } from 'react'
import Content from './Content'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SwaggerApi from './SwaggerApi';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import * as FaCloud from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
export default class TryOut extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         show: false,
    //         text: "MORE",
            
    //     };
    //     this.toggleShow = this.toggleShow.bind(this);
    //     this.showMore = this.showMore.bind(this);
    // }

    // toggleShow = () => {
    //     const { show } = this.state;
    //     this.setState({
    //         show: !show
    //     })
    // }
    // showMore = (text) => {
    //     this.setState({
    //         text: "LESS"
    //     });
    // }

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
            <div className={"tryout"}>
                {/* {this.state.show &&
                    <Content />
                }

                <Button onClick={() => {
                    this.toggleShow();
                    this.showMore("Less");

                }}>{text}</Button> */}
                 {this.state.isToggleOn &&
                    <Content />
                }

                <Button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'LESS' : 'MORE'}
                </Button >

                <Divider style={{ background: 'black' }} variant={"fullWidth"} />
                <h1 className={"heading"}>TryOut</h1>
                <Card className={"card"}>
                    <div className={"card_Content"}>

                        <FormControl className={"select"} variant="outlined" >
                            <InputLabel >Applications</InputLabel>
                            <Select

                                label="Applications"
                            >
                                <option >Default Application </option>

                            </Select>
                            <p className={"para"}>Please Select an Application.</p>
                        </FormControl>

                        <FormControl fullWidth variant="outlined" >
                            <InputLabel >Environment</InputLabel>
                            <Select
                                label="Environment"
                            >
                                <option>Production and Sandbox </option>

                            </Select>
                            <p className={"para"}>Please select an environment.</p>
                        </FormControl>


                        <FormControl fullWidth variant="outlined">
                            <InputLabel >Access Token</InputLabel>
                            <OutlinedInput
                                type='password'
                                value={this.state.password}
                                startAdornment={<InputAdornment position="start">Authorization:Bearer</InputAdornment>}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton edge="end" >
                                            <Visibility />
                                            {/* <VisibilityOff /> */}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={100}

                            />
                            <InputAdornment position="end">
                            </InputAdornment>
                            <p className={"para"}>Enter Access Token.</p>
                        </FormControl>
                        <div className={"oauth-btn"}>
                            <FormControl>
                                <FormControlLabel value="oauth" checked control={<Radio color="default" />} label="OAuth" />
                            </FormControl>
                        </div>


                    </div>
                    <div className={"swagger-Btn"}>
                        <IconContext.Provider value={{ size: '20px' }}>
                            <Link to="#">

                                <Button variant={"text"} size={"medium"}>
                                    <FaCloud.FaCloudDownloadAlt />
                                            SWAGGER(/SWAGGER.JSON)</Button>
                            </Link>
                        </IconContext.Provider>
                    </div>

                </Card>
                <SwaggerApi />
            </div >
        );
    }
}
