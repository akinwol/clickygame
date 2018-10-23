import React from 'react';
import "./navcs.css"

// class Nav extends React.Component {
//   // constructor(props) {
//   //   super(props)
//   // }
//   render(props) {
//     return (
//       <div>
//         <nav className="navbar navbar-dark">
//           <ul className="nav">
//             <li className="nav-item logo">
//               <a href="/" className="nav-link">  Clicky Game </a>
//             </li>
//             <li className="nav-item">Click an image to continue</li>
//             <li className="nav-item">Score: <span>{props.children}</span> </li>

//           </ul>


//         </nav >
//         <header className="header">

//         </header>
//       </div>
//     );
//   }
// }

const Nav = props => (
  <div>
    <nav className="navbar fixed-top navbar-dark">
      <ul className="nav nav-fill">
        <li className="nav-item logo">
          <a href="/" className="nav-link">  Clicky Game </a>
        </li>
        <li className="nav-item">Click an image to continue</li>
        <li className="nav-item">Score: <span>{props.score}</span>| Top Score: <span>{props.topScore}</span> </li>

      </ul>


    </nav >
    <header className="header">

    </header>
  </div>

)

export default Nav;
