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



function June() {
    return (
        <div>
          <Navbar />
          <section id="hero">
            <div className="hero-container" style={centeredStyle}>
              <h1>Solaris June</h1>
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

export default June;

// const TimeL = () => {
  

//   return (
//     <div style={{ width: "1000px", height: "150px", top: "50%", left: "50%", margin: "50px 50px 50px 120px", }}>
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
      title: "2 Powerful Flares",
      id: 1
    },
    {
    title: "Parade of Planets",
    id:2
  },
  {
    title: "June Solistice",
    id:3
   },
  {
    title: "India's Pushpak Milestone",
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
    title: "Sun unleashes 2 powerful X-class solar flares in 12 hours",
    date: "31 May - 1 June 2024",
    description: "Highly active AR3664 sunspot region released powerful solar flares recently, including two major X-class flares within under 12 hours. May 31 at 6:03 p.m. EDT was the first X-class flare, while on June 1 at 4:48 a.m. EDT was the other. X-class is actually the strongest type of flare, and these two events measured X1.18 and X1.43 intensity. These flares happen due to magnetic reconnection, where the twisted magnetic field lines of the sun's plasma break and release tremendous energy. This causes explosions on the surface of the sun. These eruptions threw heavy radiation bursts towards Earth that caused radio blackouts in the affected areas. The first blackout hit the Western U.S. and the Pacific, while the second affected Europe, Africa, and Asia. The radiation ionized the upper atmosphere, thus making it denser. Such an environment interfered with high-frequency radio waves, which made it harder for radio signals to travel over long distances. These then weaken or fail entirely. Such blackouts are quite common during intense solar activity.",
    image: "https://cdn.mos.cms.futurecdn.net/89ua9VkK9Q9Bj2ompBxdp3-1200-80.jpg",
    id: 1
  },
  {
    title: "Parade of Planets!",
    date: "3 June 2024",
    description: "On June 3, 2024, there was a spectacular celestial event when six planets aligned in the pre-dawn sky: Mercury, Mars, Jupiter, Saturn, Uranus, and Neptune. Such an alignment is sometimes referred to as a 'planet parade' To an observer on Earth, alignments occur when multiple planets appear close together along the ecliptic plane. Yet, because of their distance from the Sun and the difference in brightness, not all these planets could be seen with the naked eye. Observers in the Northern Hemisphere who ventured out before sunrise could spot Mars and Saturn without optical aids, as they shone brightly enough to pierce through the morning twilight. Mercury and Jupiter were positioned low on the east-northeast horizon, their visibility hindered by the Sun's glare, making them challenging to observe without binoculars or a telescope. Uranus and Neptune are much fainter and more distant, and needed telescopic help and the darkest of skies to be observed. This alignment, though very captivating, reminded us of how our solar system's planetary positions are in a state of constant change.",
    image: "https://www.astronomy.com/wp-content/uploads/sites/2/2024/05/June3-20minsbeforesunrise-lookingeast.png",
    id: 2
  },
  {
    title: "June Solistice",
    date: "21 June 2024",
    description: "The spot on Earth directly under the Sun throughout the year is known as the subsolar point. This spot moves up and down along a north-south line throughout the year. It reaches its southernmost position on the December solstice and then begins to move northward. On the March equinox, it crosses the equator and continues north until it reaches its northernmost position on the June solstice. Then it reverses its direction and heads south. The term ‘solstice’ is derived from Latin, which uses the words sol for Sun and sistere to describe the act of standing still, describing how the Sun seems to stand still before reversing direction. With spring coming into summer, the Sun rises farther north and sets farther south with each passing day. By the solstice, it is at its highest point in the sky before starting again its slow journey southward.",
    image: "https://c.tadst.com/gfx/900x506/equinoxes-and-solstice.png?1",
    id:3
  },
  {
    title: "India's Pushpak Achieves Autonomous Landing Milestone",
    date: "23 June 2024",
    description: "India has just completed a series of experiments to exhibit its own self-made homegrown technology, wherein its reusable space plane is named Pushpak. The last test carried out on June 23, 2024 in Karnataka, proved a challenging experience where Pushpak did its precise horizontal landing under stringent conditions of landing. This marked a move for India in its ultimate target of achieving the reusable launch vehicle by the end of this decade. Such technology will make future space missions cheaper by allowing rockets to be reused. The test was led by the Vikram Sarabhai Space Centre (VSSC) and involved releasing the 21-foot-long space plane from a Chinook helicopter at an altitude of 2.8 miles (4.5 km). Pushpak was intentionally released off-center from the runway to test its autonomous landing capabilities. The vehicle did maneuver itself, and in spite of very strong winds, landed accurately at the center of the runway. ISRO is working on taking this technology a little further ahead by sending the prototype into space for returns under autonomous control.",
    image: "https://cdn.mos.cms.futurecdn.net/ACASaTCVr957GFdrHCvLgg-1200-80.jpg",
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

