import "./Home.css"
import ReactTypingEffect from 'react-typing-effect';
import { Button } from 'react-bootstrap';

const Home = () => {

    return (
        <div className="hero"> <div className="overlay-itro"></div>
            <div className="hero-content display-table">
                <div className="table-cell">
                    <div className="container">
                        <h1 className="hero-title mb-4">Software Developer</h1>
                        <h3 className="text-warning">Front-End 🔶 Back-End 🔶 Databases</h3>
                        <span className="typed" >
                            <ReactTypingEffect
                                speed = "100"
                                text={["Secure","Efficient","Beautiful"]}
                            />
                        </span> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;