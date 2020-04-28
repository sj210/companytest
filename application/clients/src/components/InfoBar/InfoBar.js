import React from 'react';
import closeIcon from '../../Icons/closeIcon.png';
import onlineIcon from '../../Icons/onlineIcon.png'
import '../InfoBar/InfoBar.scss'


const InfoBar = ({ room }) => {
    
    console.log(room)

    return(
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online" />
            <h3 style={{color: "black"}}>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/"><img src={closeIcon} alt="close" /></a>
        </div>
    </div>

)}

export default InfoBar;