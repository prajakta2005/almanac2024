import react, {useRef} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HeroSection from './herosec.jsx';
import Navbar from './navbar.jsx';
import Footer from './footer.jsx';
import { Chrono } from "react-chrono";
import './styles.css';

const centeredStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginTop: '20px',
  };

  // const centeredStyle2 = {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   // justifyContent: 'center',
  //   alignItems: 'center',
  //   gap: '20px',
  //   marginTop: '20px',
  //   height: '50vh',
  // };

  const centeredStyle2 = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between', // Ensure proper spacing between cards
  alignItems: 'center', // Align items to the center vertically
  gap: '10px', // Space between cards
  marginTop: '20px',
  padding: '10px', // Optional padding around the row
};



function October() {
    return (
        <div>
          <Navbar />
          <section id="hero">
            <div className="hero-container" style={centeredStyle}>
              <h1>Optimistic October</h1>
            </div>
          </section>
          <main id="main">
            <section id="about" className="about">
              <div className="container">
                <div className="section-title" style={centeredStyle}>
                  
                  <p>
                    <br />
                   in process
                  </p>
                  <br />
                </div>
                <div >
                  <TimelineWithScroll />
                </div>
              </div>
            </section>
          </main>
          <Footer />

        </div>
      
    );
  }

export default October;
  

// const TimeL = () => {
  

//   return (
//     <div style={{ width: "1000px", height: "150px", top: "50%", left: "50%", margin: "50px 50px 50px 305px", }}>
//       <Chrono items={items} 
//       hideControls={true}
//       disableToolbar={true} />
//     </div>
//   )
// }


const AlternatingEvents = ({ id }) => {
  const event = events.find(event => event.id === id);

  if (!event) return <div>Event not found!</div>;

  const isEven = event.id % 2 === 0;

  return (
    <div style={styles.container}>
      <div
        key={event.id}
        style={{
          ...styles.eventContainer,
          flexDirection: !isEven ? "row" : "row-reverse",
        }}
      >
        <div style={styles.textContainer}>
          <h2 style={styles.title}>{event.title}</h2>
          <h3 style={styles.date}>{event.date}</h3>
          <p style={styles.description}>{event.description}</p>
        </div>
        <div style={styles.imageContainer}>
          <img
            src={event.image}
            alt={`Event ${event.id}`}
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

const TimelineWithScroll = () => {
  
  const items = [
    {
      title: "Hera Asteroid Mission",
      id:1
      
    },
    {
    title: "NASA’s Europa Clipper",
    id:2
    
  } ];
  // Refs for each event info section
  const infoRefs = useRef([]);

  const scrollToEventInfo = (id) => {
    const ref = infoRefs.current[id];
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Timeline Component */}
      <div style={{ width: "500px", height: "150px", top: "50%", left: "50%", margin: "50px 50px 50px 50px", }}>
        <Chrono
        hideControls={true}
        disableToolbar={true}
          items={items.map((event) => ({
            title: (
              <span
                style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
                onClick={() => scrollToEventInfo(event.id)}
              >
                {event.title}
              </span>
            ),
          }))}
        />
      </div>

      <div style={{ width: "500px", margin: "50px 200px 50px 200px" }}>
        {events.map((event) => (
          <div
            key={event.id}
            ref={(el) => (infoRefs.current[event.id] = el)} // Creating a ref for each event
          >
            <AlternatingEvents id={event.id} />
          </div>
        ))}
      </div>
    </div>
    
)
}

// const styles = {
  const styles = {
    container: {
      width: "120%",
      margin: "0 10px 10px -100px",
      padding: "20px",
    },
    eventContainer: {
      display: "flex",
      alignItems: "center",
      marginBottom: "50px", // Increased spacing between events
      gap: "20px",
    },
    textContainer: {
      flex: 1,
      padding: "10px",
    },
    title: {
      fontSize: "26px", // Increased title size
      marginBottom: "15px",
    },
    date: {
      fontSize: "20px",
      marginBottom: "15px",
    },
    description: {
      fontSize: "18px", // Slightly larger description text
      lineHeight: "2", // Increased line spacing for descriptions
      marginBottom: "20px", // Added space below description
    },
    imageContainer: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
    },
    image: {
      maxWidth: "100%",
      borderRadius: "8px",
      height: "350px", // Increased height
      width: "500px", // Increased width
      objectFit: "cover", // Ensures the image scales properly
    },
  };
//   container: {
//     width: "300%",
//     margin: "0 10px 10px -450px",
//     padding: "20px",
//   },
//   eventContainer: {
//     display: "flex",
//     alignItems: "center",
//     marginBottom: "40px",
//     gap: "20px",
//   },
//   textContainer: {
//     flex: 1,
//     padding: "10px",
//   },
//   title: {
//     fontSize: "24px",
//     marginBottom: "10px",
//   },
//   date: {
//     fontSize: "20px",
//     marginBottom: "10px",
//   },
//   description: {
//     fontSize: "16px",
//     lineHeight: "1.5",
//   },
//   imageContainer: {
//     flex: 1,
//     display: "flex",
//     justifyContent: "center",
//   },
//   image: {
//     maxWidth: "200%",
//     borderRadius: "8px",
//   },
// };



