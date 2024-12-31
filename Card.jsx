// import './card.css'

// // function Card(props){
// //     return(
// //         <div className="card" style={{ alignItems:"center"}}>
// //             <img alt="calendar picture "></img>
// //             {props.children}
// //         </div>
// //     );
// // }

// function Card() {
//     // const cards = Array.from({ length: 12 }, (_, index) => `Card ${index + 1}`);
  
//     const months = [
//         { title: "January", path: "/january", desc: "A month of starry and cosmic endeavours!" },
//         { title: "February", path: "/february", desc: "The scientific and missionary elevations!" },
//         { title: "March", path: "/march", desc:"" },
//         { title: "April", path: "/april", desc: "" },
//         { title: "May", path: "/may", desc: ""},
//         { title: "June", path: "/june", desc: "" },
//         { title: "July", path: "/july", desc:"" },
//         { title: "August", path: "/august", desc: "" },
//         { title: "September", path: "/september", desc:"" },
//         { title: "October", path: "/october", desc: "" },
//         { title: "November", path: "/november", desc:""},
//         { title: "December", path: "/december" , desc: ""}
//       ];

//     return (
//       <div className="card-container">
//         {months.map((month, index) => (
//           <div key={index} className="card">
//             <h3>{month.title}</h3>
//             <p>{month.desc}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
  

// export default Card

import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const appstyle = {
  color: '#000000',
  fontFamily: '"Lucida Console", "Courier New", monospace',
  
};

function Card() {
  const months = [
    { title: "January", path: "/january", desc: "A month of starry and cosmic endeavours!" },
    { title: "February", path: "/february", desc: "The scientific and missionary elevations!" },
    { title: "March", path: "/march", desc: "A month of astronomical wonders." },
    { title: "April", path: "/april", desc: "An innovative month of explorations." },
    { title: "May", path: "/may", desc: "Adventurous ventures await!" },
    { title: "June", path: "/june", desc: "Discoveries and achievements galore." },
    { title: "July", path: "/july", desc: "Cosmic connections and learning." },
    { title: "August", path: "/august", desc: "A reflective and scientific period." },
    { title: "September", path: "/september", desc: "The stars shine bright in September." },
    { title: "October", path: "/october", desc: "Innovations and growth abound." },
    { title: "November", path: "/november", desc: "Celebrate cosmic milestones." },
    { title: "December", path: "/december", desc: "A triumphant conclusion to the year." },
  ];

  return (
    <div className="card-container">
      {months.map((month, index) => (
        <div key={index} className="card" style={appstyle}>
          <Link to={month.path} style={{ textDecoration: "none", color: "inherit" }}>
          <h3 style={{ fontSize: '18px' }}>{month.title}</h3>
            <p style={{ fontSize: '15px' }}>{month.desc}</p>

          </Link>
        </div>
      ))}
    </div>
  );
}

export default Card;
