import logo from './logo.svg';
import './App.css';
import tStoryIcon from './assets/images/tStoryIcon.svg';
import gitIcon from './assets/images/gitIcon.png';

function App() {
  return (
    <div className="App">
      <div className='header_container'>
        <div className='header'>
          <p className='header_title'>오혜준 포트폴리오</p>
          <div className='nav'>
            <p className='nav_item'>나의소개</p>
            <p className='nav_item'>나의기술</p>
            <p className='nav_item'>프로젝트</p>
          </div>
        </div>
        <p style={{ fontSize: "100px" }}>
          안녕하세요 <br/>
          끊임없이 성장하는 개발자 <br/>
          <span className='highlight'>오혜준</span>입니다
        </p>
        <div className='icon_container'>
          <a href="https://ohhyejun33.tistory.com/" target="_blank" rel="noopener noreferrer">
            <img className='icon' src={tStoryIcon} alt="티스토리 아이콘 입니다" />
          </a>
          <a href="https://github.com/Oh-hyejun" target="_blank" rel="noopener noreferrer">
            <img className='icon' src={gitIcon} alt="깃허브 아이콘 입니다" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;