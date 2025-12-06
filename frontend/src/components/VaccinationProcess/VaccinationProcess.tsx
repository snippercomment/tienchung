
import './VaccinationProcess.css';

const VaccinationProcess = () => {
  const steps = [
    {
      icon: 'user',
      title: 'Đăng ký thông tin',
      subtitle: 'khách hàng'
    },
    {
      icon: 'stethoscope',
      title: 'Khám sàng lọc tại',
      subtitle: 'phòng khám'
    },
    {
      icon: 'syringe',
      title: 'Bác sĩ khám, tư vấn',
      subtitle: 'và chỉ định tiêm'
    },
    {
      icon: 'payment',
      title: 'Khác hàng nộp tiền',
      subtitle: 'tại quầy'
    },
    {
      icon: 'injection',
      title: 'Tiêm vắc-xin tại',
      subtitle: 'phòng tiêm'
    },
    {
      icon: 'monitor',
      title: 'Theo dõi và kiểm tra',
      subtitle: 'sau tiêm 30p'
    }
  ];

  const renderIcon = (iconType: string) => {
    switch(iconType) {
      case 'user':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        );
      case 'stethoscope':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
            <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
            <circle cx="20" cy="10" r="2" />
          </svg>
        );
      case 'syringe':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m18 2 4 4" />
            <path d="m17 7 3-3" />
            <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
            <path d="m9 11 4 4" />
            <path d="m5 19-3 3" />
            <path d="m14 4 6 6" />
          </svg>
        );
      case 'payment':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <path d="M2 10h20" />
          </svg>
        );
      case 'injection':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v4" />
            <path d="m16.2 7.8 2.9-2.9" />
            <path d="M18 12h4" />
            <path d="m16.2 16.2 2.9 2.9" />
            <path d="M12 18v4" />
            <path d="m7.8 16.2-2.9 2.9" />
            <path d="M6 12H2" />
            <path d="m7.8 7.8-2.9-2.9" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        );
      case 'monitor':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="vaccination-container">
      <h1 className="title">QUY TRÌNH TIÊM CHỦNG TẠI PBC</h1>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="icon-wrapper">
              {renderIcon(step.icon)}
            </div>
            <div className="step-text">
              <p className="step-title">{step.title}</p>
              <p className="step-subtitle">{step.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VaccinationProcess;