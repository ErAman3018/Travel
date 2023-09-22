import React, { useEffect } from "react";
import "./main.css";
import Aos from "aos";
import "aos/dist/aos.css";
import img from "../../Asset/img.jpg";
import img2 from "../../Asset/img2.jpg";
import img3 from "../../Asset/img3.jpg";
import img4 from "../../Asset/img4.jpg";
import img5 from "../../Asset/img5.jpg";
import img6 from "../../Asset/img6.jpg";
import img7 from "../../Asset/img7.jpg";
import img8 from "../../Asset/img8.jpg";
import img9 from "../../Asset/img9.jpg";
import img10 from "../../Asset/img10.jpg";
import img11 from "../../Asset/img11.webp";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

// Here the array named data
const Data = [
  {
    id: 1,
    imgsrc: img,
    destTitle: "AJANTA-AND-ELLORA-CAVES",
    location: "Maharashtra",
    grade: "architecture Religious",
    fees: "7,000",
    description:
      "Ajanta Caves exemplifies one of the greatest achievements in ancient Buddhist rock-cut architecture. The artistic traditions at Ajanta present an important and rare specimen of art, architecture, painting, and socio-cultural, religious and political history of contemporary society in India.",
    details: "https://traveltriangle.com/blog/ajanta-ellora-caves/",
  },
  {
    id: 2,
    imgsrc: img2,
    destTitle: "Assam-botanical-garden",
    location: "Assam",
    grade: "Zoo",
    fees: "6,000",
    description:
      "The Assam State Zoo cum Botanical Garden (popularly known as Guwahati Zoo) is the largest of its kind in the North East region and it is spread across 432 acre (175 hectare). The zoo is located within the Hengrabari Reserved Forest at Guwahati, India. The zoo is home to about 895 animals, birds and reptiles representing almost 113 species of animals and birds from around the world.",
    details: "https://assamstatezoo.in/",
  },
  {
    id: 3,
    imgsrc: img3,
    destTitle: "Coimbatore",
    location: "Tamil Nadu",
    grade: "Temple Religious",
    fees: "8,000",
    description:
      'The Adiyogi statue is a 34-metre tall (112 ft), 45-metre long (147 ft) and 25-metre wide (82 ft) steel statue of Shiva with Thirunamam at Coimbatore, Tamil Nadu. It is recognized by the Guinness World Records as the "Largest Bust Sculpture” in the world.[1][2] Designed by Jaggi Vasudev, the founder and head of the Isha Foundation, the statue weighs around 500 tonnes (490 long tons; 550 short tons).',
    details:"https://www.tripadvisor.in/Attraction_Review-g297675-d12281614-Reviews-Adiyogi_Shiva-Coimbatore_Coimbatore_District_Tamil_Nadu.html"
  },
  {
    id: 4,
    imgsrc: img4,
    destTitle: "Dhanushkodi",
    location: "Tamil Nadu",
    grade: "Religious Sites",
    fees: "7,500",
    description:
      "The place derives its name from the words dhanush (bow) and kodi (end). Legend has it that Lord Rama built a bridge, known as Ram Setu or Adam's Bridge, to Sri Lanka from here by using a bow. The town's sacred significance brings pilgrims from across the country to Dhanushkodi.",
    details:"https://revolvingcompass.com/a-complete-guide-to-visit-dhanushkodi-the-last-point-of-india/",
  },
  {
    id: 5,
    imgsrc: img5,
    destTitle: "Hawa_Mahal",
    location: "Jaipur",
    grade: "historical palace",
    fees: "10,000",
    description:
      "The Hawa Mahal is a five-storey building, and it is the tallest building in the world that has been built without a foundation. It has a curved architecture that leans at an 87 degree angle, and a pyramidal shape which has helped it stay erect for centuries. The Hawa Mahal is dedicated to Lord Krishna.",
    details:"https://www.hawa-mahal.com/",
  },
  {
    id: 6,
    imgsrc: img6,
    destTitle: "kedarnath Temple",
    location: "Uttarakhand",
    grade: "Religious Temple",
    fees: "8,000",
    description:
      "Kedarnath is a town and Nagar Panchayat in Rudraprayag district of Uttarakhand, India, known primarily for the Kedarnath Temple. It is approximately 86 kilometres from Rudraprayag, the district headquarter. Kedarnath is the most remote of the four Chota Char Dham pilgrimage sites. It is located in the Himalayas, about 3,583 m (11,755 ft) above sea level near the Chorabari Glacier, which is the source of the Mandakini river.",
    details:"https://uttarakhandtourism.gov.in/destination/kedarnath",
  },
  {
    id: 7,
    imgsrc: img7,
    destTitle: "MAHABALESHWAR",
    location: "Maharashtra",
    grade: "Moutain",
    fees: "9,000",
    description:
      "Mystical Mahabaleshwar is a quaint hill station known for its scenic beauty and of course, strawberries. Nestled in the Sahyadri Mountain Ranges, it was the summer capital of the Bombay province during the colonial rule.",
    details:"https://en.wikipedia.org/wiki/Mahabaleshwar",
  },
  {
    id: 8,
    imgsrc: img8,
    destTitle: "RAJMACHI",
    location: "Maharashtra",
    grade: "Moutain",
    fees: "10,000",
    description:
      "Rajmachi is famous for the historical fortress which has two fortified peaks - Shrivardhan and Manaranjan forts, located near two famous hills of Lonavala and Khandala. At the base of the fort is the village Udhewadi which is another name for Rajmachi.",
    details:"https://www.holidify.com/places/rajmachi/",
  },
  {
    id: 9,
    imgsrc: img9,
    destTitle: "reverseWaterFall",
    location: "Maharashtra",
    grade: "Water fall",
    fees: "12,000",
    description:
      "Reverse waterfall is a phenomenon in which water is blown upward due to strong wind in waterfalls giving an apparent perception of water flowing upwards. Strong blowing of wind above about 75 km/h can cause such phenomena.",
    details:"https://en.wikipedia.org/wiki/Reverse_waterfall",
  },
  {
    id: 10,
    imgsrc: img10,
    destTitle: "seven_sister",
    location: "Gangtok, Sikkim",
    grade: "Water fall",
    fees: "15,000",
    description:
      "Seven Sister is a popular waterfall located on the Gangtok- Lachung Highway, around 32 kilometres away from Gangtok. As the name suggests, the seven different waterfalls harmoniously arranged sideways on a wide rugged cliff seem distinct if watched from a distance. It becomes a must see place in Gangtok after rains, when the falls come into a fierce life offering an awe-inspiring view. The gurgling water of the fall plunges out of the lush green vegetation plastering the rugged cliffs, falls over the limestones making a thunderous sound.",
    details:"https://www.tourmyindia.com/states/sikkim/seven-sister-waterfalls.html",
  },
  {
    id: 11,
    imgsrc: img11,
    destTitle: "Ujjain_Mahakal",
    location: "Madhya Pradesh",
    grade: "Temple",
    fees: "12,000",
    description:
      "Ujjain, is an old city which is situated on the banks of the river Kshipra, is a important place as a Hindu pilgrimage site in central India. Ujjain is home to some of the most famous temples and religious sites, ",
    details:"https://ujjain.nic.in/tourist-place/%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80-%E0%A4%AE%E0%A4%B9%E0%A4%BE%E0%A4%95%E0%A4%BE%E0%A4%B2%E0%A5%87%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A4%B0-%E0%A4%AE%E0%A4%82%E0%A4%A6%E0%A4%BF%E0%A4%B0/",
  },
];

const Main = () => {
  // lets create a react hook to add a scroll on animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most Visited destinations
        </h3>
      </div>
      <div className="secContent grid">
        {/* Here we are going to use high order array method(map).
        To do that we shall use a list of object in one array. I'm going to 
        create on array named data and form that we shall .map() array to
        fetch each destination at once.  */}
        {Data.map(
          ({ id, imgsrc, destTitle, location, grade, fees, description ,details}) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                {/* Here it will return Single id from the map array */}
                <div className="imageDiv">
                  <img src={imgsrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>&#8377;{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <a href={details} target="blank"><button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button></a>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
