import './../css/aboutMe.css';
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdSchool } from "react-icons/io";

const AboutMe = ()=> {
    return (
        <div className='aboutMe_container'>
            <div className='aboutMe_content'>
                <div className='aboutMe_box'>
                    <div>
                        <h2>ABOUT ME</h2>
                    </div>
                    <label className='slogan'>"꿈에서 현실로 나아가다"</label> <br/>
                    <div className='introduce'>
                        <span className='highlight'>어린 시절부터 기술과 컴퓨터에 대한 흥미가 있었고</span>, <span className='highlight'>직업훈련기관에서 진행하는 프로그램</span>을 통해 <span className='highlight'>웹 개발에 도전</span>하기로 결심했습니다.<br/>
                        <span className='highlight'>Java 과정을 수료</span>하며 <span className='highlight'>문제를 해결하고 직접 웹을 만들어내는 과정에서 깊은 성취감</span>을 느끼며 <span className='highlight'>웹 개발에 대한 진정한 관심</span>이 생겼습니다.<br/>
                        <span className='highlight'>Java, JSP, Spring과 같은 백엔드 기술</span>과 <span className='highlight'>HTML, CSS, JavaScript 프론트엔드 기술</span> 등을 학습하며<br/>
                        <span className='highlight'>웹 애플리케이션의 전체적인 흐름</span>을 이해하게 되었습니다.
                    </div>
                    <div className='aboutMe_grid'>
                        <div className='grid_clumn'>
                            <div className='grid_icon'>
                                <IoPersonCircleOutline />                        
                            </div>
                            <div>
                                <h3>이름</h3>
                                <p>오혜준</p>                             
                            </div>                
                        </div>
                        <div className='grid_clumn'>
                            <div className='grid_icon'>
                                <CiCalendar />                     
                            </div>
                            <div>
                                <h3>생년월일</h3>
                                <p>2001.03.03</p>                             
                            </div>                
                        </div>
                        <div className='grid_clumn'>
                            <div className='grid_icon'>
                                <FaMapMarkerAlt />                       
                            </div>
                            <div>
                                <h3>주소</h3>
                                <p>서울시 도봉구 방학동</p>                             
                            </div>                
                        </div>
                        <div className='grid_clumn'>
                            <div className='grid_icon'>
                                <IoCall />                     
                            </div>
                            <div>
                                <h3>연락처</h3>
                                <p>010-9046-0360</p>                             
                            </div>                
                        </div>
                        <div className='grid_clumn'>
                            <div className='grid_icon'>
                                <AiOutlineMail />                    
                            </div>
                            <div>
                                <h3>이메일</h3>
                                <p>qwegw0303@naver.com</p>                             
                            </div>                
                        </div>
                        <div className='grid_clumn'>
                            <div className='grid_icon'>
                                <IoMdSchool />                       
                            </div>
                            <div>
                                <h3>학력</h3>
                                <p>도봉고등학교</p>                             
                            </div>                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;