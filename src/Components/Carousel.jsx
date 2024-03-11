export default function Carousel(props) {
  return (
    <div id="carouselExampleIndicators" className="carousel slide mt-5">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-block mx-auto w-50">
            <img src={props.image1} className="d-block w-100" alt="civil" />
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-block mx-auto w-50">
            <img src={props.image2} className="d-block w-100" alt="..." />
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-block mx-auto w-50">
            <img src={props.image3} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
