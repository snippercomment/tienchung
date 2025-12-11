import "./VaccinationSchedule.css";
import { Link } from "react-router-dom";

const VaccinationSchedule = () => {
  return (
    <div className="vaccination-page">
      {/* ===== BANNER ===== */}
      <div className="vaccination-hero">
        <div className="hero-inner">
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Trang chủ</Link>
            <span className="separator">›</span>
            <Link to="/tiem-chung-tre-em" className="breadcrumb-link">Tiêm chủng cho trẻ em</Link>
             <span className="separator">›</span>
            <span className="breadcrumb-current">Lịch tiêm chủng cho trẻ em</span>
          </div>


          <h1 className="page-title">LỊCH TIÊM CHỦNG CHO TRẺ</h1>
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="vaccination-container">
        <div className="table-wrapper">
          <h2 className="table-title">LỊCH TIÊM CHỦNG CHO TRẺ</h2>

          <table className="vaccination-table">
            <thead>
              <tr>
                <th rowSpan={2} className="vaccine-column">
                  Tuổi / Vaccine
                </th>
                <th colSpan={11}>Tháng</th>
                <th colSpan={4}>Tuổi</th>
              </tr>
              <tr>
                <th>Sơ sinh</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
                <th>9</th>
                <th>10-11</th>
                <th>12</th>
                <th>2</th>
                <th>3-4</th>
                <th>5-6</th>
                <th>7-8</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="vaccine-name">Lao</td>
                <td className="check">x</td>
                {Array(14)
                  .fill(null)
                  .map((_, i) => (
                    <td key={i}></td>
                  ))}
              </tr>

              <tr>
                <td className="vaccine-name">Viêm gan B</td>
                <td className="check">x</td>
                <td className="check">x</td>
                <td className="check">x</td>
                <td className="check">x</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="check">x</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="check">x</td>
              </tr>
              <tr>
                <td className="vaccine-name">Bạch hầu, ho gà, uốn ván</td>
                <td className="check"></td>
                <td className="check">x</td>
                <td className="check">x</td>
                <td className="check">x</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="check">x</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="check"></td>
              </tr>
              <tr>
                <td className="vaccine-name">Bại liệt</td>
                <td className="check"></td>
                <td className="check">x</td>
                <td className="check">x</td>
                <td className="check">x</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="check">x</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="check"></td>
              </tr>
              <tr>
                <td className="vaccine-name">
                  Viêm phổi, viêm màng não mủ do Hib
                </td>
                <td className="check"></td>
                <td className="check">x</td>
                <td className="check">x</td>
                <td className="check">x</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="check">x</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="check"></td>
              </tr>
              <tr>
                <td className="vaccine-name">Tiêu chảy do Rota Virus</td>
                <td colSpan={15} className="note-cell">
                  Phác đồ 2 hoặc 3 liều, mỗi liều cách nhau tối thiểu 1 tháng
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VaccinationSchedule;
