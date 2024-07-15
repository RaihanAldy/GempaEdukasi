import React from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Cerita1 from './cerita1';
import Cerita2 from './cerita2';

const InfoPage = () => {
  return (
    <Router>
    <div className="info-page">
      <title>Mengenal Apa itu Gempa | Client UI</title>
      <div className="overlap">
        <div className="overlap-group">
          <img className="image" alt="" src={require("../img/image8.png")} />
          <h1 className="section-title">
          Mengenal Apa itu Gempa
            
          </h1>
          <h2 className="section-title">
          Mengenal lebih jauh terkait apa itu gempa dan bagaimana terjadinya?
          </h2>

          <img className="rectangle" alt="Rectangle" src={require("../img/Rectangle 322.svg")} />
          <h1>
          Mengenal Gempa Bumi : <br />
            APA ITU...?
          </h1>
          <p className="label">
            Gempa bumi adalah getaran yang terjadi di permukaan Bumi sebagai akibat dari pelepasan energi yang tersimpan di dalam kerak bumi. 
            Penyebab utama gempa bumi adalah pergerakan lempeng tektonik di bawah permukaan bumi. Ketika dua lempeng bertemu, saling bergesekan,
            atau bergesek satu sama lain,tekanan yang terakumulasi akibat pergerakan ini dapat melepaskan energi secara tiba-tiba, 
            menyebabkan gempa bumi.Gempa bumi dapat memiliki berbagai tingkat kekuatan, yang diukur dengan menggunakan skala seperti skala Richter atau skala magnitudo. 
          </p>
          
          <img className="line" alt="Line" src={require("../img/Line 19.svg")} />
          {/* <img className="img" alt="Line" src={require("../img/image.svg")} /> */}
          <img className="line-2" alt="Line" src={require("../img/Line 21.svg")} />
          <img className="line-3" alt="Line" src={require("../img/Line 25.svg")} />
          <img className="line-4" alt="Line" src={require("../img/Line 26.svg")} />
          <img className="image-2" alt="" src={require("../img/image7.png")} />
          <h1>
              EFEKNYA ??
          </h1>
          <p className="label">
          Efek dari gempa bumi dapat sangat beragam, mulai dari kerusakan ringan hingga bencana yang menghancurkan. 
          Masyarakat di daerah rawan gempa sering kali dihadapkan pada ancaman kerusakan struktural, kehilangan nyawa, 
          dan dampak sosial dan ekonomi yang serius.
          </p>
          <br/>
          <p className="label">
          Untuk mengurangi dampak gempa bumi, berbagai upaya pencegahan dan mitigasi telah dilakukan, 
          termasuk pembangunan bangunan tahan gempa, sistem peringatan dini, dan pendidikan masyarakat tentang tindakan darurat saat terjadi gempa bumi. 
          Meskipun demikian, gempa bumi tetap merupakan ancaman alam yang signifikan dan memerlukan perhatian terus-menerus dalam upaya penanganannya.
          </p>
        </div>
        <Routes>
        <Route path="/" element={
        <div className="div">
          <img className="line-5" alt="Line" src={require("../img/Line2.svg")} />
          <div className="rectangle-2" />

          <button className="button">
          <Link to="/cerita1"> 
            <div className="button1">Cerita1</div>
          </Link> 
          <Link to="/cerita2"> 
            <div className="button2">Cerita2</div>
          </Link>
          </button>
        </div>
        } />
        <Route path="/cerita1" element={< Cerita1/>} />
        <Route path="/cerita2" element={< Cerita2/>} />
      </Routes>
      </div>
    </div>
    </Router>
  );
};

export default InfoPage;
