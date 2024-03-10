import React from 'react'
import "./index.css";
import NavegationVar from "./Components/NavegationVar";
import Header from "./Components/Header";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Form from "./Screens/Form";

const exImage = require.context("./images", true);

const cards = [
  {
    title: "Payment of Taxes and Fees",
    description: "Quick and easy payment of municipal taxes and fees.",
    imageURL: exImage("./taxes.jpg"),
  },
  {
    title: "Licenses and Permits",
    description: "Efficiently manage and obtain municipal licenses and permits.",
    imageURL: exImage("./licenses.jpg"),
  },
  {
    title: "Waste Management",
    description: "Request services related to waste management, such as special collection or additional containers.",
    imageURL: exImage("./trash.jpg"),
  },
  {
    title: "Civil Registration",
    description: "Complete civil registration procedures, such as birth, marriage, and death registrations.",
    imageURL: exImage("./civil.jpg"),
  },
  {
    title: "Social Services",
    description: "Access social programs and services offered by the municipality, such as food assistance or social welfare.",
    imageURL: exImage("./socialservices.jpg"),
  },
  {
    title: "Education",
    description: "Learn about educational programs, enroll in courses, and access educational resources provided by the municipality.",
    imageURL: exImage("./education.jpg"),
  },
  {
    title: "Public Health",
    description: "Access information on public health services, such as vaccination, disease prevention, and health campaigns.",
    imageURL: exImage("./health.jpg"),
  },
  {
    title: "Public Security",
    description: "Report incidents, request emergency services, and access information on citizen security programs.",
    imageURL: exImage("./publicsecurity.jpg"),
  },
  {
    title: "Infrastructure and Maintenance",
    description: "Report infrastructure issues, such as potholes, faulty street lighting, or request maintenance of public spaces.",
    imageURL: exImage("./security.jpg"),
  },
];

function App () {
  return (
    <div>
    <Header />
      <NavegationVar />
      <Home imageURL={exImage('./municipality.jpg')} />
      <section className="container mt-5">
        <div className="row">
          {cards.map((data) => (
            <Card  key={data.title} name={data.title} imageUrl={data.imageURL} description={data.description} />
            ))}
        </div>
      </section>

      <Footer/>
    </div>
  )
}

export default App
