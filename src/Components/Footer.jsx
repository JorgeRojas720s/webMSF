export default function Footer() {
  return (
    <div className="container my-5">
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#071F40" }}
      >
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Municipality Reds
                </h6>
                <p>
                  Reds Municipality: Fostering community growth and well-being.
                  We provide essential services, promote civic participation,
                  and prioritize sustainability. Join us in building a vibrant
                  and inclusive future for all residents. Welcome to Reds where
                  community matters.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Helpful Links
                </h6>
                <p>
                  <a
                    href="https://www.ramrealtors.com/?gad_source=1&gclid=Cj0KCQiArrCvBhCNARIsAOkAGcW3PwHl0ZP-G0GFIGIjaLAxrVePj64xNpgKxYoEU39I5KLn52HZndwaApcbEALw_wcB"
                    className="text-white"
                  >
                    Firenze Escazú
                  </a>
                </p>
                <p>
                  <a
                    href="https://gee.bccr.fi.cr/indicadoreseconomicos/Cuadros/frmVerCatCuadro.aspx?idioma=1&CodCuadro=%20400"
                    className="text-white"
                  >
                    Dollar exchange
                  </a>
                </p>
                <p>
                  <a
                    href="https://auditoria.desamparados.go.cr:9443/Denuncias/Aplicacion/SIARegistrarDenuncia.aspx"
                    className="text-white"
                  >
                    Public complaints internal audit
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.seguridadpublica.go.cr/"
                    className="text-white"
                  >
                    Public Security
                  </a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact
                </h6>
                <p>
                  <i className="fa-solid fa-location-dot"></i> San José, Costa
                  Rica.
                </p>
                <p>
                  <i className="fas fa-envelope mr-3 mt-2"></i>{" "}
                  jorgerojas765lt@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3 mt-2"></i> +506 6142 2797
                </p>
              </div>
            </div>
          </section>

          <hr className="my-3" />

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2024 Derechos de autor:
                  <label className="text-white">
                    Jorge Rojas and Fabian Arguedas
                  </label>
                </div>
              </div>

              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a
                  href="https://www.facebook.com/profile.php?id=100005033883469"
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-facebook-f" target="_blank"></i>
                </a>

                <a
                  href="https://github.com/JorgeRojas720s"
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fa-brands fa-github"></i>
                </a>

                <a
                  href="https://www.instagram.com/_reds_720s/"
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}
