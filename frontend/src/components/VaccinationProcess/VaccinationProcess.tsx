import './VaccinationProcess.css';

const VaccinationProcess = () => {
  const steps = [
    { icon: 'user', title: 'Đăng ký thông tin khách hàng'},
    { icon: 'stethoscope', title: 'Khám sàng lọc tại phòng khám'},
    { icon: 'syringe', title: 'Bác sĩ khám, tư vấn và chỉ định tiêm'},
    { icon: 'payment', title: 'Khác hàng nộp tiền tại quầy'},
    { icon: 'injection', title: 'Tiêm vắc-xin tại phòng tiêm'},
    { icon: 'monitor', title: 'Theo dõi và kiểm tra sau tiêm 30p'}
  ];

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'user':
        return (
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="7" r="4" />
            <path d="M5 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
          </svg>
        );
      case 'stethoscope':
        return (
          <svg viewBox="0 0 24 24">
            <path d="M4 2v6a6 6 0 0 0 12 0V2" />
            <path d="M8 15v1a6 6 0 0 0 12 0v-4" />
            <circle cx="20" cy="10" r="2" />
          </svg>
        );
      case 'syringe':
        return (
          <svg viewBox="0 0 24 24">
            <path d="M18 2l4 4M17 7l3-3M19 9L8.7 19.3a2.4 2.4 0 0 1-3.4 0l-.6-.6a2.4 2.4 0 0 1 0-3.4L15 5" />
          </svg>
        );
      case 'payment':
        return (
          <svg viewBox="0 0 24 24">
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <path d="M2 10h20" />
          </svg>
        );
      case 'injection':
        return (
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
          </svg>
        );
      case 'monitor':
        return (
          <svg viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="vaccination-section">
      <div className="vaccination-container">
        <h1 className="title">QUY TRÌNH TIÊM CHỦNG TẠI PBC</h1>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step" key={index}>
              <div className="icon-wrapper">{renderIcon(step.icon)}</div>
              <div className="step-text">
                <p className="step-title">{step.title}</p>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VaccinationProcess;
