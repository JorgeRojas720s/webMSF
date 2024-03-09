import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavegationVar from "./Components/NavegationVar";
import Header from "./Components/Header";
import Card from "./Components/Card";
import Footer from "./Components/Footer";


const exImage = require.context("./images", true);
const root = ReactDOM.createRoot(document.getElementById("root"));

const cards = [
  {
    title: "Pago de Impuestos y Tasas",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, rerum molestiae ut maiores ipsum porro ipsam id cum deserunt quod animi doloremque cumque exercitationem fuga recusandae, error ab labore eius.",
    imageURL: exImage("./faucet.jpg"),
  },
  {
    title: "Licencias y Permisos",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, rerum molestiae ut maiores ipsum porro ipsam id cum deserunt quod animi doloremque cumque exercitationem fuga recusandae, error ab labore eius.",
    imageURL: exImage("./faucet.jpg"),
  },
  {
    title: "Gestión de Residuos",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, rerum molestiae ut maiores ipsum porro ipsam id cum deserunt quod animi doloremque cumque exercitationem fuga recusandae, error ab labore eius.",
    imageURL: exImage("./faucet.jpg"),
  },
  {
    title: "Registro Civil",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, rerum molestiae ut maiores ipsum porro ipsam id cum deserunt quod animi doloremque cumque exercitationem fuga recusandae, error ab labore eius.",
    imageURL: exImage("./faucet.jpg"),
  },
  {
    title: "Servicios Sociales",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, rerum molestiae ut maiores ipsum porro ipsam id cum deserunt quod animi doloremque cumque exercitationem fuga recusandae, error ab labore eius.",
    imageURL: exImage("./faucet.jpg"),
  },
  {
    title: "Educación",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, rerum molestiae ut maiores ipsum porro ipsam id cum deserunt quod animi doloremque cumque exercitationem fuga recusandae, error ab labore eius.",
    imageURL: exImage("./faucet.jpg"),
  },
  {
    title: "Salud Pública",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, rerum molestiae ut maiores ipsum porro ipsam id cum deserunt quod animi doloremque cumque exercitationem fuga recusandae, error ab labore eius.",
    imageURL: exImage("./faucet.jpg"),
  },
  {
    title: "Seguridad Pública",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, rerum molestiae ut maiores ipsum porro ipsam id cum deserunt quod animi doloremque cumque exercitationem fuga recusandae, error ab labore eius.",
    imageURL: exImage("./faucet.jpg"),
  },
  {
    title: "Infraestructura y Mantenimiento",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, rerum molestiae ut maiores ipsum porro ipsam id cum deserunt quod animi doloremque cumque exercitationem fuga recusandae, error ab labore eius.",
    imageURL: exImage("./faucet.jpg"),
  },
];

root.render(
  <React.StrictMode>
    <Header />
    <NavegationVar />

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
