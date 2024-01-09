import { Link } from "react-router-dom";

const S2 = () => {
    return (
        <div className="container mt-4">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col cardstyling">
                    <Link to="/games" className="card-link">
                        <div className="card">
                            <img src="https://i.pinimg.com/236x/d8/51/7e/d8517e7c014a45b601075d27f9d5e38c.jpg" className="card-img-top" alt="..." />
                            <div className="d-grid gap-2">
                                <button className="btn btn-info">GAMES</button>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col cardstyling">
                    <Link to="/sample" className="card-link">
                        <div className="card">
                            <img src="https://i.pinimg.com/236x/28/32/65/283265b4e40db7e97185803b6797745c.jpg" className="card-img-top" alt="..." />
                            <div className="d-grid gap-2">
                                <button className="btn btn-info">AUDIOS</button>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col cardstyling">
                    <Link to="/see" className="card-link">
                        <div className="card">
                            <img src="https://i.pinimg.com/236x/19/1b/88/191b884556cc9db68b3aca55e56ac687.jpg" className="card-img-top" alt="..." />
                            <div className="d-grid gap-2">
                                <button className="btn btn-info">VIDEOS</button>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col cardstyling">
                    <Link to="/read" className="card-link">
                        <div className="card">
                            <img src="https://i.pinimg.com/236x/b1/b4/b8/b1b4b87d202d1c7c33bd860bbd15ee1c.jpg" className="card-img-top" alt="..." />
                            <div className="d-grid gap-2">
                                <button className="btn btn-info">READ-ALONG STORIES</button>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default S2;
