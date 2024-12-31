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



function May() {
    return (
        <div>
          <Navbar />
          <section id="hero">
            <div className="hero-container" style={centeredStyle}>
              <h1>Melodious May</h1>
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

export default May;
  
// const TimeL = () => {
  

//   return (
//     <div style={{ width: "1000px", height: "150px", top: "50%", left: "50%", margin: "50px 50px 50px 200px", }}>
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
      title: "Launch of Chang’e 6 Mission",
      id: 1
      
    },
    {
    title: "Discovery of an Earth-sized planet",
    id: 2
    
  },
  {
    title: "Largest mass migration caused by a solar superstorm",
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
    title: "Launch of Chang’e 6 Mission",
    date: "3 May 2024",
    description: "Chang'e 6 was the sixth robotic mission to explore the Moon, launched by the China National Space Administration (CNSA). It was also China's second mission to bring back lunar samples. The mission is named after Chang'e, the Chinese moon goddess. Unlike previous missions, Chang'e 6 collected samples from the far side of the Moon, a region that had never been explored this way before.The mission began on May 3, 2024, when the spacecraft was launched from the Wenchang Space Launch Site on Hainan Island. On June 1, 2024, its lander and rover successfully landed on the far side of the moon. The lander used a robotic scoop and drill to collect 1,935.3 grams of lunar soil and rock. These samples were then placed in an ascender module, which launched back into lunar orbit on June 3, 2024. Once in orbit, the ascender docked with an orbiter module on June 6, 2024. The samples were transferred to a re-entry capsule, which returned to Earth. The lander and rover also carried out scientific studies while on the moon. The mission lasted 53 days in total, ending on June 25, 2024, when the capsule carrying the lunar samples landed safely in Inner Mongolia. ",
    image: "https://en.wikipedia.org/wiki/File:Chang%27e_6_lander_and_ascender.jpg",
    id: 1
  },
  {
    title: "Discovery of an Earth-sized planet",
    // date: "??",
    description: "Gliese 12b had been characterised as a possibly habitable exoplanet, which orbits a small and relatively cool red dwarf star that lies 40 light years from Earth in the direction of the constellation Pisces. The star is a miniature one, only 27% the size of the sun and 60% as hot. Gliese 12b stays within the habitable zone because of its orbital period; one rotation around its host star takes 12.8 days, with a diameter smaller than Earth's but substantially larger than Venus's, so its surface temperature would reach as high as 107°F (42°C) if it has no atmosphere. Masayuki Kuzuhara of the Astrobiology Centre and Akihiko Fukui of the University of Tokyo termed it the 'nearest, transiting, temperate, Earth-size world' so far discovered. Its atmosphere will be studied in the future for water and other life-supporting components.",
    image: "https://media.cnn.com/api/v1/images/stellar/prod/gl12b-illustration-less-atmosphere-ac-copy.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
    id: 2,
  },
  {
    title: "Largest mass migration' caused by a solar superstorm",
    //date: "6 January 2024",
    description: "A solar superstorm in May lit up the night sky with stunning auroras but caused problems for satellites in space. The storm made Earth's upper atmosphere thicker, which pulled satellites and debris lower by about 590 feet (180 meters) per day. To stay in orbit, thousands of satellites had to fire their thrusters at the same time to move back up. This sudden movement made it harder for systems to avoid collisions because they couldn’t track the changing paths quickly enough, according to a paper on arXiv.",
    image: "https://cdn.mos.cms.futurecdn.net/qcvGQExVtJBjADkSv5MjkT-650-80.jpg.webp",
    id: 3,
  },
  
//   {
//     title: "ISRO’s RLV Landing Experiment",
//     date: "22nd March 2024",
//     description: "ISRO has successfully completed the RLV LEX-02 landing experiment on March 22, 2024, at the Aeronautical Test Range in Chitradurga, Karnataka. This is an important milestone in the technology of reusable launch vehicle technology, wherein the autonomous landing of the RLV was carried out under challenging conditions. In this experiment, the winged vehicle, Pushpak, was airlifted by an Indian Air Force Chinook helicopter and released from an altitude of 4.5 km. After release, Pushpak autonomously navigated toward the runway, making necessary corrections to its trajectory before landing precisely and coming to a stop using its brake parachute and landing gear systems.",
//     image: "https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg",
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

