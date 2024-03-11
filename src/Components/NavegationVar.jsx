export default function NavegationVar() {
  const scrollToSection = (target) => {
    let scrollTo = 0;
    
    if (target === "top") {
      scrollTo = 0;
    } else if (target === "bottom") {
      scrollTo = document.documentElement.scrollHeight - window.innerHeight;
    }

    window.scrollTo({
      top: scrollTo,
      behavior: "smooth"
    });

  };

  return (
    <nav className="navbar navbar-expand-sm fixed-top mt-5" style={{background: '#176B87'}}>
      <div className="container-fluid">
        <button
          className="nav-link active"
          onClick={() => scrollToSection("top")} // Utilizar la función de desplazamiento para "Home"
          aria-current="page"
        >
          Home
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <button
              className="nav-link" 
              onClick={() => scrollToSection("bottom")} // Utilizar la función de desplazamiento para "Contact"
            >
              Contact
            </button>
            <a className="nav-link" href="https://ejemplo.com">
              About
            </a>
            <a className="nav-link" href="https://www.youtube.com/watch?v=m1BykHzDOxI">
              Fabian playo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}




