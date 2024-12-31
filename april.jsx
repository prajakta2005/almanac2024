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



function April() {
    return (
        <div>
          <Navbar />
          <section id="hero">
            <div className="hero-container" style={centeredStyle}>
              <h1>Astonishing April</h1>
            </div>
          </section>
          <main id="main">
            <section id="about" className="about">
              <div className="container">
                <div className="section-title" style={centeredStyle}>
                  
                  <p>
                    <br />
                   in progress

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

export default April;


// const TimeL = () => {
  

//   return (
//     <div style={{ width: "1000px", height: "150px", top: "50%", left: "50%", margin: "50px 50px 50px 100px", }}>
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
  const items = [{
    title: "NASA's APEP Mission",
    id: 1
  },
  {
    title: "Lyrid Meteor Shower",
    id:2
   },
  {
    title: "Rocket Lab's EElectron Launch",
    id:3
  },
{
  title: "World's Highest Observatory TAO",
  id:4
}, ];

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
      <div style={{ width: "1000px", height: "150px", top: "50%", left: "50%", margin: "50px 50px 50px 150px", }}>
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

      <div style={{ width: "1000px", margin: "20px auto" }}>
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
//   container: {
//     width: "120%",
//     margin: "0 10px 10px -100px",
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
//     maxWidth: "100%",
//     borderRadius: "8px",
//   },
// };


const events = [
  {
    title: "NASA's APEP Mission",
    date: "8 April 2024",
    description: "On April 8, 2024, the Atmospheric Perturbations around Eclipse Path (APEP)mission was conducted by NASA during the total solar eclipse. This involved launching three sounding rockets from the Wallops Flight Facility in Virginia to study the ionosphere’s response to the eclipse. To observe change in electric and magnetic fields, density, and temperature , rockets were launched sequentially before, during and after the eclipse peak, at altitude of approximately 410-413 km.The data gathered helps refine models predicting ionospheric disturbances, which can affect communication and navigation systems. This mission follows earlier tests conducted during the 2023 annular solar eclipse to explore similar atmospheric phenomena.",
    image: "https://science.nasa.gov/wp-content/uploads/2024/03/img-8521-group1.jpg?w=1536&format=webp",
    id:1
  },
  {
    title: "Lyrid Meteor Shower",
    date: "21-22 April 2024",
    description: "The Lyrid Meteor Shower in 2024 peaked on the night of April 21-22. The Northern Hemisphere had the best opportunities to view these meteor showers.Originating from the debris of Comet C/1861 G1 Thatcher, it is well-known for its bright meteors and occasional fireballs. Lyrids have long been one of the oldest recorded meteor showers.Under optimal conditions, observers saw about 10-20 meteors per hour at the peak. The best time to watch was after midnight, with meteors radiating from the constellation Lyra, near the bright star Vega, though they appeared across the sky.",
    image: "https://media.istockphoto.com/id/964611070/photo/funny-burrowing-owl-athene-cunicularia.jpg?s=1024x1024&w=is&k=20&c=j_cAWMExBpfMD88Iy8RodXCHFeIjnvb1fkh8V5mJzU0=",
    id:2
  },
  {
    title: "Rocket Lab's EElectron Launch",
    date: "23 April 2024",
    description: "On Apr 23, 2024 Rocket Lab launched an Electron rocket from New Zealand carrying NASA’s Advanced Composite Solar Sail System(ACS3) and South Korea’s NEONSAT - 1 satellite. NEONSAT-1, an Earth-Observation satellite developed by KAIST, was deployed into a 520 km orbit to support national safety and disaster monitoring. NASA's ACS3, a CubeSat with an 80-square-meter solar sail, was placed in a higher 1,000-kilometer orbit to test sunlight-based propulsion and lightweight composite booms for future space missions. This demonstration seeks to advance solar sail technologies for applications in asteroid reconnaissance, solar observations, and space weather monitoring.",
    image: "https://i0.wp.com/spacenews.com/wp-content/uploads/2024/04/electron-bts.jpg",
    id:3
  },
  {
    title: "World's Highest Observatory: University of Tokyo's TAO",
    date: "30 April 2024",
    description: "On April 30, 2024, The University of Tokyo Atacama Observatory (TAO, the world’s highest astronomical site, officially began its operations. It is located at the top of Cerro Chajnantor in Chile at an altitude of 5,640 meters(18,500 feet).Equipped with 6.5-meter optical- infrared telescope, this state of the art facility, aims to study galaxy evolution and exoplanetary systems under optimal observational conditions afforded by the region’s sparse atmosphere and low moisture levels.TAO houses two advanced instruments: SWIMS, to analyze early galaxies and cosmic dust formation, and MIMIZUKU, for investigating primordial star-forming disks. The project, first envisioned 26 years ago, overcame technical, political, and cultural challenges, incorporating indigenous and governmental input to ensure ethical and safe construction. It represents a leap forward for infrared astronomy, complementing other ground- and space-based observatories. ",
    image: "https://cdn.mos.cms.futurecdn.net/SiwjQwWZGPV5EVX6NjzaCn-650-80.jpg.webp",
    id:4
  },
  
//   {
//     title: "Soyuz-2.1a Launch",
//     date: "29th March 2024",
//     description: "On March 29, 2024, Russia launched a Soyuz-2.1a rocket from Baikonur Cosmodrome, carrying several satellites into orbit as part of ongoing missions aimed at enhancing communications and Earth observation capabilities. The launch occurred at approximately 11:00 AM local time and successfully deployed multiple payloads into their designated orbits.",
//     image: "https://pbs.twimg.com/media/GUAauViXEAAPGw2?format=jpg&name=4096x4096",
//   },
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
