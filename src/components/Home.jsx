import React from "react";

function Home({color, name, city}) {
    return (
        <div id="home">
            <h1 style={{ color: color }}>
                {name} is a web Developer from {city}
            </h1>
        </div>
    );
}

export default Home;

// // Destructured
// function Home({color, name, city}) {
//   return (
//     <div id="home">
//       <h1 style={{ color: color }}>
//         {name} is a Web Developer from {city}
//       </h1>
//     </div>
//   );
// }
// export default Home;

// // Not Destructured
// function Home(props) {
//   return (
//     <div id="home">
//       <h1 style={{ color: props.color }}>
//         {props.name} is a Web Developer from {props.city}
//       </h1>
//     </div>
//   );
// }