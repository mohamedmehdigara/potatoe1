import './App.css';
import {Link} from "react-router-dom"

function Home() {
  return (
    <div className="home">
      <div className= "button-container">
        <Link className = "button" to="/download">
          Download Now
        </Link>
      </div>
    </div>
  );
}

export default Home;