import { useState } from "react"

const Navbar = () => {
    const [user, setUser] = useState(null)

    const login = () => {
      setUser({id:1,nombre:"Ricardo"})
    }
    const logout = () => {
      setUser(null)
    }
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <span>Usuario: {user? user.nombre : "Desconocido"}</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Usuarios
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Santiago</a></li>
            <li><a className="dropdown-item" href="#">Ricardo</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">David</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input> */}
       {/*  <button className="btn btn-outline-success" type="submit">Buscar</button> */}
      </form>
      {user 
          ? (<button 
                className="btn btn-outline-success" 
                type="Button" 
                onClick = {logout} >Cerrar Sesion
        </button>)
          : (<button 
                className="btn btn-outline-success" 
                type="Button" 
                onClick = {login} >Iniciar Sesion
        </button>)
      }
    </div>
  </div>
</nav>
    )
}

export default Navbar 