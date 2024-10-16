import { Link } from "react-router-dom";
import './Youtubepage.css'; // Import the CSS file for styling

const Youtubepage = () => {
  return (
    <div className="ytbackground-image">
      <div>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-lg-4 mb-3">
                    <Link to="/yt/N14_XNH8Mqs">
                    <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div class="card-body">
                            <img  src="https://tse4.mm.bing.net/th?id=OIP.XsfO9sTtmJt1ySO0DeHb3gHaFL&pid=Api&P=0&h=180" className="img-fluid" alt="Video Thumbnail"/>
                        </div>
                    </div>
                    </Link>
                </div>
                
                
                <div class="col-lg-4 mb-3">
                    <Link to="/yt/jg1O9hjtj58">
                    <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div class="card-body">
                            <img  src="https://tse2.mm.bing.net/th?id=OIP.FMKjuTm019R4bO4Dwm5EBwHaFh&pid=Api&P=0&h=180" className="img-fluid" alt="Video Thumbnail" />
                        </div>
                    </div>
                    </Link>
                </div>
                <div class="col-lg-4 mb-3">
                    <Link to="/yt/ZtKPr1tpsQ0">
                    <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div class="card-body">
                            <img  src="https://tse1.mm.bing.net/th?id=OIP.EEB3G15wR9Q3FeKtNFvzdwHaEo&pid=Api&P=0&h=180" className="img-fluid" alt="Video Thumbnail"/>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
            </div>
            <div class="container mt-5">
            <div class="row">
            <div class="col-lg-4 mb-3">
                    <Link to="/yt/gS9xOczDEZY">
                    <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div class="card-body">
                            <img  src="https://tse3.mm.bing.net/th?id=OIP.-NxrQpgG6vEpVK0jnAHSuQHaGB&pid=Api&P=0&h=180" className="img-fluid" alt="Video Thumbnail"/>
                        </div>
                    </div>
                    </Link>
                </div>
                <div class="col-lg-4 mb-3">
                    <Link to="/yt/_cp1aiGFVHc">
                    <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div class="card-body">
                            <img  src="https://tse1.mm.bing.net/th?id=OIP.SIqgQQniO1qv4NOrIo7x1AHaGn&pid=Api&P=0&h=180" className="img-fluid" alt="Video Thumbnail"/>
                        </div>
                    </div>
                    </Link>
                </div>
                <div class="col-lg-4 mb-3">
                    <Link to="/yt/QGLnnk46UQ0">
                    <div class="card" onmouseover="startShake(this)" onmouseout="stopShake(this)">
                        <div class="card-body">
                            <img  src="https://tse1.mm.bing.net/th?id=OIP.91tz1eTM6tq71c70QDqENQHaHw&pid=Api&P=0&h=180" className="img-fluid" alt="Video Thumbnail"/>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
            </div>
            
        </div>
    </div>
  );
};

export default Youtubepage;