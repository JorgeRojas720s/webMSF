export default function NavegationVar() {
  return (
    <nav className="navbar navbar-expand-sm " style={{background: "#176B87"}}>
      <div className="container-fluid"  style={{background: "#176B87"}}>
        <a
          className="nav-link active"
          href="https://ejemplo.com"
          aria-current="page"
        >
          Home
        </a>
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
            <a className="nav-link" href="https://ejemplo.com">
              Contact
            </a>
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
