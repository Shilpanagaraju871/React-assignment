import React from "react";

function Card(props) {
  return (
    <> 
      {/* <div style={{flexDirection:"row" , backgroundColor:"red",display:"flex",paddingLeft:"100px"}} > */}
      <div
        onClick={() => {
          props.onpress({
            name: props.name,
            age: props.age,
            qualification:props.qualification,
            img: props.img,
         lwt:"helooo"
          });
        }}
        style={{
          marginTop:"10px",
          border: "2px solid black",
          // border-radius:'5px';
          marginBottom: "150px",
          width: "130px",
          // height: "500px"
        }}
      >
        {/* <img
          src={props.img}
          height="100px"
          width="200px"
          alt="pic"
          className="card_img"
        /> */}
        <div style={{ backgroundColor: "" }}>
          <h4
            style={{
              backgroundColor: "#D2B48C",
              color: "black",
              // marginTop: "5px",
            }}
          >
           {props.ind+1} . Name : {props.name}
          </h4>
          {/* <h5
            style={{
              backgroundColor: "black",
              color: "white",
              marginBottom: "-2px",
              paddingBottom: "6px",
            }}
          >
            {" "}
            Age : {props.age}
          </h5> */}
        </div>

        {/* </div> */}
      </div>

    </>
  );
}

export default Card;
