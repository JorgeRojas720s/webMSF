export default function NavegationVar(props) {
  const scrollToSection = (target) => {
    let scrollTo = 0;

    if (target === "top") {
      scrollTo = 0;
    } else if (target === "bottom") {
      console.log(document.documentElement.scrollHeight - window.innerHeight);
      scrollTo = document.documentElement.scrollHeight - window.innerHeight;
    } else if (target === "medium") {
      scrollTo = window.innerHeight / 2;
    }

    window.scrollTo({
      top: scrollTo,
      medium: scrollTo,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className="navbar navbar-expand-sm fixed-top"
      style={{ background: "#015A95" }}
    >
      <div className="container-fluid">
        <a
          className="nav-link active"
          onClick={() => scrollToSection("top")}
          href={props.aux}
          aria-current="page"
        >
          <i class="fa-solid fa-house"> Home</i>
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
            <button
              className="nav-link"
              onClick={() => scrollToSection("medium")}
            >
            <i class="fa-solid fa-handshake" style={{color: "#fff"}}> {props.name}</i>
            </button>
            <button
              className="nav-link"
              onClick={() => scrollToSection("bottom")}
            >
              <i class="fa-solid fa-address-book" style={{color: "#fff"}}>  Contact</i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
