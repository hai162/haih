import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

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
    <nav className="navbar" ref={navRef}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="https://th.bing.com/th/id/R.52e89110cc63f4e337706b4674dd43e5?rik=tQAGnWUyx%2btK9w&pid=ImgRaw&r=0" alt="Logo" />
          <h2>JobSeeker</h2>
        </div>
        <div className="navbar-menu">
          <ul className="navbar-list">
            <li className={`navbar-item dropdown ${activeDropdown === 'cv' ? 'active' : ''}`}>
              <a href="#" onClick={(e) => {e.preventDefault(); toggleDropdown('cv')}}>
                CV
                <svg className="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              {isDropdownOpen && activeDropdown === 'cv' && (
                <ul className="dropdown-menu">
                  <li><a href="#">Tạo CV</a></li>
                  <li><a href="#">Mẫu CV</a></li>
                  <li><a href="#">Cập nhật CV</a></li>
                </ul>
              )}
            </li>
            <li className={`navbar-item dropdown ${activeDropdown === 'jobs' ? 'active' : ''}`}>
              <a href="#" onClick={(e) => {e.preventDefault(); toggleDropdown('jobs')}}>
                Việc làm
                <svg className="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              {isDropdownOpen && activeDropdown === 'jobs' && (
                <ul className="dropdown-menu">
                  <li><a href="#">Tìm việc</a></li>
                  <li><a href="#">Việc làm theo ngành nghề</a></li>
                  <li><a href="#">Việc làm đã ứng tuyển</a></li>
                </ul>
              )}
            </li>
            <li className="navbar-item"><a href="#">Trang nhà tuyển dụng</a></li>
            <li className="navbar-item"><a href="#">Liên hệ</a></li>
          </ul>
        </div>
        <div className="navbar-login">
          <button className="login-button">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Login</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
