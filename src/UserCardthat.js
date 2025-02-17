import React from "react";

function UserCardthat({ name, age, location }) {
  return (
    <div
      style={{
        height: '500px',
        background: 'gray',
        width: 500,
        justifyContent: "center",
        textAlign: "center",
        margin: "auto",
        marginTop:'5px',
        fontFamily:'cursive',
        fontSize:20,
        borderRadius:10,
        boxShadow:'0 0 10px black',
    

      }}>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdLZAJzeEA2iYjsrN4CEXrg8ATQ1tB04blQ&s" id="img1"></img>
      <h1>Name:{name}</h1>
      <h2>Age:{age}</h2>
      <p>Location:{location}</p>
    </div>
  );
}

export default UserCardthat;