const events = [
  {
    title: "Hera Asteroid Mission",
    date: "7 October 2024",
    description: "ESA’s Hera mission lifted off on a SpaceX Falcon 9 from Cape Canaveral Space Force Station in Florida, USA, on 7 October at 10:52 local time (16:52 CEST, 14:52 UTC). Hera is ESA’s first planetary defence mission. It will fly to a unique target among the 1.3 million asteroids in our Solar System – the only body to have had its orbit shifted by human action – to solve lingering unknowns associated with its deflection. Hera will carry out the first detailed survey of a ‘binary’ – or double-body – asteroid, 65803 Didymos, which is orbited by a smaller body, Dimorphous. Hera’s main focus will be Dimorphic, whose orbit around the main body was previously altered by NASA’s kinetic-impacting DART spacecraft. By sharpening scientific understanding of this ‘kinetic impact’ technique of asteroid deflection, Hera should turn the experiment into a well-understood and repeatable technique for protecting Earth from an asteroid on a collision course.",
    image: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2024/10/hera_asteroid_mission_launches_to_the_sky_on_7_october_20246/26347787-2-eng-GB/Hera_asteroid_mission_launches_to_the_sky_on_7_October_2024_pillars.jpg",
    id:1
  },
  {
    title: "NASA’s Europa Clipper Sails Toward Ocean Moon of Jupiter",
    date: "14 October 2024",
    description: "NASA’s Europa Clipper has embarked on its long voyage to Jupiter, where it will investigate Europa, a moon with an enormous subsurface ocean that may have conditions to support life. . EDT Monday aboard a SpaceX Falcon Heavy rocket from Launch Pad 39A at NASA’s Kennedy Space Center in Florida. The largest spacecraft NASA ever built for a mission headed to another planet, Europa Clipper, also is the first NASA mission dedicated to studying an ocean world beyond Earth. The spacecraft will travel 1.8 billion miles (2.9 billion kilometers) on a trajectory that will leverage the power of gravity assists, first to Mars in four months and then back to Earth for another gravity assist flyby in 2026. After it begins orbiting Jupiter in April 2030, the spacecraft will fly past Europa 49 times. By exploring the unknown, Europa Clipper will help us better understand whether there is the potential for life not just within our solar system, but among the billions of moons and planets beyond our Sun.",
    image: "https://www.nasa.gov/wp-content/uploads/2024/03/crew8launch030324.jpg?resize=2000,1333",
    id:2
  },
  
  // {
  //   title: "March Equinox",
  //   date: "20th March 2024",
  //   description: "The March equinox—aka the vernal equinox—marks the sun’s crossing above Earth’s equator, moving from south to north. Earth’s tilt on its axis is what causes this northward shift of the sun’s path across our sky at this time of year. Earth’s tilt is now bringing spring and summer to the Northern Hemisphere. At the same time, the March equinox marks the beginning of autumn—and a shift toward winter—in the Southern Hemisphere..",
  //   image: "https://c.tadst.com/gfx/750w/march-equinox-dark.png?1",
  // },
  // {
  //   title: "ISRO’s RLV Landing Experiment",
  //   date: "22nd March 2024",
  //   description: "ISRO has successfully completed the RLV LEX-02 landing experiment on March 22, 2024, at the Aeronautical Test Range in Chitradurga, Karnataka. This is an important milestone in the technology of reusable launch vehicle technology, wherein the autonomous landing of the RLV was carried out under challenging conditions. In this experiment, the winged vehicle, Pushpak, was airlifted by an Indian Air Force Chinook helicopter and released from an altitude of 4.5 km. After release, Pushpak autonomously navigated toward the runway, making necessary corrections to its trajectory before landing precisely and coming to a stop using its brake parachute and landing gear systems.",
  //   image: "https://www.isro.gov.in/media_isro/image/RLV/RLVLEX026.jpg",
  // },
  // {
  //   title: "Soyuz-2.1a Launch",
  //   date: "29th March 2024",
  //   description: "On March 29, 2024, Russia launched a Soyuz-2.1a rocket from Baikonur Cosmodrome, carrying several satellites into orbit as part of ongoing missions aimed at enhancing communications and Earth observation capabilities. The launch occurred at approximately 11:00 AM local time and successfully deployed multiple payloads into their designated orbits.",
  //   image: "https://pbs.twimg.com/media/GUAauViXEAAPGw2?format=jpg&name=4096x4096",
  // },
];

// const AlternatingEvents = () => {
//   return (
//     <div style={styles.container}>
//       {events.map((event, index) => {
//         const isEven = index % 2 === 0;

//         return (
//           <div
//             key={index}
//             style={{
//               ...styles.eventContainer,
//               flexDirection: isEven ? "row" : "row-reverse",
//             }}
//           >
//             <div style={styles.textContainer}>
//               <h2 style={styles.title}>{event.title}</h2>
//               <h3 style={styles.date}>{event.date}</h3>
//               <p style={styles.description}>{event.description}</p>
//             </div>
//             <div style={styles.imageContainer}>
//               <img
//                 src={event.image}
//                 alt={`Event ${index + 1}`}
//                 style={styles.image}
//               />
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     width: "80%",
//     margin: "0 auto",
//     padding: "20px",
//   },
//   eventContainer: {
//     display: "flex",
//     alignItems: "center",
//     marginBottom: "40px",
//     gap: "20px",
//   },
//   textContainer: {
//     flex: 1,
//     padding: "10px",
//   },
//   title: {
//     fontSize: "24px",
//     marginBottom: "10px",
//   },
//   date: {
//     fontSize: "20px",
//     marginBottom: "10px",
//   },
//   description: {
//     fontSize: "16px",
//     lineHeight: "1.5",
//   },
//   imageContainer: {
//     flex: 0.5,
//     display: "flex",
//     justifyContent: "center",
//   },
//   image: {
//     maxWidth: "400%",
//     borderRadius: "1px",
//     height: "auto",
//     display: "block",
//   },
// };

