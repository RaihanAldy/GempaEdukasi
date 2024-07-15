import React, { useState } from 'react';
import './App.css';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import InfoPage from './pages/InfoPage';
import About from './pages/about';
import Tips from './pages/tips';
import Story from './pages/strories';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

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
          <Switch>
          <Route exact path="/" component={Beranda} />
          <Route path="/about" component={About} />
          <Route path="/tips" component={Tips} />
          <Route path="/stories" component={Story} />
        </Switch>
        </div>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={
            <>
              <section className="hero">
                <div className="row">
                  <div className="Isi">
                    <img src={require('./img/image1.png')} alt="polos" className="polos" />
                    <h1 className="title">GempaEdukasi</h1>
                    <p className="subtitle">Website Edukasi Bencana Gempa</p>
                    <Link to="/info">
                      <Button className="btn-primary">Selengkapnya</Button>
                    </Link>
                    <img src={require('./img/Line.png')} alt="garis" className="line" />
                    <img src={require('./img/image2.png')} alt="GempaBumi2" className="img2" />
                    <img src={require('./img/image6.png')} alt="GempaBumi3" className="img5" />
                    <img src={require('./img/image5.png')} alt="GempaBumi4" className="img6" />
                  </div>
                </div>
              </section>
              <section className="statistik">
                <img src={require('./img/image3.png')} className="ambang1" alt="statistik1" />
                <img src={require('./img/image4.png')} className="ambang2" alt="statistik2" />
                <div className="row">
                  <div className="isi2a">
                    <h2>10.000+</h2>
                    <p>Kali Gempa Bumi <br/>terjadi di Indonesia</p>
                  </div>
                  <div className="isi2b">
                    <h2>245.000+</h2>
                    <p>Korban Gempa Bumi<br/> yang terjadi di Indonesia</p>
                  </div>
                </div>
                <iframe
                  width="560"
                  height="315"
                  src="https://youtu.be/1nXkJq5OZl0?si=70G9vkZIzi1XZdGI"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube Video"
                ></iframe>
                <span className="quote">“There is an old saying: Earthquakes don't kill people—buildings do!”</span>
              </section>
            </>
          } />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="frame">
          <div className="div">
            <div className="text-wrapper">Company</div>
            <div className="text-wrapper-2">
              Career
              <br />
              About Us
              <br />
              Blog
              <br />
              Feature
              <br />
              Story
            </div>
          </div>
          <div className="div">
            <div className="text-wrapper">Design</div>
            <div className="text-wrapper-2">
              2D Designer
              <br />
              3D Designer
              <br />
              Collaboration
              <br />
              Tools
              <br />
              Important Link
            </div>
          </div>
          <div className="div">
            <div className="text-wrapper">Links</div>
            <div className="text-wrapper-2">
              Projects
              <br />
              Contact
              <br />
              Send Email
              <br />
              Fiverr
              <br />
              UpWork
            </div>
          </div>
          <div className="div">
            <div className="text-wrapper">Material</div>
            <p className="text-wrapper-2">
              Company Profile
              <br />
              Asset
              <br />
              Location Map
              <br />
              Estimate Cost
              <br />
              Default Quotation
            </p>
          </div>
        </div>
        <img className="line" alt="Line" src="line-15.svg" />
        <div className="gemasi-removebg-wrapper">
          <img src={require('./img/logo.png')} className="logo-footer" alt="footer logo" />
        </div>
        <p className="p">© Copyright 2024 GEMASI ― All Rights Reserved.</p>
        <div className="terms-conditions">Terms & Conditions</div>
        <div className="text-wrapper-3">Privacy Policy</div>
      </footer>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Informasi Lengkap</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Detail informasi tentang bencana gempa bumi...</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </Router>
  );
}

export default App;
