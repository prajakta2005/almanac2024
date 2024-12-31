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



function January() {
    return (
        <div>
          <Navbar />
          <section id="hero">
            <div className="hero-container" style={centeredStyle}>
              <h1>Cosmic January</h1>
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
                  <TimelineWithScroll/>
                </div>
              </div>
            </section>
          </main>
          <Footer />

        </div>
      
    );
  }

export default January;
  


const events = [
  {
    title: "XPoSAT, launched by ISRO on 1st January 2024",
    description: "On January 1st, 2024, PSLV-C58, in its 60th flight, successfully launched its first polarimetry mission, the XPoSAT, to study the polarisation of X-rays. The spacecraft carried two scientific payloads developed by the Raman Research Institute and ISRO. The primary payload POLIX is an X-ray polarimeter for astronomical observations in the 8-30 keV energy bands. It is the first payload in the medium X-ray energy band dedicated to polarimetry measurements. XSPECT is an X-ray spectroscopy and timing payload, which can provide fast timing and good spectroscopic resolution in soft X-rays. The lifespan of the mission is expected to be at least five years. The observatory was placed in a low Earth orbit of 500-700 km..",
    image: "https://www.isro.gov.in/media_isro/image/index/Xposat/xposatimg5.jpg.webp",
    id:1
  },
  {
    title: "The Quadrantids",
    description: "The Quadrantids meteor shower is an annual event that occurs between late December and mid-January and peaks in early January every year. In 2024, it peaked on 4th January, during which its activity recorded was 120 meteors per hour. The Quadrantids are known as the best annual meteor shower. Most meteor showers have two two-day peaks, while the Quadrantids peak for only a few hours. They are best viewed in the Northern Hemisphere during night and pre-dawn hours.",
    image: "https://cdn.mos.cms.futurecdn.net/NaSY98LZjB73PHGrm3QT9H-650-80.jpg.webp",
    id:2
  },
  {
    title: "Orion Nebula visibility",
    description: "On 6th January 2024, the Orion Nebula was clearly visible in the southeastern sky. The Orion Nebula is the most famous nebula among amateur astronomers. It is one of the best and easiest objects to locate in the sky. To find it, you only need to look beneath the three stars that form Orion’s belt. Even under suburban skies, you’ll see it as a tiny misty patch. A telescope will show the nebula as a smooth, smokey cloud with a slightly greenish tint.",
    image: "https://astrogeo.ca/wp-content/uploads/2020/04/Orions-Sword-January-7-2019-Rick-Foster-1465x1536.png",
    id:3
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
    title: "ISRO XPOSAT Launch",
    id: 1
  },
  {
    title: "Orion Nebula visibility",
    id: 3
  },
 {
  title: "The Quadrantids",
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
      <div style={{ width: "1000px", height: "150px", top: "50%", left: "50%", margin: "50px 170px 50px 50px", }}>
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

