import logo_footer from '../../assets/log_footer.jpg'
import dathongbao from '../../assets/kiemduyet.jpg'
import "./Footer.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-col left">
          <div className="logo">
            <img src={logo_footer} alt="Logo" />
            
          </div>

          <p className="desc">
            Trung tâm Vắc-xin, hệ thống tiêm chủng thuộc Dược phẩm Trung ương I - <a href="#">Pharbaco</a>.
          </p>

          <div className="info">
            <p><FaPhoneAlt /> <span>+84 918341155 - (024) 3 2444 086</span></p>
            <p><FaEnvelope /> vaccine@Pharbaco.com.vn</p>
            <p><FaMapMarkerAlt /> 160 Tôn Đức Thắng, Hàng Bột, Đống Đa, Hà Nội</p>
          </div>
        </div>

        {/* CENTER */}
        <div className="footer-col center">
          <h4>Về chúng tôi</h4>
          <ul>
            <li>Hệ thống tiêm chủng</li>
            <li>Giới thiệu trung tâm</li>
            <li>Liên hệ</li>
            <li>Chính sách bảo mật</li>
          </ul>

          <img src={dathongbao} className="cert-img" />
        </div>

        {/* RIGHT */}
        <div className="footer-col right">
          <h4>Đăng ký nhận tin mới</h4>
          <p>
            Trở thành một trong những người đầu tiên biết được các thông tin mới nhất về tiêm chủng và bệnh học liên quan
          </p>

          <div className="newsletter">
            <input type="text" placeholder="Nhập email của bạn" />
            <button>Đăng ký</button>
          </div>

          <div className="socials">
            <span><FaFacebookF /></span>
            <span><FaLinkedinIn /></span>
            <span><FaYoutube /></span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        ©2025 Pharbaco, All Rights Reserved - Design by <span>Minh Thuận</span>
      </div>
    </footer>
  );
};

export default Footer;
