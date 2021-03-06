import React from "react";
import './menu-item.styles.scss';

const MenuItem =({ title,imageUrl, size }) =>(
    <div style={{
        backgroundImage: `Url(${imageUrl})`
    }} 
    className={`${size} menu-item`}>
        <div className="Background-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
    <div className="content">
    <h1 className="title">{title.toUpperCase()} </h1>
    <span className="subtitle"> SHOP NOW</span>

    </div>
    </div>

);

export default MenuItem