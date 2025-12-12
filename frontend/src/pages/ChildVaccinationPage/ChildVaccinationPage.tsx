import { Link } from "react-router-dom";
import "./ChildVaccinationPage.css";


type SectionItem = {
  img: string;
  title: string;
  desc: string;
  link: string;
};

type NewsItem = {
  img: string;
  title: string;
  desc: string;
  link: string;
};


const sections: SectionItem[] = [
  {
    img: "/images/lichtiem.jpg",
    title: "Lịch tiêm chủng cho trẻ em",
    desc:
      "Cập nhật mới và đầy đủ nhất lịch tiêm chủng cho trẻ em, đảm bảo bé yêu được chủng ngừa sớm, đầy đủ, đúng lịch, bảo vệ bé trước nhiều bệnh truyền nhiễm nguy hiểm.",
    link: "lich-tiem",
  },
  {
    img: "/images/loaivacxin.jpg",
    title: "Các loại vắc xin cho trẻ em",
    desc:
      "Danh sách các loại vắc xin cần thiết giúp trẻ em phát triển khỏe mạnh toàn diện.",
    link: "vac-xin",
  },
  {
    img: "/images/goivacxin.jpg",
    title: "Gói vắc xin cho trẻ em",
    desc:
      "Các gói vắc xin được thiết kế tiết kiệm, phù hợp từng độ tuổi.",
    link: "/tiem-chung/goi-vac-xin",
  },
  {
    img: "/images/quytrinh.jpg",
    title: "Quy trình tiêm chủng",
    desc:
      "Quy trình tiêm chủng an toàn, đạt chuẩn Bộ Y tế, giúp phụ huynh yên tâm.",
    link: "/tiem-chung/quy-trinh",
  },
  {
    img: "/images/banggia.jpg",
    title: "Bảng giá",
    desc: "Thông tin bảng giá minh bạch, rõ ràng.",
    link: "/tiem-chung/bang-gia",
  },
];

const hotNews: NewsItem[] = [
  {
    title: "Sau khi tiêm vắc xin bao lâu thì được mang thai?",
    desc: "Thưa bác sĩ, sau khi tiêm vắc xin bao lâu thì có thể mang thai?",
    img: "/images/news1.jpg",
    link: "/tin-tuc/sau-khi-tiem-vac-xin",
  },
  {
    title: "Tầm quan trọng của chủng ngừa gia đình",
    desc: "Khám sức khỏe và phòng bệnh cho cả gia đình",
    img: "/images/news2.jpg",
    link: "/tin-tuc/chung-ngua-gia-dinh",
  },
  {
    title: "Làm gì khi sốt nhẹ sau tiêm?",
    desc: "Thưa bác sĩ, sau khi tiêm vắc xin trẻ bị sốt?",
    img: "/images/news3.jpg",
    link: "/tin-tuc/sot-sau-tiem",
  },
  {
    title: "Khám phụ khoa có phát hiện được ung thư?",
    desc: "Thưa bác sĩ, khám phụ khoa có phát hiện được?",
    img: "/images/news4.jpg",
    link: "/tin-tuc/kham-phu-khoa",
  },
  {
    title: "Tỷ lệ tiêm chủng trước và trong mang thai",
    desc: "Tiêm phòng như thế nào là đúng?",
    img: "/images/news5.jpg",
    link: "/tin-tuc/tiem-chung-mang-thai",
  },
];


const ChildVaccinationPage = () => {
  return (
    <div className="child-vaccine-page">
      <div className="container">
        {/* CENTER */}
        <main className="center-column">
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Trang chủ</Link>
            <span className="separator">›</span>
            <span  className="breadcrumb-link">Tiêm chủng cho trẻ em</span>
            
          </div>

          <h1>TIÊM CHỦNG CHO TRẺ EM</h1>

          {sections.map((item, index) => (
            <Link to={item.link} className="content-row" key={index}>
              <div className="row-image">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="row-text">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </Link>
          ))}
          

        </main>

     
        <aside className="right-column">
          <div className="hot-news">
            <h2>TIN TỨC NỔI BẬT</h2>

            {hotNews.map((item, index) => (
              <Link to={item.link} className="news-item" key={index}>
                <img src={item.img} alt={item.title} />
                <div className="news-text">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ChildVaccinationPage;
