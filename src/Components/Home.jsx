export default function Home(props) {
    return (
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center my-5">
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center mt-5"> 
            <div className="mt-5">
            <img src={props.imageURL} alt="Welcome" className="img-fluid rounded mt-5" height={200} width={500} style={{ borderRadius: '20px', position: 'relative', bottom: 0, height: "80vh" }} />
            </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center"> 
            <div>
                <h1 className="display-1">Welcome to Our Website</h1>
                <p className="fs-5">
                On our web site, we have created a dedicated space to simplify and
                simplify and speed up your procedures related to essential municipal services, such as
                services, such as payment of taxes, education and other public services.
                public services. With just a few clicks, you will be able to access a variety of forms designed to
                a variety of forms designed to facilitate your procedures
                from the comfort of your home or office.
                </p>
            </div>
            </div>
        </div>
        </div>
    );
}
  
  
  



  
  