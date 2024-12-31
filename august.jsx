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



function August() {
    return (
        <div>
          <Navbar />
          <section id="hero">
            <div className="hero-container" style={centeredStyle}>
              <h1>August</h1>
            </div>
          </section>
          <main id="main">
            <section id="about" className="about">
              <div className="container">
                <div className="section-title" style={centeredStyle}>
                  
                  <p>
                    <br />
                    August in progress
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

export default August;
  


const events = [
  {
    title: "Virgin Galactic VSS Unity",
    date: "10th August 2024",
    description: "On August 10, 2024, Virgin Galactic's VSS Unity completed its first private astronaut mission, Galactic 02, marking a milestone in commercial space tourism. The flight carried Jon Goodwin, an 80-year-old adventurer and Parkinson’s patient, alongside Keisha Schahaff and her daughter Anastatia Mayers, the first Caribbean women in space. Unity reached an altitude of 88.5 kilometers before gliding back to Spaceport America, New Mexico. Virgin Galactic plans monthly flights, despite modest revenue due to lower ticket prices for early customers. The mission highlights the company’s vision of broadening access to space and advancing commercial spaceflight.",
    image: "",
    id: 1
  },
  {
    title: "Indian National Space Day",
    date: "23rd August 2024",
    description: "India celebrated its inaugural National Space Day on August 23, 2024, marking the Chandrayaan-3 mission's historic lunar South Pole landing. The event in New Delhi's Bharat Mandapam featured President Draupadi Murmu, ISRO Chairman Dr. S Somanath, and Minister Dr. Jitendra Singh. Dr. Somanath lauded Chandrayaan-3's success and emphasized global collaboration in space exploration. Dr. Singh highlighted ISRO's rise from its 1969 origins to global prominence, India's burgeoning space economy, and ambitious plans for a space station by 2035 and a lunar landing by 2040. The event showcased India's leadership in space technology and its transformative societal benefits.",
    image: "",
    id:2
  },
  {
    title: "Black Hole Turbulence Breakthrough",
    date: "28th Agusut 2024",
    description: "On August 28, 2024, researchers from Tohoku University and Utsunomiya University reported a breakthrough in understanding turbulence in black hole accretion disks. Using supercomputers like Fugaku and ATERUI II, they conducted the highest-resolution simulations yet, successfully reproducing the inertial range connecting large and small eddies. They discovered that slow magnetosonic waves dominate this range, explaining ion heating in accretion disks and distinguishing their turbulence from solar wind turbulence. This research enhances the interpretation of data from telescopes like the Event Horizon Telescope, offering deeper insights into the extreme physics surrounding black holes. Findings were published in Science Advances.",
    image: "https://c.tadst.com/gfx/750w/march-equinox-dark.png?1",
    id:3
  },
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
          title: "Virgin Galactic VSS Unity",
          id:1
          
        },
        {
        title: "Indian National Space Day",
        id:2
        
      },
      {
        title: "Black Hole Turbulence Breakthrough",
        id:3
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

// 

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

