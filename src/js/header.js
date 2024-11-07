import './../css/header.css';

const Header = () => {
    
    return (
        <div className='header_container'>
            <div className='header_content'>
                <label className='header_label'>HOME</label>
                <label className='header_label'>ABOUT ME</label>
                <label className='header_label'>SKILLS</label>
                <label className='header_label'>PROJECT</label>
                <label className='header_label'>EDUCATION</label>
            </div>
        </div>
    )

}
export default Header;