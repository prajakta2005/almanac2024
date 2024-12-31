// import React from "react";
// import Card from './Card.jsx';
// import HeroSection from './herosec.jsx';
// import Navbar from './navbar.jsx';
// import Footer from './footer.jsx';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
// import January from "./pages/january.jsx";


// import "./assets/vendor/bootstrap/css/bootstrap.min.css";
// import "./assets/vendor/icofont/icofont.min.css";
// import "./assets/vendor/boxicons/css/boxicons.min.css";
// import "./assets/vendor/animate.css/animate.min.css";
// //import "./assets/vendor/remixicon/remixicon.css";
// //import "./assets/vendor/line-awesome/css/line-awesome.min.css";
// import "./assets/vendor/venobox/venobox.css";
// import "./assets/vendor/owl.carousel/assets/owl.carousel.min.css";
// //import "./assets/vendor/aos/aos.css";
// import "./assets/css/style.css";
// import "./navbar.css"

// const centeredStyle = {
//   display: 'flex',
//   flexDirection: 'row',
//   justifyContent: 'center',
//   alignItems: 'center',
//   gap: '20px',
//   marginTop: '20px', 
//   height: '40vh'

// };

// // function App() {
// //   return (
// //     <div>
// //       <Navbar />
//       // <HeroSection />
//       // <div style={centeredStyle}>
//       //   <Card>
//       //     <h2>January</h2>
//       //     <p>Info for January will come here</p>
//       //   </Card>
//       //   <Card>
//       //     <h2>February</h2>
//       //     <p>Info for February will come here</p>
//       //   </Card>
//       //   <Card>
//       //     <h2>March</h2>
//       //     <p>Info for March will come here</p>
//       //   </Card>
//       //   <Card>
//       //     <h2>April</h2>
//       //     <p>Info for April will come here</p>
//       //   </Card>
//       // </div>
// //     </div>
// //   );
// // }

// // export default App;




// function Almanac() {
//   return (
//     <div>
//       {/* Header */}
//       {/* <header id="header" className="fixed-top d-flex align-items-center header-transparent">
//         <div className="container d-flex align-items-center">
//           <div className="logo mr-auto">
//             <a href="index.html">
//               <img src="assets/img/Antariksh_logo.png" alt="Antariksh Logo" className="img-fluid" />
//             </a>
//           </div>
//           <nav className="nav-menu d-none d-lg-block">
//             <ul>
//               <li className="active"><a href="#">Home</a></li>
//               <li><a href="#about">About</a></li>
//               <li className="drop-down">
//                 <a href="#">Month</a>
//                 <ul>
//                   <li><a href="#">January</a></li>
//                   <li><a href="#">February</a></li>
//                   <li><a href="#">March</a></li>
//                   <li><a href="#">April</a></li>
//                 </ul>
//               </li>
//               <li className="join-active">
//                 <a href="https://forms.gle/wBFayZQMafPzJeuq8">Join Antariks</a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </header> */}
//       <Navbar />

//       {/* Hero Section */}
//       <section id="hero">
//         <div className="hero-container"  style={centeredStyle}>

//           <h1>Antariksh</h1>
          
//           <h2>Astronomy Club of Vishwakarma Institutes</h2>
//           <a href="#about" className="btn-scroll scrollto" title="Scroll Down">
//             <i className="bx bx-chevron-down"></i>
//           </a>
//         </div>
//       </section>

