import "./App.css";
import { useState } from "react";
import NavegationVar from "./Components/NavegationVar";
// import Header from "./Components/Header";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Form from "./Components/Form";
import Carousel from "./Components/Carousel";
import "@fortawesome/fontawesome-free/css/all.min.css";

const exImage = require.context("./images", true);

const cards = [
  {
    title: "Payment of Taxes and Fees",
    description:
      "Meet your financial obligations quickly and easily. Our tax payment service gives you an easy way to contribute to the development of our community. Make your contribution comfortably at Municipalidad Reds!",
    imageURL: exImage("./taxes.jpg"),
  },
  {
    title: "Licenses and Permits",
    description:
      "We simplify your procedures. From business licenses to construction permits, at Municipalidad Reds, we facilitate the process so you can move forward with your projects quickly and without complications.",
    imageURL: exImage("./licenses.jpg"),
  },
  {
    title: "Waste management",
    description:
      "Keep our community clean and sustainable with our service. We make collection and recycling simple. At Municipalidad Reds, we work for a healthier environment. Easily participate in waste management!",
    imageURL: exImage("./trash.jpg"),
  },
  {
    title: "Civil registration",
    description:
      "We simplify the registration of vital events in our community. From births to deaths, our service guarantees accurate documentation. At Municipalidad Reds, we preserve stories efficiently and reliably. Record vital events easily with us!",
    imageURL: exImage("./civil.jpg"),
  },
  {
    title: "Social services",
    description:
      "We support the community with comprehensive programs. From financial assistance to community support, at Municipalidad Reds we strengthen the safety net for everyone. Discover how our services make a difference in your life and in the community. We are here to support you.",
    imageURL: exImage("./socialservices.jpg"),
  },
  {
    title: "Education",
    description:
      "We promote quality education in our community. From municipal schools to educational programs, at Municipalidad Reds we prioritize academic development. Discover how our services contribute to student success. We work together to build a bright educational future.",
    imageURL: exImage("./education.jpg"),
  },
  {
    title: "Public health",
    description:
      "We promote community health with preventive initiatives and services. From programs to prevention services, at Municipalidad Reds we are committed to well-being. Find out how we contribute to a healthier community. We work together to strengthen everyone's health.",
    imageURL: exImage("./health.jpg"),
  },
  {
    title: "Public security",
    description:
      "We ensure the tranquility of the community with security services. From police presence to prevention initiatives, at Municipalidad Reds we work to create a safe environment. Find out how we contribute to the protection of everyone. Together, we build a safe community.",
    imageURL: exImage("./publicsecurity.jpg"),
  },
  {
    title: "Infrastructure and Maintenance",
    description:
      "We optimize and take care of our community. From streets to infrastructure projects, at Municipalidad Reds, we keep our environment in optimal conditions. Find out how we contribute to an efficient community. Together, we build and preserve a quality environment.",
    imageURL: exImage("./security.jpg"),
  },
];

function App() {
  const [showMain, setShowMain] = useState(true);
  const [infoCard, setCardInfo] = useState(Object);
  const [nameService, setNameService] = useState("Services");

  const clickOnGoButton = (cardInfo) => {
    console.log("info Caarta", cardInfo);
    setCardInfo(cardInfo);
    setNameService("Form");
    setShowMain(false);
  };

  return (
    <>
      {/* <Header /> */}

      {showMain === true && (
        <>
        <NavegationVar name={nameService} aux={"#"}/>
          <section className="container mt-5">
            <div className="row ">
              <Home imageURL={exImage("./municipality.jpg")} />
              <h2 className="mt-4 pt-4 text-center fw-bold text-info ">
                Services
              </h2>
              <section className="container mt-5">
                <div className="row">
                  {cards.map((data) => (
                    <Card
                      key={data.title}
                      name={data.title}
                      description={data.description}
                      imageUrl={data.imageURL}
                      cardInfo={data}
                      go={clickOnGoButton}
                    />
                  ))}
                </div>
              </section>
            </div>
            <h2 className="mt-4 pt-4 text-center fw-bold text-info">
              Our offices
              </h2>
            <Carousel
              image1={exImage("./meetingRoom.jpg")}
              image2={exImage("./hallways.jpg")}
              image3={exImage("./waitingRoom.jpg")}
            />
          </section>
        </>
      )}

      {showMain === false && (
        <>
        {window.scrollTo({top: 0})}
         <NavegationVar name={nameService} aux={"https://municipality-reds.netlify.app"}/>
          <section className="container mt-5">
            <div className="row">
              <div className="">
                <div className="col-xl-5 mx-auto">
                  <img
                    src={infoCard.imageURL}
                    className="card-img-top rounded-pill mt-5"
                    alt={infoCard.title}
                  />
                </div>
                <h2 className="mt-5 text-center">{infoCard.title}</h2>
                <p className="text-center">{infoCard.description}</p>
                <Form />
              </div>
            </div>
          </section>
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
