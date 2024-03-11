export default function Card(props) {
  
  return (
    <div className=" col-sm-12 col-md-6 col-xl-4">
      <div className="card border-0 m-3">
        <div className="col-sm-9 col-md-9 col-xxl-9"> 
        <img src={props.imageUrl} className="card-img-top rounded-pill" alt="faucet" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button  className="btn btn-primary" onClick={() => props.go(props.cardInfo)}>
            Go
          </button>
        </div>
      </div>
    </div>
  );
}
