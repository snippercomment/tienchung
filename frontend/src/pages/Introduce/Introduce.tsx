import "./Introduce.css";
import { Building2, Shield, Award, Users } from "lucide-react";
import para from "../../assets/para.jpg";
import qc from "../../assets/qc.jpg";
import admin from "../../assets/admin.jpg";

const Introduce = () => {
  return (
    <div className="introduce-page">
      <div className="intro-container">
        <div className="intro-background">
          <img src={admin} alt="Giới thiệu" />
        </div>

        <div className="intro-content">
          <h1 className="intro-title">GIỚI THIỆU</h1>
        </div>
      </div>

      <div className="company-section">
        <div className="company-content">
          <div className="company-text">
            <h2>
              CÔNG TY CỔ PHẦN DƯỢC PHẨM
              <br />
              TRUNG ƯƠNG I - PHARBACO
            </h2>
            <p className="company-description">
              Tên đầy đủ: Công ty Cổ phần Dược phẩm Trung ương I - Pharbaco
            </p>
            <p>
              Với 60 năm hình thành và phát triển (5 tháng 8 năm 1964), Pharbaco
              luôn kiên định với sứ mệnh là đơn vị phát triển liên tục trong
              lĩnh vực thuốc chữa bệnh phục vụ nhân dân, phát triển bền vững và
              không ngừng phát triển, không ngừng cải tiến, không ngừng nâng cao
              chất lượng trong tâm đối với xã hội.
            </p>
            <p>
              Để đạt được mục tiêu trên, Công ty đã tập trung vào năng lực sản
              xuất - Công ty kiểm soát toàn bộ chuỗi cung ứng, từ khâu phát
              triển nhà cung cấp nguyên liệu đầu vào (phân phối nước nước của
              dòng quản nút) 135 tỷ đồng (EU, GMP và ISO 13485).
            </p>
            <p>
              Trong tương lai Pharbaco với mục tiêu hoạch toán liên tục -
              Pharbaco vẫn là doanh vị đây là xã hội và môi trường; đồng thời
              bắt kịp công nghệ để thụ hưởng phát triển của nhân dòng và phát
              triển sàng tuổi trong truyền thống, liên tục, và sự nâng cấp liên
              tiếp vô cùng cao.
            </p>
          </div>
          <div className="company-image">
            <img src={para} alt="Pharbaco Building" />
          </div>
        </div>
      </div>
      <div className="features-section">
        <div className="feature-card">
          <div className="feature-icon">
            <Shield size={24} />
          </div>
          <h3>
            Hệ thống tiêu chuẩn chặt chẽ
            <br />
            Đảm bảo chất lượng cao nhất sản phẩm.
          </h3>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <Building2 size={24} />
          </div>
          <h3>
            Cung cấp các sản phẩm tối
            <br />
            ưu cho tất cả
          </h3>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <Award size={24} />
          </div>
          <h3>
            Kiểm đặc - Vô số giải thưởng phát
            <br />
            triền khoa học phát
          </h3>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <Users size={24} />
          </div>
          <h3>
            Khẳng tục phục điểm trong 6 năm
            <br />
            trước lỳ thường 1 tên...
          </h3>
        </div>
      </div>
      <div className="contact-section">
        <div className="contact-image">
          <img src={qc} alt="QC Building" />
        </div>
        <div className="contact-info">
          <h2>HỆ THỐNG PHÒNG TIÊM PBC</h2>
          <p>
            Công ty CP Dược phẩm Trung ương I - PBC trụ sở chính nằm tại 160 Tôn
            Đức Thắng, Phường Hàng Bột, Quận Đống Đa, Hà Nội. Với bề dày lịch sử
            66 năm hình thành và phát triển, Công ty luôn khẳng định là doanh
            nghiệp là cở đầu, giữ vai trò then chốt trong chiến lược phát triển
            ngành Dược nước nhà:
          </p>
          <p>
            Cung cấp thuốc phục vụ cho quân đội trong thời kỳ kháng chiến và các
            chương trình y tế trọng điểm của quốc gia, công ty đã đầu tư hàng
            trăm tỷ đồng để xây dựng hai phòng nghiên cứu và phát triển sản phẩm
            theo tiêu chuẩn của nước tham chiếu Nằm trong chương trình phát
            triển và định hướng của công ty là sẽ trở thành một tổ hợp với tất
            cả các lĩnh vực sản xuất cơ bản trong ngành dược nói chung và các
            ngành vì sức khoẻ cộng đồng trong đó có y tế dự phòng Năm 2015 công
            ty ra đời hệ thống phòng tiêm chủng liên kết với các Bệnh viện lớn
            và Bệnh viện ngành, trở thành một trong những Hệ thống dự phòng,
            phòng bệnh tiên phong đi đầu, năm 2021 hệ thống tiêm chủng Công ty
            CP Dược phẩm Trung ương I - PBC là cơ sở tiêm chủng đầu tiên hỗ trợ
            chung tay cùng các Bộ, Sở, Trung tâm Y tế tiêm hàng trăm ngàn liều
            vắc xin covid cho cộng đồng kịp thời đối phó với làn sóng dịch Covid
            lớn tràn về Hà Nội đảm bảo an toàn cho người dân
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
