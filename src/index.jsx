import React from "react";
import ReactDOM from "react-dom/client";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./index.css";
import NavegationVar from "./Components/NavegationVar";
import Header from "./Components/Header";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Home from "./Components/Home";


const exImage = require.context("./images", true);
const root = ReactDOM.createRoot(document.getElementById("root"));

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

root.render(
  <React.StrictMode>
    <Header />
    <NavegationVar />
    <Home imageURL={exImage('./municipality.jpg')} />
    <section className="container mt-5">
      <div className="row">
        {cards.map((data) => (
          <Card  key={data.title} name={data.title} imageUrl={data.imageURL} />
        ))}
      </div>
    </section>

    <Footer/>

  </React.StrictMode>
);
