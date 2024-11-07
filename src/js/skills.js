import './../css/skills.css'

const Skills = () => {
    return (
        <div className='skills_container'>
            <div className='skills_content'>
                <div className='skills_box'>
                    <div>
                        <h2>SKILLS</h2>
                    </div>
                    <div className='skills_grid'>
                        <div className='skills_gird_item'>
                            <h3>Languages :</h3>
                            <span className='highlight'>Java, Javascript, HTML, CSS</span>
                        </div>
                        <div className='skills_gird_item'>
                            <h3>Frameworks :</h3>
                            <span className='highlight'>Spring, Spring Boot, React</span>
                        </div>
                        <div className='skills_gird_item'>
                            <h3>Libraries :</h3>
                            <span className='highlight'>React, Lombok,  JPA / Hibernate, Spring Security</span>
                        </div>
                        <div className='skills_gird_item'>
                            <h3>DataBase :</h3>
                            <span className='highlight'>Oracle, MySQL</span>
                        </div>
                        <div className='skills_gird_item'>
                            <h3>Tool :</h3>
                            <span className='highlight'>VSCode, Eclipse, Git, GitHub</span>
                        </div>
                        <div className='skills_gird_item'>
                            <h3>Server / Hosting :</h3>
                            <span className='highlight'>Apache Tomcat, AWS, Azure</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;