import React, { Component } from 'react'
import Content from './Content'
import { Button, Card, colors, Container, Divider } from '@material-ui/core';
import * as AiOut from "react-icons/ai";
import { IconContext } from 'react-icons';
import TextField from '@material-ui/core/TextField';

export default class Comments extends Component {
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
        const { isToggleOn } = this.state
        return (
            <div className={"comments"}>

                {this.state.isToggleOn &&
                    <Content />
                }    
                <Button  onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'LESS' : 'MORE'}
                </Button >

                <Divider style={{ background: 'black' }} variant={"fullWidth"} />
                <h1 className={"heading"}>Comments</h1>
                <Card className={"card_comment"}>

                    <form className={"comment_form"} noValidate autoComplete="off">
                        <TextField
                            className="textField"
                            id="outlined-multiline-static"
                            label="Comment"
                            multiline
                            rows={5}
                            placeholder="Write a Comment"
                            // defaultValue="Default Value"
                            variant="outlined"

                        />
                        <div className={"btn1"}>
                            <Button variant="contained" color="primary" >Add Comment</Button>
                            <Button >Cancel</Button>
                        </div>
                    </form>
                </Card>
                <Card className={"card_Nocomment"}>
                    <div className={"icons"}>
                        <IconContext.Provider value={{ size: '50px', color: 'blue' }}  >
                            <AiOut.AiOutlineInfoCircle />
                        </IconContext.Provider>

                    </div>

                    <div className={"noComment"}>
                        <h2>No Comment Yet</h2>
                        <p className={"cmt_para"} >No comments available for this API Yet</p>
                    </div>

                </Card>

            </div>


        )
    }
}
