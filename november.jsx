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



function Nov() {
    return (
        <div>
          <Navbar />
          <section id="hero">
            <div className="hero-container" style={centeredStyle}>
              <h1>Noble November</h1>
            </div>
          </section>
          <main id="main">
            <section id="about" className="about">
              <div className="container">
                <div className="section-title" style={centeredStyle}>
                  
                  <p>
                    <br />
                    {/* March 2024 witnessed many space and astronomical events. ISRO's RLV Landing Experiment proved reusable technology by landing autonomously with Pushpak. SpaceX Crew-8 carried humans to the ISS. The KAIROS rocket caught ablaze just above Japan. Russia's Soyuz 2.1a launched many satellites successfully; there was a transition season on the March Equinox. */}
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

export default Nov;
  
// const TimeL = () => {
//   const items = [
//     {
//       title: "Hera Asteroid Mission",
      
//     },
//     {
//     title: "NASA’s Europa Clipper",
    
//   } ];

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
      title: "SpaceX CRS-31 Launch",
      id:1
      
    },
    {
    title: "ISRO's GSAT-20 Satellite",
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

const events = [
  {
    title: "SpaceX CRS-31",
    date: "4th November 2024",
    description: "On November 4th in the year 2024, precisely at 9:29 PM EST, SpaceX had successfully completed the launch of its 31st Commercial Resupply Services (CRS-31) mission toward the International Space Station from Launch Complex 39A at NASA's Kennedy Space Center, Florida. The Dragon spacecraft contained over 6,000 pounds of cargo including scientific experiments, provisions for the crew onboard, as well as necessary hardware for operations related to the ISS. It was also the first and the only such reboost of the ISS through a Dragon on CRS-31. The Dragon fired its Draco thrusters for 12.5 minutes and then adjusted the orbit of the station to replace that lost from atmospheric drag on November 8, 2024. Such capability adds to the flexibility of operation of the ISS in terms of altitudinal maintenance.The mission officially ended with the Dragon undocking on December 16, 2024, with a safe splashdown in the Gulf of Mexico to ensure the retrieval of precious scientific data and materials for further analysis..",
    id:1,
    //image: "https://www.nasa.gov/wp-content/uploads/2024/03/crew8launch030324.jpg?resize=2000,1333",
  },
  {
    title: "GSAT-20 Satellite",
    date: "18th November 2024",
    description: "On 18 November 2024, India had the distinction of successfully getting GSAT-20 aboard SpaceX's Falcon 9 rocket from Cape Canaveral, Florida. In fact, this was the first time an Indian satellite was launched on a rocket based entirely in the US. GSAT-20 is a highly throughput communication satellite and weights over 4,700 kilograms, aimed at revolutionizing telecommunications architecture in India. This satellite will offer high-end broadband connectivity, which will support projects like Smart cities and provide access to the internet even in remote and underprivileged regions.The satellite was flown into geosynchronous transfer orbit after a flight of 34 minutes. GSAT-20 was confirmed healthy by the Indian Space Research Organisation (ISRO) upon launch, and operations were immediately taken over by the Master Control Facility. Designed for an operational life span of 14 years, GSAT-20 is optimally equipped to give a massive boost towards the Internet capability of India and assist in closing the digital divide in the country. The successful deployment of GSAT-20 is set to prove a booster for building India much more in digital infrastructure and connectivity in making the shift of India into a high-tech future and an economy-rich state.",
    id:2,
    //image: "https://www.reuters.com/resizer/v2/AEJ6OKT6JNJIXA3T67O7QTNVW4.jpg?auth=fbb1e0434ec4136d2323e6fda893c5b9c3d4de0f32b64b180a1f491ca235fe99&width=1200&quality=80",
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

