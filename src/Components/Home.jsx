export default function Home(props) {
    return (
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center"> 
            <img src={props.imageURL} alt="Welcome" className="img-fluid rounded" height={500} width={500} style={{ borderRadius: '20px' }} />
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center"> 
            <div>
                <h1 className="display-1">Welcome to Our Website</h1>
                <p className="fs-2">
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
  
  
  



  
  