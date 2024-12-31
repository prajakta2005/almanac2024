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



function July() {
    return (
        <div>
          <Navbar />
          <section id="hero">
            <div className="hero-container" style={centeredStyle}>
              <h1>Juvenile July</h1>
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

export default July;
  

// const TimeL = () => {
//   

//   return (
//     <div style={{ width: "1000px", height: "150px", top: "50%", left: "50%", margin: "50px 50px 50px 205px", }}>
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
          title: "Europe’s Ariane 6 was launched",
          id:1
          
        },
        {
        title: "Southern δ-Aquariid meteor shower 2024",
        id:2
        
      },
      {
        title: "Hubble captures a spiralling galaxy",
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




const events = [
  {
    title: "Europe’s Ariane 6 was launched",
    date: "9 July 2024",
    description: "Operated by the French company Arianespace on the behalf of the European Space Association, the long awaited Ariane 6 was finally launched on the 9th of July. Ariane 6 was initially scheduled to debut in 2020, but global issues like Covid-19, Wars between Russia and Ukraine and other technical issues pushed the first liftoff of this rocket to 2024. The Ariane 6 is a replacement rocket after retirement of the Ariane 5, which itself performed 117 flights for over 3 decades. The Ariane 6 ‘will ensure our guaranteed, autonomous access to space, and all of the science, Earth observation, technology development and commercial possibilities that it entails,’ESA officials wrote in a preview of the debut launch.",
    image: "https://media.gettyimages.com/id/170462856/photo/dog-working-comfortably-from-home.jpg?s=612x612&w=0&k=20&c=bkWU83XcvVdxQBvQmoqVNkM-zLZsGy4BZPWWQQqzMok=",
    id: 1
  },
  {
    title: "Southern δ-Aquariid meteor shower 2024",
    date: "12 July to 23 August 2024",
    description: "The southern delta Aquariid meteor shower was visible from mid July to Late August. The meteor shower displayed around 20 meteors per hour at an average speed of roughly 40km/s. The meteors are fragments of passing comets. The source comet for this shower is still unknown, but comet 96P Machholz is the suspected source. Comet Machholz was discovered by Donald Machholz in 1986 and is around 6.4km across.",
    image: "https://media.gettyimages.com/id/1361767161/photo/cat-meowing-yawning-laughing-with-rose-gold-pink-background.jpg?s=612x612&w=0&k=20&c=PkySFRjkcLgu7PzYOtFxWejJU8CuJkRByxdSUZ0OqTA=",
    id:2
  },
  {
    title: "Hubble captures the image of a spiralling galaxy",
    date: "31 July 2024",
    description: "From its vantage point in the low Earth orbit, the Hubble telescope captured a stunning picture of a spiral galaxy ‘NGC 3430’. This galaxy is approximately 100 million light years away in the constellation Leo Minor. The galaxy is a beautiful spiraling scene with bright blue spots indicating the formation of new stars all over it. NGC 3430 is not as dense as the Milky Way and is considered as a ‘regular’ spiral galaxy.",
    image: "https://media.gettyimages.com/id/170462856/photo/dog-working-comfortably-from-home.jpg?s=612x612&w=0&k=20&c=bkWU83XcvVdxQBvQmoqVNkM-zLZsGy4BZPWWQQqzMok=",
    id:3
  },
//   {
//     title: "India's Pushpak Achieves Autonomous Landing Milestone",
//     date: "23 June 2024",
//     description: "India has just completed a series of experiments to exhibit its own self-made homegrown technology, wherein its reusable space plane is named Pushpak. The last test carried out on June 23, 2024 in Karnataka, proved a challenging experience where Pushpak did its precise horizontal landing under stringent conditions of landing. This marked a move for India in its ultimate target of achieving the reusable launch vehicle by the end of this decade. Such technology will make future space missions cheaper by allowing rockets to be reused. The test was led by the Vikram Sarabhai Space Centre (VSSC) and involved releasing the 21-foot-long space plane from a Chinook helicopter at an altitude of 2.8 miles (4.5 km). Pushpak was intentionally released off-center from the runway to test its autonomous landing capabilities. The vehicle did maneuver itself, and in spite of very strong winds, landed accurately at the center of the runway. ISRO is working on taking this technology a little further ahead by sending the prototype into space for returns under autonomous control.",
//     image: "https://cdn.mos.cms.futurecdn.net/ACASaTCVr957GFdrHCvLgg-1200-80.jpg",
//   },
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

