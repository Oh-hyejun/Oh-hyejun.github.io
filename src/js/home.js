import './../css/home.css';

const Home = () => {
    return (
        <div className='home_container'>
            <div className='home_content'>
                <div className='home_label'>
                    안녕하세요<br/>
                    끈임없이 성장하는 <label style={ {color : 'white'} }>개발자 <br/>오혜준</label>
                    입니다
                </div>
                <div className='home_img'>
                    <img src={`${process.env.PUBLIC_URL}/img/증명사진.png`}></img>
                </div>
            </div>
        </div>
    )
}

export default Home;