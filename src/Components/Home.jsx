export default function Home(props) {
    return (
        <div id="1" className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-xl-6 d-flex justify-content-center align-items-center">
              <div className="mt-5"  style={{ marginTop: "2rem" }}>
                <img
                  src={props.imageURL}
                  alt="municipality.jpg"
                  className="img-fluid rounded"
                  style={{
                    borderRadius: "20px",
                    maxHeight: "80vh",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
              </div>
            </div>
        <div className="col-md-12 col-xl-6 d-flex justify-content-center align-items-center text-center mt-4">
          <div>
            <h1 className="display-3 animate__animated animate__heartBeat">Welcome to Reds Municipality!</h1>
            <p className="fs-5">
            At the heart of our community, we warmly welcome you to our website. Explore essential services, stay informed about local events and discover what makes Reds an exceptional place to live. We are here to serve you and build a vibrant future together. Welcome to Municipalidad Reds, where each story is part of our common history!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
