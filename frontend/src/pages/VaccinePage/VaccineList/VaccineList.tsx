import './VaccineList.css';

type VaccineItem = {
  img: string;
  title: string;
  desc: string;
};

const vaccines: VaccineItem[] = [
  {
    img: '/images/heberbiovac.jpg',
    title: 'Vắc xin Heberbiovac HB phòng bệnh viêm gan B',
    desc:
      'Vắc xin Heberbiovac HB là vắc xin viêm gan B tạo miễn dịch chủ động chống nhiễm virus HBV – virus gây viêm gan B...',
  },
  {
    img: '/images/infanrix-hexa.jpg',
    title: 'Infanrix Hexa – Vắc xin 6 trong 1 của Bỉ',
    desc:
      'Lịch tiêm và giá tiêm Vắc xin 6 trong 1 là mũi gộp bạch hầu, ho gà, uốn ván, viêm gan B...',
  },
  {
    img: '/images/hexaxim.jpg',
    title: 'Vắc xin 6 trong 1 HEXAXIM của Pháp',
    desc:
      'Phòng bạch hầu, ho gà, uốn ván, viêm gan B, bại liệt và các bệnh viêm màng não do H.influenzae typ B...',
  },
  {
    img: '/images/pentaxim.jpg',
    title: 'Vắc xin 5 trong 1 PENTAXIM (Pháp)',
    desc:
      'Cập nhật mới và đầy đủ lịch tiêm chủng cho trẻ em, đảm bảo bảo vệ sớm và đầy đủ trước nhiều bệnh nguy hiểm...',
  },
  {
    img: '/images/boostrix.jpg',
    title: 'Vắc xin BOOSTRIX (Bỉ) phòng Ho gà – Bạch hầu – Uốn ván',
    desc:
      'Ho gà – Bạch hầu – Uốn ván là những căn bệnh nguy hiểm hàng đầu đối với trẻ nhỏ...',
  },

  {
    img: '/images/priorix.jpg',
    title: 'Vắc xin PRIORIX phòng bệnh Sởi – Quai bị – Rubella',
    desc:
      'Vắc xin Priorix là vắc xin thế hệ mới phòng ngừa hiệu quả 3 bệnh Sởi – Quai bị – Rubella...',
  },
  {
    img: '/images/gardasil9.jpg',
    title: 'Vắc xin GARDASIL 9 (Mỹ) phòng bệnh do HPV',
    desc:
      'Gardasil 9 là vắc xin thế hệ mới giúp phòng ngừa hiệu quả 9 chủng virus HPV nguy hiểm...',
  },
  {
    img: '/images/mmr.jpg',
    title: 'Vắc xin MMR (Ấn Độ) phòng Sởi – Quai bị – Rubella',
    desc:
      'MMR là vắc xin sống, giảm độc lực, được đóng khô và có nước hồi chỉnh kèm theo...',
  },
  {
    img: '/images/infanrix-ipv-hib.jpg',
    title: 'Vắc xin 5 trong 1 INFANRIX IPV + HIB',
    desc:
      'Được WHO khuyến cáo phòng bạch hầu, ho gà, uốn ván, bại liệt và viêm màng não...',
  },
  {
    img: '/images/rotarix.jpg',
    title: 'Vắc xin ROTARIX (Bỉ) phòng tiêu chảy cấp do Rotavirus',
    desc:
      'Virus Rota là một trong những nguyên nhân hàng đầu gây tiêu chảy nặng ở trẻ nhỏ...',
  },
];

const VaccineList = () => {
  return (
    <div className="vaccine-list-wrapper">
      <div className="vaccine-list-container">
        <div className="breadcrumb">
          Trang chủ <span>›</span> Các loại vắc xin cho trẻ em
        </div>

        <h2 className="page-title">CÁC LOẠI VẮC XIN CHO TRẺ EM</h2>

        <div className="vaccine-grid">
          {vaccines.map((item, index) => (
            <div key={index} className="vaccine-item">
              <img src={item.img} alt={item.title} />
              <div className="vaccine-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* pagination giả */}
        <div className="pagination">
          <span className="active">1</span>
          <span>2</span>
          <span>3</span>
          <span>›</span>
        </div>
      </div>
    </div>
  );
};

export default VaccineList;
