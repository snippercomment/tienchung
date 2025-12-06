import "./HomePage.css";
import VietNamOSMMap from "../../components/VietNamOSMMap/VietNamOSMMap";
import TiemChungList from "../../components/TiemChungList/TiemChungList";
import IntroPage from "../../components/IntroPage/IntroPage";

import anh1 from "../../assets/anh1.jpg"
import Vaccination from "../../components/Vaccination/vaccination";
import bacsi from "../../assets/bacsi.jpg"
import VaccinationProcess from "../../components/VaccinationProcess/VaccinationProcess";

export default function HomePage() {
  return (
   <div>
     <div className="wrapper">
      {/* LEFT PANEL */}
      <div className="left-panel">
        <div className="content-box">
          <h2>HỆ THỐNG TIÊM CHỦNG</h2>
          <p>
            Hệ Thống tiêm chủng vắc xin Công ty CP Dược phẩm Trung ương 1 -
            Pharmaco
          </p>

          <label>Tỉnh / thành phố</label>
          <select>
            <option>Hà Nội</option>
            <option>Hồ Chí Minh</option>
            <option>Đà Nẵng</option>
          </select>

          <label>Trung tâm</label>
          <select>
            <option>Trung tâm 1</option>
            <option>Trung tâm 2</option>
          </select>

          <button className="register-btn">Đăng ký tiêm</button>
        </div>
      </div>

      {/* RIGHT MAP AREA */}
      <div className="map-area">
        <VietNamOSMMap />
     
      </div>
      
    </div>
     <div className="below-map">
    <h3 className="company-title">Công ty CP Dược phẩm Trung ương I - Pharbaco</h3>
    <p className="company-desc">Pharbaco với bề dày lịch sử 66 năm</p>
    <h2 className="system-title">HỆ THỐNG TIÊM CHỦNG DƯỢC PHẨM TRUNG ƯƠNG I – PHARBACO</h2>
    <TiemChungList/>
  </div>
  <div>
    <IntroPage/>
  </div>
  
  <div className="hero-banner">
    <div className="hero-left">
      <img src={anh1} alt="Medical team" className="hero-image" />
    </div>
    <div className="hero-right">
      <div className="hero-content">
        <p className="hero-label">HỆ THỐNG TIÊM CHỦNG PHARBACO</p>
        <h1 className="hero-title">CHUNG TAY ĐẨY LÙI BỆNH TRUYỀN NHIỄM</h1>
        <p className="hero-desc">
          Số 1 về Vắc-xin phòng bệnh đại trên toàn quốc, với đội ngũ chuyên gia giàu 
          kinh nghiệm và hệ thống phòng tiêm rộng khắp cả nước
        </p>
        <button className="hero-btn">Tìm hiểu thêm</button>
      </div>
    </div>
  </div>
  <div className="below-map">
     <h3 className="company-title">Các dịch vụ tiêm chủng</h3>
    <p className="company-desc">Hệ Thống tiêm chủng vắc xin Công ty CP Dược phẩm Trung ương I - Pharbaco Với bề dày lịch sử 66 năm hình thành</p>
   
    <Vaccination/>
  </div>
 
  <div className="doctor-section">
    <div className="doctor-content">
      <h2 className="doctor-title">Đội ngũ chuyên gia</h2>
      <h3 className="doctor-subtitle">dày dặn kinh nghiệm</h3>
      <p className="doctor-desc">
        Đội ngũ chuyên gia với 40 năm kinh nghiệm phục vụ trong lĩnh vực đa khoa, da phổng. Có trên 50.000 giờ thực hành lâm lực
      </p>
      <button className="doctor-btn">Tìm hiểu thêm</button>
    </div>
    <div className="doctor-quote-container">
      <div className="doctor-quote">
        <span className="quote-mark quote-open">"</span>
        <p className="quote-text">
          Tiêm chủng vắc xin không bao giờ là muộn nhưng tiêm sớm, đúng lịch và đủ liều thì phòng bệnh tốt nhất.
        </p>
        <span className="quote-mark quote-close">"</span>
      </div>
      <div className="doctor-info">
        <h4 className="doctor-name">BS. HOÀNG ÁNH QUYẾT</h4>
        <p className="doctor-role">
          Chủ tịch Hội đồng chuyên môn Hệ thống Vắc xin Dược phẩm Trung ương I - Pharbaco
        </p>
      </div>
    </div>
    <div className="doctor-image-container">
      <img src={bacsi} alt="BS. Hoàng Ánh Quyết" className="doctor-image" />
    </div>
  </div>
  <div>
    <VaccinationProcess/>
  </div>
   </div>
  );
}
