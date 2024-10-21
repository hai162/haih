import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';


const Header: React.FC = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [searchValueMajor, setsearchValueMajor] = useState('Ngành nghề');
  const [searchValueArea, setsearchValueArea] = useState('Khu vực');
  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
      setIsDropdownOpen(false);
    } else {
      setActiveDropdown(dropdown);
      setIsDropdownOpen(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <header className="header">
      <Navbar />
      <div className="hero">
        <div className="hero-content">
          <h1>Tìm việc làm phù hợp với bạn</h1>
          <div className="search-container">
            <input 

              type="text" 
              placeholder="Nhập từ khóa tìm kiếm (vị trí, công ty, kỹ năng...)" 
              className="search-input"
            />
            <li className={`navbar-item dropdown ${activeDropdown === 'Khu Vực' ? 'active' : ''}`}>
              <a href="#" onClick={(e) => {e.preventDefault(); toggleDropdown('Khu Vực')}}>
                {searchValueArea}
                <svg className="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              {isDropdownOpen && activeDropdown === 'Khu Vực' && (
                <ul className="dropdown-menu">
                  <select value={searchValueArea}
                  onChange={e => {setsearchValueArea(e.target.value);
                    setIsDropdownOpen(false);
                  }}>
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                  <option value="Sài Gòn">Sài Gòn</option>
                  </select>
                </ul>
              )}
            </li>
            <li className={`navbar-item dropdown ${activeDropdown === 'searchValueMajor' ? 'active' : ''}`}>
              <a href="#" onClick={(e) => {e.preventDefault(); toggleDropdown('searchValueMajor')}}>
              {searchValueMajor}
                <svg className="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              {isDropdownOpen && activeDropdown === 'searchValueMajor' && (
                <ul className="dropdown-menu">
                  <select value={searchValueMajor}
                  onChange={e =>{ setsearchValueMajor(e.target.value);
                    setIsDropdownOpen(false);
                  }}>
                  <option value="IT">IT</option>
                  <option value="Ngân hàng">Ngân hàng</option>
                  <option value="Y tế">Y tế</option>
                  </select>
                </ul>
              )}
            </li>
            <button className="search-button">Tìm kiếm</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
