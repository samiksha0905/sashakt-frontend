import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1500">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://autismawarenesscentre.com/wp-content/uploads/bigstock-Kids-Playing-Block-Toys-In-Pla-350958596-1200x801.jpg"
            className="d-block w-100" height="650" alt="..."
          />
        </div>
        {/* Add more carousel items as needed */}
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbGRyZW4lMjBwbGF5aW5nfGVufDB8fDB8fHww"
            className="d-block w-100" height="650" alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://plus.unsplash.com/premium_photo-1661778446139-cf5eea2d506d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoaWxkcmVuJTIwcGxheWluZ3xlbnwwfHwwfHx8MA%3D%3D"
            className="d-block w-100" height="650" alt="..."
          />
        </div>
      </div>

      <div className="carousel-caption d-md-block text-center">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control form-control-sm" id="name" style={{ width: '50%', margin: '0 auto' }} />
            </div>
          </div>
          <div className="col-md-12 mx-auto">
            <div className="mb-3">
              <label htmlFor="age" className="form-label">Age</label>
              <input type="text" className="form-control form-control-sm" id="age" style={{ width: '50%', margin: '0 auto' }} />
            </div>
          </div>
          <div className="col-md-6 mx-auto">
            <Link to="/s2" className="btn btn-dark btn-lg">
              GET STARTED
            </Link>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Home;
