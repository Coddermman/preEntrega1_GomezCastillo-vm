const Categorias = () => {
    return (
        <>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><button className="btn btn-dark">Categorías</button></a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Ropa Deportiva</a></li>
            <li><a className="dropdown-item" href="#">Calzados</a></li>
            <li><a className="dropdown-item" href="#">Suplementos Alimenticios</a></li>
            <li><a className="dropdown-item" href="#">Accesorios</a></li>
          </ul>
        </li> 
        </>
    );
}

export default Categorias;
