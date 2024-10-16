import '../App.css';

const Activities = () => {
  const cardStyle = {
    overflow: 'hidden',
  };

  return (
    <div>
      <div className="container22 mt-5 mb-3">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-3 ">
            <div className="card22" style={cardStyle} onmouseover="startShake(this)" onmouseout="stopShake(this)">
              <div className="card-body22">
                <img src="https://tse3.mm.bing.net/th?id=OIP.7A4vK3SEWoGuoM9QTe2tWwHaGW&pid=Api&P=0&h=180" className="custom-image1" alt="Video" />
              </div>
              <div className="textstyle22">Discover the World of Super Fun Videos!</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-3">
            <div className="card22" style={cardStyle} onmouseover="startShake(this)" onmouseout="stopShake(this)">
              <div className="card-body22">
                <img src="https://tse3.mm.bing.net/th?id=OIP.7A4vK3SEWoGuoM9QTe2tWwHaGW&pid=Api&P=0&h=180" className="custom-image" alt="games" />
              </div>
              <div className="textstyle22">Time for Game Galore!</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-3">
            <div className="card22" style={cardStyle} onmouseover="startShake(this)" onmouseout="stopShake(this)">
              <div className="card-body22">
                <img src="https://tse3.mm.bing.net/th?id=OIP.7A4vK3SEWoGuoM9QTe2tWwHaGW&pid=Api&P=0&h=180" className="custom-image" alt="stories" />
              </div>
              <div className="textstyle22">Let's dive into Storytime Adventures!</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-3">
            <div className="card22" style={cardStyle} onmouseover="startShake(this)" onmouseout="stopShake(this)">
              <div className="card-body22">
                <img src="https://tse3.mm.bing.net/th?id=OIP.7A4vK3SEWoGuoM9QTe2tWwHaGW&pid=Api&P=0&h=180" className="custom-image" alt="know your rights" />
              </div>
              <div className="textstyle22">Explore Your Rights and Wrongs!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
