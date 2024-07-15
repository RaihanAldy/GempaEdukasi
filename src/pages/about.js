import React from "react";
import "./style.css";
import Header from "./header";
import Footer from "./footer";

const about = () => {
  return (
    <div className="about">
      <title>Tentang | Client UI</title>
      <Header />
      <div className="overlap">
        <div className="overlap-group">
          <img className="image" alt="" src={require("../img/image8.png")} />
          <h1 className="section-title">
          Di balik layar "Gemasi"
          </h1>
        <div className="container">
        <div className="title2">
            Sebelum Terjadi Gempa Bumi <br/>
            A. Kunci Utama adalah <br/>
            Mengenali apa yang disebut gempabumi
            Pastikan bahwa struktur dan letak rumah Anda dapat terhindar dari bahaya yang disebabkan oleh gempabumi (longsor, liquefaction dll);
            Mengevaluasi dan merenovasi ulang struktur bangunan Anda agar terhindar dari bahaya gempabumi.</div>
        <div className="image">
        <img alt="a row of houses with red tiled roofs" src={require("../img/tips1.avif")}
            srcset="https://images.unsplash.com/photo-1632037677514-97f510339078?auto=format&amp;fit=crop&amp;w=328&amp;h=208 328w,
            https://images.unsplash.com/photo-1632037677514-97f510339078?auto=format&amp;fit=crop&amp;w=656&amp;h=416 656w,
            https://images.unsplash.com/photo-1632037677514-97f510339078?auto=format&amp;fit=crop&amp;w=861&amp;h=546 861w,
            https://images.unsplash.com/photo-1632037677514-97f510339078?auto=format&amp;fit=crop&amp;w=984&amp;h=624 984w,
            https://images.unsplash.com/photo-1632037677514-97f510339078?auto=format&amp;fit=crop&amp;w=606&amp;h=384 606w,
            https://images.unsplash.com/photo-1632037677514-97f510339078?auto=format&amp;fit=crop&amp;w=1212&amp;h=768 1212w" 
            sizes="(min-width: 920px) 606px, calc(100vw - 0px)" height="384" width="606" loading="eager" class="image__image" data-v-47c05b4e="" 
            data-qa="builder-gridelement-gridimage"/>
        </div>
        </div>
        <div className="container">
        <div className="title2">
            B. Kenali Lingkungan Tempat Anda Bekerja<br/>
            Perhatikan letak pintu, lift serta tangga darurat, apabila terjadi gempabumi, sudah mengetahui tempat paling aman untuk berlindung;
            Belajar melakukan P3K;
            Belajar menggunakan alat pemadam kebakaran;
            Catat nomor telepon penting yang dapat dihubungi pada saat terjadi gempabumi.</div>
        <div className="image">
        <img alt="a yellow sign hanging from the ceiling of a building" src={require("../img/tips2.avif")}
        srcset="https://images.unsplash.com/photo-1673666721553-5ea40d0a328d?auto=format&amp;fit=crop&amp;w=328&amp;h=208 328w,
        https://images.unsplash.com/photo-1673666721553-5ea40d0a328d?auto=format&amp;fit=crop&amp;w=656&amp;h=416 656w,
        https://images.unsplash.com/photo-1673666721553-5ea40d0a328d?auto=format&amp;fit=crop&amp;w=861&amp;h=546 861w,
        https://images.unsplash.com/photo-1673666721553-5ea40d0a328d?auto=format&amp;fit=crop&amp;w=984&amp;h=624 984w,
        https://images.unsplash.com/photo-1673666721553-5ea40d0a328d?auto=format&amp;fit=crop&amp;w=606&amp;h=384 606w,
        https://images.unsplash.com/photo-1673666721553-5ea40d0a328d?auto=format&amp;fit=crop&amp;w=1212&amp;h=768 1212w"
         sizes="(min-width: 920px) 606px, calc(100vw - 0px)" height="384" width="606" loading="lazy" class="image__image" data-v-47c05b4e="" data-qa="builder-gridelement-gridimage"/>
        </div>
        </div>
        <div className="container">
        <div className="title2">    
            C. Persiapan Rutin pada tempat Anda bekerja dan tinggal<br/>
            Perabotan (lemari, cabinet, dll) diatur menempel pada dinding (dipaku, diikat, dll) untuk menghindari jatuh, roboh, bergeser pada saat terjadi gempabumi.
            Simpan bahan yang mudah terbakar pada tempat yang tidak mudah pecah agar terhindar dari kebakaran.
            Selalu mematikan air, gas dan listrik apabila tidak sedang digunakan.</div>
        <div className="image">
        <img alt="a living room filled with furniture and a flat screen tv" src={require("../img/tips3.avif")}
            srcset="https://images.unsplash.com/photo-1639121662269-bb3b9efa8f8b?auto=format&amp;fit=crop&amp;w=328&amp;h=208 328w,
            https://images.unsplash.com/photo-1639121662269-bb3b9efa8f8b?auto=format&amp;fit=crop&amp;w=656&amp;h=416 656w,
            https://images.unsplash.com/photo-1639121662269-bb3b9efa8f8b?auto=format&amp;fit=crop&amp;w=861&amp;h=546 861w,
            https://images.unsplash.com/photo-1639121662269-bb3b9efa8f8b?auto=format&amp;fit=crop&amp;w=984&amp;h=624 984w,
            https://images.unsplash.com/photo-1639121662269-bb3b9efa8f8b?auto=format&amp;fit=crop&amp;w=606&amp;h=384 606w,
            https://images.unsplash.com/photo-1639121662269-bb3b9efa8f8b?auto=format&amp;fit=crop&amp;w=1212&amp;h=768 1212w" 
            sizes="(min-width: 920px) 606px, calc(100vw - 0px)" height="384" width="606" loading="lazy" class="image__image" data-v-47c05b4e="" data-qa="builder-gridelement-gridimage"/>
        </div>
        </div>
        <div className="container">
        <div className="title2">    
            D. Penyebab celaka yang paling banyak pada saat gempabumi adalah akibat kejatuhan material<br/>
            Atur benda yang berat sedapat mungkin berada pada bagian bawah
            Cek kestabilan benda yang tergantung yang dapat jatuh pada saat gempabumi terjadi (misalnya lampu dll).</div>
        <div className="image">
        <img alt="tufted blue 3-seat sofa near white wall and window" src={require("../img/tips4.avif")}
            srcset="https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&amp;fit=crop&amp;w=328&amp;h=208 328w,
            https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&amp;fit=crop&amp;w=656&amp;h=416 656w,
            https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&amp;fit=crop&amp;w=861&amp;h=546 861w,
            https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&amp;fit=crop&amp;w=984&amp;h=624 984w,
            https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&amp;fit=crop&amp;w=606&amp;h=384 606w,
            https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&amp;fit=crop&amp;w=1212&amp;h=768 1212w" 
            sizes="(min-width: 920px) 606px, calc(100vw - 0px)" height="384" width="606" loading="lazy" class="image__image" 
            data-v-47c05b4e="" data-qa="builder-gridelement-gridimage"/>
        </div>
        </div>
        <div className="container">
        <div className="title2">    
            E. Alat yang harus ada di setiap tempat<br/>
            Kotak P3K;Senter/lampu baterai;Radio;
            Makanan suplemen dan air.</div>
        <div className="image">
        <img alt="red and white box on white table" src={require("../img/tips5.avif")}
        srcset="https://images.unsplash.com/photo-1617257484989-9f8ab411c362?auto=format&amp;fit=crop&amp;w=328&amp;h=208 328w,
        https://images.unsplash.com/photo-1617257484989-9f8ab411c362?auto=format&amp;fit=crop&amp;w=656&amp;h=416 656w,
        https://images.unsplash.com/photo-1617257484989-9f8ab411c362?auto=format&amp;fit=crop&amp;w=861&amp;h=546 861w,
        https://images.unsplash.com/photo-1617257484989-9f8ab411c362?auto=format&amp;fit=crop&amp;w=984&amp;h=624 984w,
        https://images.unsplash.com/photo-1617257484989-9f8ab411c362?auto=format&amp;fit=crop&amp;w=606&amp;h=384 606w,
        https://images.unsplash.com/photo-1617257484989-9f8ab411c362?auto=format&amp;fit=crop&amp;w=1212&amp;h=768 1212w" 
        sizes="(min-width: 920px) 606px, calc(100vw - 0px)" height="384" width="606" loading="lazy" class="image__image" 
        data-v-47c05b4e="" data-qa="builder-gridelement-gridimage"/>
        </div>
        </div>
        <div className="container">
        <div className="title2">    
            Saat terjadi Gempa Bumi<br/>
            A. Jika Anda berada di dalam bangunan<br/>
            Lindungi badan dan kepala Anda dari reruntuhan bangunan dengan bersembunyi di bawah meja dll;
            Cari tempat yang paling aman dari reruntuhan dan goncangan;
            Lari ke luar apabila masih dapat dilakukan</div>
        <div className="image">
        <img alt="brown Scottish fold in brown thick-pile blanket" src={require("../img/tips6.avif")}
            srcset="https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=328&amp;h=208 328w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=656&amp;h=416 656w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=861&amp;h=546 861w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=984&amp;h=624 984w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=606&amp;h=384 606w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=1212&amp;h=768 1212w"
             sizes="(min-width: 920px) 606px, calc(100vw - 0px)" height="384" width="606" loading="lazy" class="image__image" 
             data-v-47c05b4e="" data-qa="builder-gridelement-gridimage"/>
        </div>
        </div>
        <div className="container">
        <div className="title2">    
            B. Jika berada di luar bangunan atau area terbuka<br/>
                Menghindari dari bangunan yang ada di sekitar Anda seperti gedung, tiang listrik, pohon, dll
                Perhatikan tempat Anda berpijak, hindari apabila terjadi rekahan tanah</div>
        <div className="image">
        <img alt="brown Scottish fold in brown thick-pile blanket" src={require("../img/tips7.avif")}
            srcset="https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=328&amp;h=208 328w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=656&amp;h=416 656w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=861&amp;h=546 861w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=984&amp;h=624 984w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=606&amp;h=384 606w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=1212&amp;h=768 1212w"
             sizes="(min-width: 920px) 606px, calc(100vw - 0px)" height="384" width="606" loading="lazy" class="image__image" 
             data-v-47c05b4e="" data-qa="builder-gridelement-gridimage"/>
        </div>
        </div>
        <div className="container">
        <div className="title2">    
            C. Jika Anda sedang mengendarai mobil<br/>
            Keluar, turun dan menjauh dari mobil hindari jika terjadi pergeseran atau kebakaran;
            Lakukan point B.</div>
        <div className="image">
        <img alt="brown Scottish fold in brown thick-pile blanket" src={require("../img/tips8.avif")}
            srcset="https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=328&amp;h=208 328w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=656&amp;h=416 656w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=861&amp;h=546 861w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=984&amp;h=624 984w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=606&amp;h=384 606w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=1212&amp;h=768 1212w"
             sizes="(min-width: 920px) 606px, calc(100vw - 0px)" height="384" width="606" loading="lazy" class="image__image" 
             data-v-47c05b4e="" data-qa="builder-gridelement-gridimage"/>
        </div>
        </div>
        <div className="container">
        <div className="title2">    
            D. Jika Anda tinggal atau berada di pantai<br/>
            Jauhi pantai untuk menghindari bahaya tsunami</div>
        <div className="image">
        <img alt="brown Scottish fold in brown thick-pile blanket" src={require("../img/tips9.avif")}
            srcset="https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=328&amp;h=208 328w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=656&amp;h=416 656w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=861&amp;h=546 861w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=984&amp;h=624 984w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=606&amp;h=384 606w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=1212&amp;h=768 1212w"
             sizes="(min-width: 920px) 606px, calc(100vw - 0px)" height="384" width="606" loading="lazy" class="image__image" 
             data-v-47c05b4e="" data-qa="builder-gridelement-gridimage"/>
        </div>
        </div>
        <div className="container">
        <div className="title2">    
            E. Jika Anda tinggal di daerah pegunungan<br/>
            Apabila terjadi gempabumi hindari daerah yang mungkin terjadi longsoran.</div>
        <div className="image">
        <img alt="brown Scottish fold in brown thick-pile blanket" src={require("../img/tips10.avif")}
            srcset="https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=328&amp;h=208 328w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=656&amp;h=416 656w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=861&amp;h=546 861w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=984&amp;h=624 984w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=606&amp;h=384 606w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=1212&amp;h=768 1212w"
             sizes="(min-width: 920px) 606px, calc(100vw - 0px)" height="384" width="606" loading="lazy" class="image__image" 
             data-v-47c05b4e="" data-qa="builder-gridelement-gridimage"/>
        </div>
        </div>
        <div className="container">
        <div className="title2">    
            Setelah terjadi Gempa bumi<br/>
            A. Jika Anda berada di dalam bangunan<br/>
            Keluar dari bangunan tersebut dengan tertib;
            Jangan menggunakan tangga berjalan atau lift, gunakan tangga biasa;
            Periksa apa ada yang terluka, lakukan P3K;
            Telepon atau mintalah pertolongan apabila terjadi luka parah pada Anda atau sekitar Anda.</div>
        <div className="image">
        <img alt="brown Scottish fold in brown thick-pile blanket" src={require("../img/tips11.avif")}
            srcset="https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=328&amp;h=208 328w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=656&amp;h=416 656w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=861&amp;h=546 861w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=984&amp;h=624 984w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=606&amp;h=384 606w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=1212&amp;h=768 1212w"
             sizes="(min-width: 920px) 606px, calc(100vw - 0px)" height="384" width="606" loading="lazy" class="image__image" 
             data-v-47c05b4e="" data-qa="builder-gridelement-gridimage"/>
        </div>
        </div>
        <div className="container">
        <div className="title2">    
            B. Periksa lingkungan sekitar Anda<br/>
            Periksa apabila terjadi kebakaran.
            Periksa apabila terjadi kebocoran gas.
            Periksa apabila terjadi hubungan arus pendek listrik.
            Periksa aliran dan pipa air.
            Periksa apabila ada hal-hal yang membahayakan (mematikan listrik, tidak menyalakan api dll)</div>
        <div className="image">
        <img alt="brown Scottish fold in brown thick-pile blanket" src={require("../img/tips12.avif")}
            srcset="https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=328&amp;h=208 328w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=656&amp;h=416 656w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=861&amp;h=546 861w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=984&amp;h=624 984w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=606&amp;h=384 606w,
            https://images.unsplash.com/photo-1494256997604-768d1f608cac?auto=format&amp;fit=crop&amp;w=1212&amp;h=768 1212w"
             sizes="(min-width: 920px) 606px, calc(100vw - 0px)" height="384" width="606" loading="lazy" class="image__image" 
             data-v-47c05b4e="" data-qa="builder-gridelement-gridimage"/>
        </div>
        </div>
            <Footer />
            </div>
        </div>
    </div>
  );
};

export default about;