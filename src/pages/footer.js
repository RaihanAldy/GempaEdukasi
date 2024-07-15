import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';

const footer = () => {
    return (
        <Router>
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
      
      <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Tutup
      </Button>
    </Modal.Footer>
    </Router>
    );
};

export default footer();