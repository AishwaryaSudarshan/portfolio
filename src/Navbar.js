import './App.css';

function Navbar() {
    return (
        <html>
            <section>
            <div className="App-navbar">
                <div className="App-contacts">
                    <div className="App-icons">
                        <a href="https://github.com/AishwaryaSudarshan">
                            <img src='/github.png' alt='github'></img>
                        </a>
                        <a href="mailto:aishwaryasudarshan18@gmail.com">
                            <img src='/email.png' alt='email'></img>
                        </a>
                        <a href="https://www.linkedin.com/in/aishwarya-sudarshan/">
                            <img src='/linkedin.png' alt='linkedin'></img>
                        </a>
                    </div>
                </div>
                <div className="App-resume">
                    <a href="/Resume.pdf">
                        <div className='App-resume-border'>
                            <resume>Resume</resume>
                        </div>
                    </a>
                </div>
            </div>
            </section>
        </html>
    );
}
export default Navbar;