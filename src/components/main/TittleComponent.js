import React from 'react'

const TittleComponent = () => {
  return (
    <div  className="title-container"> 
      <div  className="title-text-container">
        <input type="text" value="Add title -"  className="title-text"/>
      </div>
      <div  className="title-description-text-container">
        <input type="text" placeholder="Add description ..."  className="title-description-text"/>
      </div>      
    </div>
  );
}

export default TittleComponent

