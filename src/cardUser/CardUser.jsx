import React, { useState } from "react";
import usersData from "../helper/data";

function CardUser() {
  const [users, setUsers] = useState(usersData);
  const [randomUser, setRandomUser] = useState(null);

  const handleUser = () => {
    const randomIndex = Math.floor(Math.random() * users.length);
    const selectedUser = users[randomIndex];
    setRandomUser(selectedUser);
    setUsers(users.filter(user => user.id !== selectedUser.id));
  };

  return (
    <div>
      {randomUser ? (
        <div className="container">
          <img src={randomUser.image} alt="" />
          <p>{randomUser.name}</p>
        </div>
      ) : null}
      <button className="btn" onClick={handleUser}>
        START
      </button>
    </div>
  );
}

export default CardUser;


// import React, { useState } from "react";
// import usersData from "../helper/data";

// function CardUser() {
//   const [users, setUsers] = useState(usersData);
//   const [randomUser, setRandomUser] = useState(null);

//   const handleUser = () => {
//     const randomIndex = Math.floor(Math.random() * users.length);
//     setRandomUser(users[randomIndex]);
//     setUsers(users.filter((user) => user.id !== randomIndex));
//     console.log(randomIndex);
//   };

//   return (
//     <div>
//       {randomUser ? (
//         <div className="container">
//           <img src={randomUser.image} alt="" />
//           <p>{randomUser.name}</p>
//         </div>
//       ) : null}
//       <button className="btn" onClick={handleUser}>
//         START
//       </button>
//     </div>
//   );
// }

// export default CardUser;
