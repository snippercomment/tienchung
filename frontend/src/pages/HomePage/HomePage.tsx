import "./HomePage.css";
import VietNamOSMMap from "../../components/VietNamOSMMap/VietNamOSMMap";
import TiemChungList from "../../components/TiemChungList/TiemChungList";

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
   </div>
  );
}
