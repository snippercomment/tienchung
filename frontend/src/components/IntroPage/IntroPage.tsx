import "./IntroPage.css";
import doctorImg from "../../assets/doctorImg.jpg"; 

export default function IntroPage() {
  return (
    <div className="intro-wrapper">
      <div className="intro-container">

        {/* LEFT  */}
        <div className="intro-left">
          <h2 className="intro-title">Giới thiệu</h2>

          <p className="intro-text">
            Công ty CP Dược phẩm Trung ương 1 - PBC. Với bề dày lịch sử để năm 
            hình thành và phát triển. Luôn mang đến cho khách hàng điều kiện y tế 
            hiện đại và tốt nhất, cùng với sự tận tâm và chu đáo.
          </p>

          <p className="intro-text">
            Với phương châm cốt lõi là:
            <br /> <strong>An toàn - Hiệu quả - Uy tín - Vì sức khỏe cộng đồng</strong>
          </p>

          <button className="intro-btn">
            <span>⮞</span> Tìm hiểu thêm
          </button>

          {/* ICON LIST */}
          <div className="intro-icon-list">

            <div className="intro-icon-item">
              <p>
                Ưu tiên vắc-xin khan hiếm cho <br />
                khách hàng đã tiêm mũi đầu
              </p>
            </div>

            <div className="intro-icon-item">
             
              <p>
                Cung cấp vắc-xin bình ổn giá <br />
                và trợ giá
              </p>
            </div>

            <div className="intro-icon-item">
            
              <p>
                Mũi vắc – xin lẻ sẽ không phát <br />
                sinh thêm chi phí
              </p>
            </div>

            <div className="intro-icon-item">
            
              <p>
                Không áp dụng tiêm 3 mũi <br />
                cho trẻ trong 1 lần
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="intro-right">
          <img src={doctorImg} alt="Doctor" className="doctor-img" />
        </div>

      </div>
    </div>
  );
}
