import {} from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './css/nav.module.css';

function Nav() {
  return (
    /*div principal */
    <div className="container my-4 ">
      {/* nav  */}
      <nav className="navbar navbar-expand-lg mb-4">
        {/* container do menu nav */}
        <div className="container-fluid">
          {/* logo */}
          <a className="navbar-brand" href="#">
            MyShop
            {/* links dos elementos e chamando estilzação css modules*/}
            <ul className="navbar-nav ms-auto ">
            <li className="nav-item ">
                <NavLink to="/" className="nav-link">
                  <h6 className={styles.tlink}>Home</h6>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Casual" className="nav-link">
                  <h6 className={styles.tlink}>Casual</h6>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/Masculino" className="nav-link">
                  <h6 className={styles.tlink}>Masculino</h6>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Feminino" className="nav-link">
                  <h6 className={styles.tlink}>Feminino</h6>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Outlet" className="nav-link">
                  <h6 className={styles.tlink}>Outlet</h6>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/Carrinho" className="nav-link">
                  <h6 className={styles.tlink}>Carrinho</h6>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/Login" className="nav-link">
                  <h6 className={styles.tlink}>Login</h6>
                </NavLink>
              </li>
            </ul>
          </a>
          {/* botão  para criar a menu hamburguer */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        {/* final do nav */}
      </nav>
      {/* final da div principal */}
    </div>
  );
}

export default Nav;