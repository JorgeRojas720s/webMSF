export default function Home(props) {
    return (
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-12 col-xl-6 d-flex justify-content-center align-items-center mt-3">
              <div className="mt-5"  style={{ marginTop: "2rem" }}>
                <img
                  src={props.imageURL}
                  alt="Welcome"
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
        <div className="col-md-12 col-xl-6 d-flex justify-content-center align-items-center text-center my-4">
          <div>
            <h1 className="display-1">Welcome to Our Website</h1>
            <p className="fs-5">
              On our web site, we have created a dedicated space to simplify and
              simplify and speed up your procedures related to essential
              municipal services, such as services, such as payment of taxes,
              education and other public services. public services. With just a
              few clicks, you will be able to access a variety of forms designed
              to a variety of forms designed to facilitate your procedures from
              the comfort of your home or office.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
