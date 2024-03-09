import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavegationVar from "./Components/NavegationVar";
import Header from "./Components/Header";
import Card from "./Components/Card";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <NavegationVar />
    <section className="container mt-5">
      <div className="row">
        <Card name="Pago de Impuestos y Tasas:" />
        <Card name="Licencias y Permisos" />
        <Card name="Gestión de Residuos" />
        <Card name="Registro Civil" />
        <Card name="Servicios Sociales" />
        <Card name="Educación" />
        <Card name="Salud Pública" />
        <Card name="Seguridad Pública" />
        <Card name="Infraestructura y Mantenimiento" />
        <Card name="Transporte Público" />
        <Card name="Cultura y Recreación" />
        <Card name="Desarrollo Económico" />
        <Card name="Medio Ambiente" />
        <Card name="Servicios de Emergencia" />
        <Card name="Desarrollo Comunitario" />
      </div>
    </section>
  </React.StrictMode>
);
