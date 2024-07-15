import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import About from './about';
import Tips from './tips';
import Story from './strories';

const header = () => {
    return (
        <Router>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Gemasi - Website Edukasi Bencana Gempa</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <header className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={require('./img/logo.png')} className="logo-header" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Beranda</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">Tentang</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tips">Tips</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/stories">Cerita</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Switch>
          <Route exact path="/" component={Beranda} />
          <Route path="/about" component={About} />
          <Route path="/tips" component={Tips} />
          <Route path="/stories" component={Story} />
        </Switch>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Informasi Lengkap</Modal.Title>
        </Modal.Header>
        </Modal>
      </Router>
    );
};
export default header();