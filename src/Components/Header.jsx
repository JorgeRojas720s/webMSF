export default function Header() {
  return (
    <header className="container-fluid pb-2 text-center fixed-top" style={{background: '#04364A'}}>
      <div className="row">
        <a className="navbar-brand fs-5" href="https://ejemplo.com" style={{color: '#fff'}}>
          <img src="favicon.ico" alt="favicon" width={40} />
          Municipality
        </a>
      </div>
    </header>
  );
}

