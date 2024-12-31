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
// import react from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import HeroSection from './herosec.jsx';
// import Navbar from './navbar.jsx';
// import Footer from './footer.jsx';

const centeredStyle2 = {
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

//   const centeredStyle2 = {
//   display: 'flex',
//   flexDirection: 'row',
//   justifyContent: 'space-between', // Ensure proper spacing between cards
//   alignItems: 'center', // Align items to the center vertically
//   gap: '10px', // Space between cards
//   marginTop: '20px',
//   padding: '10px', // Optional padding around the row
// };



function Sept(){
    return (
        <div>
          <Navbar />
          <section id="hero">
            <div className="hero-container" style={centeredStyle}>
              <h1>Serene September</h1>
            </div>
          </section>
          <main id="main">
            <section id="about" className="about">
              <div className="container">
                <div className="section-title" style={centeredStyle2}>
                  
                  <p>
                    <br />
                    September embraced many technical events in 2024. Vision is the right word to describe this month and India along with other countries is working towards achieving new goals, missions and records in the coming years. September 2024 promised and prepared us to witness new discoveries and missions in the near future with new and challenging opportunities in astronomy.

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

export default Sept;
  

// const TimeL = () => {
  
//   return (
//     <div style={{ width: "1000px", height: "150px", top: "50%", left: "50%", margin: "50px 50px 50px 100px", }}>
//       <Chrono items={items} 
//       hideControls={true}
//       disableToolbar={true} />
//     </div>
//   )
// }

const events = [
  {
    title: "The Return of Salsa",
    date: "8 September 2024",
    description: "On September 8, 2024, the spacecraft, designated 'Salsa'(Cluster 2), returned to Earth's atmosphere over the South Pacific Ocean.  Cluster's 20 years in orbit have yielded priceless information on the Sun's interaction with Earth's magnetic field, which has improved our understanding and ability to predict space weather. Cluster's first-ever targeted reentry will be remembered for a second reason: it will help ESA establish itself as a global leader in sustainable space exploration. The Cluster quartet circled over the poles, where there is a lot of magnetic activity, but the majority of missions studying Earth's magnetic phenomena concentrate on the equator. We have never been able to 'see' sections of the  magnetosphere with several spacecraft simultaneously before, until now,  thanks to Cluster's ability to observe at higher latitudes than previous missions.",
    image: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2024/09/cluster_satellite_reenters_earth_s_atmosphere/26302833-1-eng-GB/Cluster_satellite_reenters_Earth_s_atmosphere_pillars.png",
    id:1
  },
  {
    title: "Bengaluru Space Expo (BSX)",
    date: "18-20 September 2024",
    description: "The International Event held at BIEC in Bengaluru was organized by Confederation of Indian Industry (CII) jointly with Indian Space Research Organization (ISRO), Indian National Space Promotion and Authorization Centre (IN-SPACe), and NewSpace India Limited (NSIL). Over 170 companies and 8000 business visitors were featured in the expo with more than 440 B2B and B2G meetings leading to the signing of over 12 MoU’s. ‘Accelerating Tomorrow: Harnessing the Potential of the Space Sector for Unified Expansion’  was the theme this year.  Dr. S. Somanath emphasized ISRO's dedication to integrating commercial businesses into upcoming initiatives in order to create a robust space ecosystem. He emphasized the value of the expo in promoting cooperation between industry and science. 800 delegates and more than 150 speakers from 14 nations, including Australia, the UK, Russia, Sweden, and Italy, participated in the event. Major themes covered by the conference included reforms and policies of the Indian space sector, their impact on the industry as well as related standards, guidelines, and practices. The conference also deliberated on ten-year vision roadmap for Indian space economy, business opportunities existing within various Indian space sectors, socio-economic impacts of space technology, and commercial possibilities of emerging and advanced space technologies.",
    image: "https://www.isro.gov.in/media_isro/image/index/Latest/bsx2509245.jpg",
    id:2
  },
  {
    title: "September Equinox",
    date: "22 September 2024",
    description: "One of the two times a year when the day and night are nearly the same length anywhere on Earth is the September equinox, which occurred September 22, 2024, at 12:43 UTC. This was an event as the Sun was crossing the celestial equator from the Northern Hemisphere to the Southern Hemisphere. It marked the beginning of autumn in the Northern Hemisphere while spring in the Southern, thus marking the changes with the seasons in the global world. The word equinox, derived from two Latin words: aequus (equal) and nox (night), emphasised the balance of equal day and night. Cultural and traditional practices often coincided with the equinox. It was mostly celebrated in ancient societies as a time of harvest, thanksgiving, and preparing for the cold months that were to come. Contemporary observations included astronomical studies whereby the equinox was a reference point in calibrating timekeeping and in understanding Earth's axial tilt. The event also reflected the intricate motions of the planet and how these were connected to the cycles of seasons, which in turn connected human activities to celestial phenomena.",
    image: "https://cdn.mos.cms.futurecdn.net/ku3HNK2kfw5keXUURp7JaZ-970-80.jpg.webp",
    id:3
  },
  {
    title: "SpaceX Crew-9 Expedition to ISS",
    date: "28 September 2024",
    description: "NASA's SpaceX Crew-9 mission, carrying two astronauts, launched on Saturday aboard the ISS (International Space Station) for science expedition. It marks the first crewed mission launched from the Space Launch Complex-40 at Cape Canaveral Space Force Station in Florida and is the space agency's ninth commercial crew rotation mission to the station. A SpaceX Falcon 9 rocket launched the Dragon spacecraft into orbit with NASA astronaut Nick Hague and Roscosmos cosmonaut Aleksandr Gorbunov aboard. More than 200 scientific research will be carried out by the crew members, including ones on blood coagulation, the impact of moisture on space-grown plants, and how astronauts' vision changes throughout the voyage. In February 2025, Williams and Wilmore will join Hague and Gorbunov on their return to Earth from the space station.",
    image: "https://www.nasa.gov/wp-content/uploads/2024/09/nhq202409280009.jpg?resize=768,467",
    id:4
  },
//   {
//     title: "Soyuz-2.1a Launch",
//     date: "29th March 2024",
//     description: "On March 29, 2024, Russia launched a Soyuz-2.1a rocket from Baikonur Cosmodrome, carrying several satellites into orbit as part of ongoing missions aimed at enhancing communications and Earth observation capabilities. The launch occurred at approximately 11:00 AM local time and successfully deployed multiple payloads into their designated orbits.",
//     image: "https://pbs.twimg.com/media/GUAauViXEAAPGw2?format=jpg&name=4096x4096",
//   },
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
      title: "The Return of Salsa",
      id:1
      
    },
    {
    title: "Bengaluru Space Expo (BSX)",
    id:2
    
  },
  {
    title: "September Equinox",
    id:3
   },
  {
    title: "SpaceX Crew-9 Expedition to ISS",
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



  // const centeredStyle2 = {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   // justifyContent: 'center',
  //   alignItems: 'center',
  //   gap: '20px',
  //   marginTop: '20px',
  //   height: '50vh',
  // };

//   const centeredStyle2 = {
//   display: 'flex',
//   flexDirection: 'row',
//   justifyContent: 'space-between', // Ensure proper spacing between cards
//   alignItems: 'center', // Align items to the center vertically
//   gap: '10px', // Space between cards
//   marginTop: '20px',
//   padding: '10px', // Optional padding around the row
// };



// function September() {
//     return (
//         <div>
//           <Navbar />
//           <section id="hero">
//             <div className="hero-container" style={centeredStyle}>
//               <h1>February</h1>
//             </div>
//           </section>
//           <main id="main">
//             <section id="about" className="about">
//               <div className="container">
//                 <div className="section-title" style={centeredStyle}>
                  
//                   <p>
//                     <br />
//                     From greeting the year with a launch to sending January off with beautiful celestial showers and passes, this month truly was a cosmic beginning of 2024. 
//                   </p>
//                   <br />
//                 </div>
//                 <div >
//                   <AlternatingEvents />
//                 </div>
//               </div>
//             </section>
//           </main>
//           <Footer />

//         </div>
      
//     );
//   }

// export default September;
  


// const events = [
//   {
//     title: "XPoSAT, launched by ISRO",
//     date: "01 January 2024",
//     description: "On January 1st, 2024, PSLV-C58, in its 60th flight, successfully launched its first polarimetry mission, the XPoSAT, to study the polarisation of X-rays. The spacecraft carried two scientific payloads developed by the Raman Research Institute and ISRO. The primary payload POLIX is an X-ray polarimeter for astronomical observations in the 8-30 keV energy bands. It is the first payload in the medium X-ray energy band dedicated to polarimetry measurements. XSPECT is an X-ray spectroscopy and timing payload, which can provide fast timing and good spectroscopic resolution in soft X-rays. The lifespan of the mission is expected to be at least five years. The observatory was placed in a low Earth orbit of 500-700 km..",
//     image: "https://via.placeholder.com/300",
//   },
//   {
//     title: "Event Two",
//     date: " ",
//     description: "This is the description for event two. It has text on the right and an image on the left.",
//     image: "https://via.placeholder.com/300",
//   },
//   {
//     title: "Event Three",
//     date: " ",
//     description: "This is the description for event three. It has text on the left and an image on the right.",
//     image: "https://via.placeholder.com/300",
//   },
// ];

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
