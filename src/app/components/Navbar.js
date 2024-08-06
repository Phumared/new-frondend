import Link from "next/link";

export default function Navbar() {
  return (
    <>
      
      <nav className="navbar  bg-light navbar-expand-lg z-index-fixed top-0 blur border-radius-xl shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
          <div className="container-fluid">
            <img src="image/logo pizza.png" class="img-fluid" alt="..."></img>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">หน้าแรก</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/service">บริการของเรา</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">เกี่ยวกับเรา</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">ติดต่อเรา</a>
                </li>
                <li className="nav-item dropdown">
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              
              <Link href="/signup" className="btn btn-outline-success">signup</Link>
                <Link href="/login" className="btn btn-outline-success">login</Link>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                
              </form>
            </div>
          </div>
        </nav>
      
        
    </>

  )
}