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



function December() {
    return (
        <div>
          <Navbar />
          <section id="hero">
            <div className="hero-container" style={centeredStyle}>
              <h1>Dynamic December</h1>
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

export default December;
  
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
      title: "SpaceX's Advanced GPS",
      id:1
      
    },
    {
    title: "China's Satellite Constellation",
    id:2
    
  },
{
  title: "Binary Stars of Sagittarius A*",
  id:3
},
  {
    title: "Parker Solar Probe Flyby",
    id:4
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
    title: "SpaceX's Advanced US Space Force GPS",
    date: "16th December 2024",
    description: "On the night of December 16th, SpaceX launched a set of advanced satellites. These satellites are hoped to improve the GPS capabilities in all fields of society. ",
    image: "https://www.reuters.com/resizer/v2/AEJ6OKT6JNJIXA3T67O7QTNVW4.jpg?auth=fbb1e0434ec4136d2323e6fda893c5b9c3d4de0f32b64b180a1f491ca235fe99&width=1200&quality=80",
    id:1
  },
  {
      title: "China's first launch for satellite constellation",
      date: "16th December 2024",
      description: "The plan to built a second satellite-constellation for internet in LEO (low Earth orbit) has begun. On December 16th, it launched it's first set of 10 satellites, out of a total of the 13,000 planned. this megaconstellation 'Guowang' is one of the more broadband constellations planned by the Chinese government, being similar to SpaceX's Starlink megaconstellations.",
      image: "https://www.reuters.com/resizer/v2/AEJ6OKT6JNJIXA3T67O7QTNVW4.jpg?auth=fbb1e0434ec4136d2323e6fda893c5b9c3d4de0f32b64b180a1f491ca235fe99&width=1200&quality=80",
      id:2
    },
  {
    title: "Binary Stars at the center of the Milky Way",
    date: "17th December 2024",
    description: "In the findings published by astronomers on December 17th, the first binary stars, named D9, were discovered. This binary system orbits the supermassive blackhole that is at the center of our Milky Way galaxy. The survival of these stars around the black hole, Sagittarius A*, indicates that the surrounding environment may be stable and ideal enough to allow births of planets. D9 pair is estimated to be 2.7 Myr old, eventually being forced to merge, triggering a stellar merger.",
    image: "https://cdn.mos.cms.futurecdn.net/wdoYEMJruSsZRt9uJj8kiJ-650-80.jpg.webp",
    id:3
  },
  {
    title: "NASA Solar Probe Closest Fly-by",
    date: "24th December 2024",
    description: "NASA's Parker Solar Probe achieved a historical moment by being the first man-made object to fly closest ever to the Sun's surface. This opens up even bigger and explorative possibilities for humanity and astronomicla research. The Parker Solar Probe, launched in 2018 did seven flybys around Venus to direct itself towards the burning star. It reached an ideal distance where studying the Sun would be executable all while not being affected by the immense energy and heat of the star. This study helps scientists and researchers understand the features and measurements of the region, traces of solar winds and more. The flybys of the Probe have been beneficial for not only the Sun but our solar system as well, helping gather data and information like coronal mass ejections, Venus' radio emissions and unexpected solar enrgetic particles.",
    image: "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/psp/Parker-Close-to-Sun_Dec2021-REVISED.png?w=640&format=webp&fit=clip&crop=faces%2Cfocalpoint",
    id:4
  },
  ,
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

