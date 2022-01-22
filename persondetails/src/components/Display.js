import React, { useState } from "react";

function Display(props) {
  const { displays } = props;
  return (
    <div  style={{height:"460px",marginTop:"20px", marginRight:"400px", width:"300px", border:"2px solid black"}}>

<h1> Person details</h1>

              <img height="150px" width="150px" src={displays.img} /> 

        <h1>
        name:{displays.name}

        </h1>
        <h1>
        age:{displays.age}

        </h1>
        <h1>
        qualification:{displays.qualification}

        </h1>

      

      
    </div>
  );
}

export default Display;
