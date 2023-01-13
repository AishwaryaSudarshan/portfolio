import './App.css';

function Projects() {
    return (
        <>
            <div className="App-projects">
                <div>
                    <h3>Projects</h3>
            <section>
            {/* Project 1/2 */}
            <div className="project-row">
            {/* Project 1 */}
                <div className='projects-left'>
                    <h4>Drowsy Driving</h4>
                    <div className='projects-backCard-left'>
                        <div className='projects-frontCard-left'>
                            <h5>A hardware project that aims to prevent casualties by alarming drivers if they fall asleep at the wheel using facial recognition.</h5>
                            <h5>Awards & Competitions: HackUTD, Toyota Challenge</h5>
                            <div className='projects-tools'>    
                                <tools>Raspberry Pi</tools>
                                <div className='App-projects-space'></div>
                                <tools1>Facial Recognition</tools1>
                                <div className='App-projects-space-big'></div>
                            </div>
                            <div className='refer-links-top'>
                                    <img src='award.png' alt='award'></img>
                            </div>
                            <div className='refer-links-bottom'>
                                <img src='github.png' alt='github'></img>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project 2 */}
                <div className="projects-right">
                    <h4>Foster Finder</h4>
                    <div className='projects-backCard-right'>
                        <div className='projects-frontCard-right'>
                        <h5>Provide a networking platform for 
                        foster parents to connect comfortably with 
                        representatives, organizations, 
                        and other parents.</h5>
                            <h5>Awards & Competitions: HackBeanPot</h5>
                            <div className='projects-tools'>    
                                <tools>Next JS</tools>
                                <div className='App-projects-space'></div>
                                <tools>React JS</tools>
                                <div className='App-projects-space'></div>
                                <tools>Firebase</tools>
                            </div>
                            <div className='refer-links-top-0'>
                                    <img src='github.png' alt='FosterFinder' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section>
            {/* Project 3/4 */}
            <div className="project-row">
            {/* Project 3 */}
                <div className='projects-left'>
                    <h4>SnapCycle</h4>
                    <div className='projects-backCard-left'>
                        <div className='projects-frontCard-left'>
                            <h5>An image classification app
                        for public users 
                        to accurately classify recyclable 
                        items and minimize contributions 
                        to global warming.</h5>
                            <h5>Awards & Competitions: UT Arlington Research Fair, AYSI App Challenge, Science Fair Regional Grand Prize Winner</h5>
                            <div className='projects-tools-1'>    
                                <tools>InceptionV3</tools>
                                <div className='App-projects-space'></div>
                                <tools>TFLite</tools>
                                <div className='App-projects-space'></div>
                                <tools1>Android Studios</tools1>
                                <div className='App-projects-space'></div>
                            </div>
                            <div className='refer-links-top-1'>
                                    <img src='award.png' alt='award'></img>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Project 4 */}
                <div className="projects-right">
                    <h4>Campanion</h4>
                    <div className='projects-backCard-right'>
                        <div className='projects-frontCard-right'>
                        <h5>Campanion is a social media platform for anyone who loves to camp where the entire experience is centralized through the app.</h5>
                            <h5>Awards & Competitions: HackBeanPot</h5>
                            <div className='projects-tools'>    
                                <tools>Figma</tools>
                                <div className='App-projects-space'></div>
                                <tools>XCode</tools>
                                <div className='App-projects-space'></div>
                            </div>
                            <div className='refer-links-top-2'>
                                    <img src='award.png' alt='award'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
        </div>    
        </>
    );
}
export default Projects;