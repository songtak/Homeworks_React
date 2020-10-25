import React from 'react';
import './SubwayTemplate.css'

const SubwayTemplate = ({ items, needs }) => {
    
    return (
        <div className="SuperMarketTemplate">
      <div className="items-wrapper">
        <h2 className="SubwayTitle" >SUBWAY SANDWICH</h2>
        {items}
      </div>
      <div className="basket-wrapper">
        <h2>MY SANDWICH</h2>
        {needs}
      </div>
    </div>
    )
}

export default SubwayTemplate;
