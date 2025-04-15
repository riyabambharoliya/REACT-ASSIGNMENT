// Create a list of users where each user has a unique id. Render the user list
// usingReact and assign a unique keyto each user.

import React from "react";


function Second() {
    const users = [
  { id: 101, name: "john", age: 23 },
  { id: 102, name: "doe", age: 24 },
  { id: 103, name: "bob", age: 25 },
];
  return (
    <div>
      <h1>List Of Users</h1>
     <ul>
        {users.map((user)=>(
            <li key={user.id}>
                <p>Id = {user.id}</p>
                <p>Name = {user.name}</p>
                <p>Age = {user.age}</p>
            </li>
        ))}
     </ul>
    </div>
  );
}

export default Second;
