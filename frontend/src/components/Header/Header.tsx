import "./Header.css";
import { FiSearch, FiPhoneCall } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { BsCalendar2Check } from "react-icons/bs";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import logo from '../../assets/logo.jpg'
import { useState } from "react";
import SearchBox from "../../pages/SearchBox/SearchBox";



const Header= () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <header className="header">
      {/* TOP */}
      <div className="header-top">
        <div className="logo-box">
          <img src={logo} alt="Logo" className="logo" />
          <div className="text-box">
            <span className="title">VÌ SỨC KHỎE</span>
            <span className="subtitle">CỘNG ĐỒNG</span>
          </div>
        </div>

        <div className="actions">
          <div className="action">
           <span
        className="search-icon"
        onClick={() => setShowSearch(!showSearch)}
      >
        <FiSearch size={20}  />
      </span>

      {showSearch && <SearchBox onClose={() => setShowSearch(false)} />}
          </div>

          <div className="action">
            <FaUser />
            <span>Tìm trung tâm</span>
          </div>

          <div className="action">
            <BsCalendar2Check />
            <span>Đăng ký tiêm</span>
          </div>

          <div className="action">
            <MdOutlineChatBubbleOutline />
            <span>Tư vấn</span>
          </div>

          <div className="hotline">
            <FiPhoneCall />
            <div>
              <span>Tư vấn 24/7</span>
              <strong>0918341155 – (024) 3 2444 086</strong>
            </div>
          </div>
        </div>
      </div>

      {/* MENU */}
      <nav className="menu">
        <a href="#">Giới thiệu</a>
        <a href="#">Tiêm chủng trẻ em</a>
        <a href="#">Tiêm chủng người lớn</a>
        <a href="#">Gói tiêm</a>
        <a href="#">Tin tức</a>
        <a href="#">Liên hệ</a>
        <a href="#">Về trung tâm</a>
      </nav>
    </header>
  );
};

export default Header;
