import { useState } from 'react';
import { ChevronLeft, ChevronRight, Search, Shield, Syringe, Droplet, Pill, Activity, Heart } from 'lucide-react';
import './VaccineInfo.css';

const VaccineInfo = () => {
  const [activeTab, setActiveTab] = useState<'group' | 'age'>('group');
  const [currentSlide, setCurrentSlide] = useState(0);

  //  DỮ LIỆU THEO NHÓM BỆNH 
  const vaccinesByGroup = [
    { icon: Shield, name: 'Vắc xin 6in1' },
    { icon: Syringe, name: 'Vắc xin 5in1' },
    { icon: Droplet, name: 'Vắc xin Rota Virus' },
    { icon: Pill, name: 'Vắc xin phế cầu khuẩn' },
    { icon: Activity, name: 'Vắc xin phòng Lao' },
    { icon: Heart, name: 'Vắc xin viêm gan B Trẻ em' }
  ];

  //DỮ LIỆU THEO ĐỘ TUỔI 
  const vaccinesByAge = [
    { icon: Shield, name: 'Sơ sinh (0 - 1 tháng)' },
    { icon: Syringe, name: '2 tháng tuổi' },
    { icon: Droplet, name: '4 tháng tuổi' },
    { icon: Pill, name: '6 tháng tuổi' },
    { icon: Heart, name: '9 tháng tuổi' },
    { icon: Activity, name: '12 tháng tuổi' }
  ];

  
  const vaccines = activeTab === 'group' ? vaccinesByGroup : vaccinesByAge;

  const slidesPerView = 5;
  const maxSlide = Math.max(0, vaccines.length - slidesPerView);

  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  // Reset slide mỗi khi đổi tab
  const changeTab = (tab: 'group' | 'age') => {
    setActiveTab(tab);
    setCurrentSlide(0);
  };

  return (
    <div className="vaccine-container">
      <div className="vaccine-content">
        <h1 className="vaccine-title">THÔNG TIN SẢN PHẨM VẮC XIN</h1>

        {/* Ô tìm kiếm */}
        <div className="search-container">
          <input type="text" placeholder="Tìm kiếm..." className="search-input" />
          <Search className="search-icon" size={20} />
        </div>

        {/* TAB */}
        <div className="tabs-container">
          <button
            className={`tab ${activeTab === 'group' ? 'active' : ''}`}
            onClick={() => changeTab('group')}
          >
            VẮC XIN THEO NHÓM BỆNH
          </button>

          <button
            className={`tab ${activeTab === 'age' ? 'active' : ''}`}
            onClick={() => changeTab('age')}
          >
            VẮC XIN THEO ĐỘ TUỔI
          </button>
        </div>

        {/* CAROUSEL */}
        <div className="carousel-container">
          <button
            className="carousel-nav prev"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="carousel-wrapper">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` }}
            >
              {vaccines.map((vaccine, index) => {
                const IconComponent = vaccine.icon;
                return (
                  <div key={index} className="vaccine-card">
                    <div className="vaccine-icon-wrapper">
                      <IconComponent className="vaccine-icon" size={60} strokeWidth={1.5} />
                    </div>
                    <p className="vaccine-name">{vaccine.name}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            className="carousel-nav next"
            onClick={nextSlide}
            disabled={currentSlide === maxSlide}
          >
            <ChevronRight size={24} />
          </button>
        </div>

       
        <div className="pagination">
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VaccineInfo;
