import react , {useRef} from "react";
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

  const centeredStyle2 = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between', // Ensure proper spacing between cards
  alignItems: 'center', // Align items to the center vertically
  gap: '10px', // Space between cards
  marginTop: '20px',
  padding: '10px', // Optional padding around the row
};



function February() {
    return (
        <div>
          <Navbar />
          <section id="hero">
            <div className="hero-container" style={centeredStyle}>
              <h1>February</h1>
            </div>
          </section>
          <main id="main">
            <section id="about" className="about">
              <div className="container">
                <div className="section-title" style={centeredStyle}>
                  
                  <p>
                    <br />
                    From greeting the year with a launch to sending January off with beautiful celestial showers and passes, this month truly was a cosmic beginning of 2024. 
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

export default February;
  

const events = [
  {
    title: "NASA‘s PACE launch",
    date: "8 February 2024",
    description: "On 8th feb 2024 the PACE satellite was launched by NASA through Space- X Falcon -9 spacecraft from Cape Canaveral Space Force Station's Space Launch Complex 40 in Florida. PACE stands for Plankton Aerosol Cloud Ocean Ecosystem. The main objective of the event is to study the health of Earth's climate and ocean. The mission also aims at studying the exchange of carbon dioxide between oceans and atmosphere. PACE is an orbiter that has devices to monitor the oceans on the basis of the colour helps to understand the microbiology flourishing beneath the oceans. It has two more payloads one of them is the HARP-2 that stands for Hyper Angle Rainbow Polarimeter to study the cloud bows and predetermine the size of the droplets of the showers. And the SPEX-1 the spectral polarimeter generally used for planetary explorations while in this mission its objective is to explore Earth predominantly.",
    image: "https://via.placeholder.com/300",
    id: 1,
  },
  {
    title: "IM-1 Odysseus Satellite launch",
    date: "15th February 2024",
    description: "The United States accomplished its first ever commercial lunar mission with  Intuitive Machines successfully launching the Nova C Lander also known as Odysseus through a Falcon 9 Space-X space craft.the launch was scheduled on 15th February 2024 from the Kennedy Space Centre.The mission achieved a successful landing on 22nd of Feb 2024  on the south pole of the moon within a 1 kilometer diameter of the Malapert Crater. The Nova -C lunar lander is the first one to utilize methane and oxygen as liquid propellants to fuel the mission. The lander stands about 4 metres in length and 1.57 metres wide weighing around 1908 kilograms.It carries 5 different payloads for different purposes.The NASA payload includes the Laser Retro-Reflector Array (LRA), Navigation Doppler Lidar for Precise Velocity and Range Sensing (NDL), Lunar Node 1 Navigation Demonstrator (LN-1), Stereo Cameras for Lunar Plume-Surface Studies (SCALPSS), and Radio wave Observation at the Lunar Surface of the photoElectron.",
    image: "https://via.placeholder.com/300",
    id: 2,
  },
  {
    title: "National Science Day Celebration at IUCAA",
    date: "28th February 2024",
    description: "The Inter-University Centre for Astronomy and Astrophysics (IUCAA) celebrates National Science Day every year on February 28th honoring the legacy of Sir C.V. Raman on his birth anniversary.. The organization holds a science exhibition demonstrating various projects and innovations in the field of space sciences and even different science realms that are being worked on in India. This year the event was based on a special theme Facilities and Science of IUCAA aligning with the National theme of “Indigenous Technologies for Viksit Bharat”. Students from diverse educational backgrounds and institutions showcased experimental projects, accompanied by detailed explanations . The exhibition featured project models showcasing groundbreaking missions such as Chandrayaan-1, Chandrayaan-3, Mangalyaan, and Aditya L1, alongside scientific projects like the Horn Antennae, Affordable Small Radio Telescope, Cosmic Ray Muon Detector, Gravitational Lensing, and Faraday Rotation.The event welcomed researchers and students from around the globe, who explored the exhibition  from the projects on display.",
    image: "https://via.placeholder.com/300",
    id: 3,
  },
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
  const items = [{
    title: "NASA‘s PACE launch",
    id: 1
  },
  {
    title: "IM-1 Odysseus Satellite launch",
    id: 2
  },
 {
  title: "National Science Day Celebration at IUCAA",
  id: 3
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
      <div style={{ width: "1000px", height: "150px", top: "50%", left: "50%", margin: "50px 50px 50px 300px", }}>
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


// const TimeL = () => {
//   const items = [{
//     title: "NASA‘s PACE launch",
//     id: 1
//   },
//   {
//     title: "IM-1 Odysseus Satellite launch",
//     id: 2
//   },
//  {
//   title: "National Science Day Celebration at IUCAA",
//   id: 3
//  } ];

//   return (
//     <div style={{ width: "1000px", height: "150px", top: "50%", left: "50%", margin: "50px 50px 50px 200px", }}>
//       <Chrono items={items} 
//       hideControls={true}
//       disableToolbar={true} />
//     </div>
//   )
// }





// const AlternatingEvents = (id) => {
//   return (
//     <div style={styles.container}>
//       {events.map((event, index) => {
//         const isEven = id % 2 === 0;

//         return (
//           <div
//             key={index}
//             style={{
//               ...styles.eventContainer,
//               flexDirection: isEven ? "row" : "row-reverse",
//             }}
//           >
//             <div style={styles.textContainer}>
//               <h2 style={styles.title}>{events[id].title}</h2>
//               <h3 style={styles.date}>{events[id].date}</h3>
//               <p style={styles.description}>{events[id].description}</p>
//             </div>
//             <div style={styles.imageContainer}>
//               <img
//                 src={events[id].image}
//                 alt={`Event `}
//                 style={styles.image}
//               />
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