//       {/* Main Content */}
//       <main id="main">
//         {/* About Section */}
//         <section id="about" className="about">
//           <div className="container">
//             <div className="section-title">
//               <h2>About</h2>
//               <p>
//                 Antariksh Club, also known as Antariksh Astronomy Club, is an inter-institutional club operating
//                 under the umbrella of Vishwakarma Institutes...
//               </p>
//             </div>
//             <div>
//               <div style={centeredStyle}>
//                 <Router>
//                   <Card>
//                     <h2>January</h2>
//                     <p>Info for January will come here</p>
//                   </Card>
//                 <Card>
//                   <h2>February</h2>
//                   <p>Info for February will come here</p>
//                 </Card>
//                 <Card>
//                   <h2>March</h2>
//                   <p>Info for March will come here</p>
//                 </Card>
//                 <Card>
//                   <h2>April</h2>
//                   <p>Info for April will come here</p>
//                 </Card>
//               </Router>
//               </div>
//               <div>
//                 <div style={centeredStyle}>
//                   <Router>
//                   <Card>
//                     <h2>May</h2>
//                     <p>Info for May will come here</p>
//                   </Card>
//                 <Card>
//                   <h2>June</h2>
//                   <p>Info for February will come here</p>
//                 </Card>
//                 <Card>
//                   <h2>July</h2>
//                   <p>Info for March will come here</p>
//                 </Card>
//                 <Card>
//                   <h2>August</h2>
//                   <p>Info for April will come here</p>
//                 </Card>
//               </Router>
//             </div>
//             </div>



//             {/* Other content goes here */}
//           </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       {/* <footer id="footer">
//         <div className="container">
//           <h3>Antariksh</h3>
//           <p>Astronomy Club of Vishwakarma Institutes</p>
//           <div className="social-links">
//             <a href="#" className="youtube"><i className="bx bxl-youtube"></i></a>
//             <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
//             <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
//             <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
//             <a href="#" className="google-plus"><i className="bx bxl-google-plus"></i></a>
//             <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
//           </div>
//           <div className="copyright">
//             &copy; Copyright <strong><span>Antariksh Astronomy Club</span></strong>. All Rights Reserved
//           </div>
//         </div>
//       </footer> */}
//       <Footer />
//     </div>
//   );
// }

// export default Almanac;


import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Card from './Card.jsx';
import HeroSection from './herosec.jsx';
import Navbar from './navbar.jsx';
import Footer from './footer.jsx';
import January from "./january.jsx";

import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/icofont/icofont.min.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/animate.css/animate.min.css";
import "./assets/vendor/venobox/venobox.css";
import "./assets/vendor/owl.carousel/assets/owl.carousel.min.css";
import "./assets/css/style.css";
import "./navbar.css";
import Home from "./home.jsx";
import CustomizedTimeline from "./months1.jsx";
import February from "./february.jsx";
import March from "./march.jsx";
import April from "./april.jsx";
import May from "./may.jsx";
import June from "./june.jsx";
import July from "./july.jsx";
import Sept from "./september.jsx";
import October from "./october.jsx";
import Nov from "./november.jsx";
import August from "./august.jsx";
import December from "./december.jsx";
import './App.css';


const centeredStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  marginTop: '20px',
  height: '40vh',
};

function App() {
  return (
    <div className="app-background">
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Home />} />

        {/* January Page */}
        <Route
          path="/january"
          element={
            <>
              <January />
            </>
          }
        />
        <Route
          path="/february"
          element={
            <>
              <February />
            </>
          }
        />
        <Route
          path="/march"
          element={
            <>
              <March />
            </>
          }
        />
        <Route
          path="/april"
          element={
            <>
              <April />
            </>
          }
        />
        <Route
          path="/may"
          element={
            <>
              <May />
            </>
          }
        />
        <Route
          path="/june"
          element={
            <>
              <June />
            </>
          }
        />
        <Route
          path="/july"
          element={
            <>
              <July />
            </>
          }
        />
        <Route
          path="/august"
          element={
            <>
              <August />
            </>
          }
        />
        <Route
          path="/september"
          element={
            <>
              <Sept />
            </>
          }
        />
        <Route
          path="/october"
          element={
            <>
              <October />
            </>
          }
        />
        <Route
          path="/november"
          element={
            <>
              <Nov />
            </>
          }
        />
        <Route
          path="/december"
          element={
            <>
              <December />
            </>
          }
        />

        {/* Additional Routes (e.g., other months) */}
        {/* <Route path="/february" element={<February />} /> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
