import './App.css';


function Experience() {
    return (
        <>
        <div className="App">
            <section className='App-experience-title'>
                <h3>Experience</h3>
                <div className="experience-container">
                    {/* Card 1 */}
                    <header className="card">
                        <div className="card-body">
                            <h8>State Farm</h8>
                            <time>June - July 2022</time>  
                            <div className="card-actual-body">
                                <div className="hl"></div>
                                <h10>Enterprise Technology Intern </h10>
                                <h9> 
                                    Migrated a Rest API to AWS cloud using Lambda 
                                    functions and HTTP request operations to integrate 
                                    into a PostgreSQL database using Python libraries.
                                </h9>
                            </div>
                        </div>
                        <img src='statefarm.png' alt='statefarm'></img>
                    </header>
                    <div className='item-space'></div>
                    {/* Card 2 */}
                    <header className="card">
                        <div className="card-body">
                            <h8>Ericsson</h8>
                            <time>June - August 2021</time>  
                            <div className="card-actual-body">
                                <div className="hl"></div>
                                <h10>Business Operations Intern</h10>
                                <h9> 
                                    Created external website to increase engagement 
                                    for company's mentorship program.
                                </h9>
                                <h9>
                                    Researched initiatives to increase mentorship engagement by 20% 
                                    and presented development strategies to executives. 
                                </h9>
                            </div>
                        </div>
                        <img src='ericsson.png' alt='ericsson'></img>
                    </header>
                    <div className='item-space'></div>
                    {/* Card 3 */}
                    <header className="card">
                        <div className="card-body">
                            <h8>SafeStamp</h8>
                            <time>January - August 2021</time>  
                            <div className="card-actual-body">
                                <div className="hl"></div>
                                <h10>Analyst Intern </h10>
                                <h9> 
                                    Conduct market research within pharmaceutical and technology 
                                    industries, contact investors to fundraise over $1.5M for 
                                    seed stage, and increase outreach by 40%.
                                </h9>
                            </div>
                        </div>
                        <img src='safestamp2.png' alt='safestamp'></img>
                    </header>
                </div>                                    
            </section>
        </div>
        </>
    );
}

export default Experience;