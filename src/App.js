import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  let [ like, setLike ] = useState(0);

  return (
    <div className="App">
      <div className='main_slide'>
        <div className='text_container'>
          <div className='line_text'>
            <p>
              안녕하세요.
              <br />
              끊임없이 <span className='white_font'>성장하는 개발자</span>
              <br />
              <span className='white_font'>오혜준</span>입니다.
              <h4><span onClick={ () => { setLike(like + 1) }}>👍</span> {like} </h4>
            </p>
          </div>
        </div>
        <div className='category'>
          <p>1. About Me</p>
          <p>2. Skills</p>
          <p>3. Project</p>
        </div>
        <div>
          <h3></h3>
        </div>
      </div>
    </div>
  );
}

export default App;