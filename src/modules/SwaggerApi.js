import React from 'react'
import { Component } from "react";
import { SwaggerUIBundle, SwaggerUIStandalonePreset } from "swagger-ui-dist";
import SwaggerUI from "swagger-ui";
import "swagger-ui-react/swagger-ui.css";
import SwaggerUi, {presets} from 'swagger-ui';

export default class SwaggerApi extends Component {
    constructor(props) {
        super(props);
    }        
   componentDidMount() {
        window.onload = function () {
            // Begin Swagger UI call region
            const ui = SwaggerUI({                
                //   urls: [
                //     { 
                //         url:'../data/policy.json',name:"Policy Management"
                //     },
                //     {                     
                //         url: "product.json", name: "Product Management"
                //     },          
                //   ],

                urls: [
                    {
                        url: "http://dev2-publi-3o0d27omfsvr-1156685715.ap-south-1.elb.amazonaws.com/api/Policy/swagger/v1/swagger.json",
                        name: "Policy Management "
                    },
                    {
                        url: "http://dev2-publi-3o0d27omfsvr-1156685715.ap-south-1.elb.amazonaws.com/api/Product/swagger/v1/swagger.json",
                        name: "Product Management "
                    },
                ],

                dom_id: '#swagger-ui',
                deepLinking: true,
                presets: [                  
                   SwaggerUIBundle.presets.apis,                   
                    SwaggerUIStandalonePreset
                ],
                plugins: [
                    SwaggerUIBundle.plugins.DownloadUrl
                ],
                layout: "StandaloneLayout"
            });
            // End Swagger UI call region
            window.ui = ui;
        };     
    }
    render() {
        return (
            <div id="swagger-ui" >
                {/* <SwaggerUI url="http://dev2-publi-3o0d27omfsvr-1156685715.ap-south-1.elb.amazonaws.com/api/Policy/swagger/v1/swagger.json" />  */}
                {/* <SwaggerUI  url="http://dev2-publi-3o0d27omfsvr-1156685715.ap-south-1.elb.amazonaws.com/api/Product/swagger/v1/swagger.json" /> */}
              
            </div>
        );
    }
}
