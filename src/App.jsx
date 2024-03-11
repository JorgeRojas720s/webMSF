import "./App.css";
import { useState } from "react";
import NavegationVar from "./Components/NavegationVar";
// import Header from "./Components/Header";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Form from "./Components/Form";

const exImage = require.context("./images", true);

const cards = [
  {
    title: "Payment of Taxes and Fees",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, rerum molestiae ut maiores ipsum porro ipsam id cum deserunt quod animi doloremque cumque exercitationem fuga recusandae, error ab labore eius.",
    imageURL: exImage("./taxes.jpg"),
  },
  {
    title: "Licenses and Permits",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, rerum molestiae ut maiores ipsum porro ipsam id cum deserunt quod animi doloremque cumque exercitationem fuga recusandae, error ab labore eius.",
    imageURL: exImage("./licenses.jpg"),
  },
  {
    title: "Waste management",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, rerum molestiae ut maiores ipsum porro ipsam id cum deserunt quod animi doloremque cumque exercitationem fuga recusandae, error ab labore eius.",
    imageURL: exImage("./trash.jpg"),
  },
  {
    title: "Civil registration",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, rerum molestiae ut maiores ipsum porro ipsam id cum deserunt quod animi doloremque cumque exercitationem fuga recusandae, error ab labore eius.",
    imageURL: exImage("./civil.jpg"),
  },
  {
    title: "Social services",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, rerum molestiae ut maiores ipsum porro ipsam id cum deserunt quod animi doloremque cumque exercitationem fuga recusandae, error ab labore eius.",
    imageURL: exImage("./socialservices.jpg"),
  },
  {
    title: "Education",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, rerum molestiae ut maiores ipsum porro ipsam id cum deserunt quod animi doloremque cumque exercitationem fuga recusandae, error ab labore eius.",
    imageURL: exImage("./education.jpg"),
  },
  {
    title: "Public health",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, rerum molestiae ut maiores ipsum porro ipsam id cum deserunt quod animi doloremque cumque exercitationem fuga recusandae, error ab labore eius.",
    imageURL: exImage("./health.jpg"),
  },
  {
    title: "Public security",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, rerum molestiae ut maiores ipsum porro ipsam id cum deserunt quod animi doloremque cumque exercitationem fuga recusandae, error ab labore eius.",
    imageURL: exImage("./publicsecurity.jpg"),
  },
  {
    title: "Infrastructure and Maintenance",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, rerum molestiae ut maiores ipsum porro ipsam id cum deserunt quod animi doloremque cumque exercitationem fuga recusandae, error ab labore eius.",
    imageURL: exImage("./security.jpg"),
  },
];

function App() {
  const [showMain, setShowMain] = useState(true);
  const [infoCard, setCardInfo] = useState(Object);

  const clickOnGoButton = (cardInfo) => {
    console.log("info Caarta", cardInfo);
    setCardInfo(cardInfo);

    setShowMain(false);
  };

  return (
    <>
      {/* <Header /> */}
      <NavegationVar />

      {showMain === true && (
        <>
          <section className="container mt-5">
            <div className="row ">
              <Home imageURL={exImage("./municipa.jpg")} />
              <h2 className="mt-4 p-3 text-center">Services</h2>
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
          </section>
        </>
      )}

      {showMain === false && (
        <>
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
