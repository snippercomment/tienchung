import "./Header.css";
import { FiSearch, FiPhoneCall } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { BsCalendar2Check } from "react-icons/bs";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import logo from '../../assets/logo.jpg'
import { useState } from "react";
import SearchBox from "../../pages/SearchBox/SearchBox";
import { Link } from "react-router-dom";


const Header= () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <header className="header">
      {/* TOP */}
      <div className="header-top">
        <div className="logo-box">
         <Link to="/"> <img src={logo} alt="Logo" className="logo" /> </Link>
          
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
       <Link to="/gioi-thieu">Giới thiệu</Link>
       <Link to="/tiem-chung-tre-em">Tiêm chủng trẻ em</Link>
       <Link to="/">Tiêm chủng người lớn</Link>
       <Link to="/">Gói tiêm</Link>
       <Link to="/">Tin tức</Link>
       <Link to="/">Liên hệ</Link>
       <Link to="/">Về trung tâm</Link>
       
      </nav>
    </header>
  );
};

export default Header;
