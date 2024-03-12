export default function Card(props) {
  
  return (
    <div className=" col-sm-12 col-md-6 col-xl-4 my-3">
      <div className="card border-0" style={{background: "#04325B", color: "#fff"}}>
        <div className="col-sm-9 col-md-9 col-xxl-9"> 
        <img src={props.imageUrl} className="card-img-top rounded-pill" alt="faucet" />
        </div>
        <div className="card-body">
          <h5 className="card-title text-info">{props.name}</h5>
          <p className="card-text">
            {props.description}
          </p>
          <button  className="btn btn-primary" onClick={() => props.go(props.cardInfo)} style={{background: "#038587"}}>
          <i className="fa-solid fa-arrow-right" > Go</i>
          </button>
        </div>
      </div>
    </div>
  );
}
