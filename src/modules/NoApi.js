import React from 'react'
import alert from '../assets/alert.png';

export default function NoApi() {
    return (
        <div className={"NoApi"}>
            <div className={"alert"}>
                <img className={"alert-image"} src={alert} />
                <div className={"message"}>
                    <h2>No APIs Available</h2>
                    <p>There is No Apis to Display Right Now.</p>
                </div>
            </div>

           
        </div>  
    )
}
