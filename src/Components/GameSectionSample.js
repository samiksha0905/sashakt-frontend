import { Link } from 'react-router-dom';
//import "./GamesScreen.css";

const CardLayout = () => {
    return ( 
        <section className="activities">
            <h1 className="heading">GAMES</h1>
            <div className="boxg-container">
                <div className="boxg-button">
                    <Link to="/jigsaw" className="cardg">
                        <div className="imageg-wrapper">
                            <img src="https://i.pinimg.com/236x/2a/6d/86/2a6d86ad00a4751658a6c76a4746f05b.jpg" alt="Pikachu"/>
                        </div>
                        <div className="cardg-content">
                            <h3>JIGSAW PUZZLE</h3>
                        </div>
                    </Link>
                </div>
                <div className="boxg-button">
                    <Link to="/memorygame" className="cardg">
                        <div className="imageg-wrapper">
                            <img src="https://i.pinimg.com/236x/44/35/7d/44357d21f90dc3b61eceb4d4817e7e54.jpg" alt="Jumping Frog"/>
                        </div>
                        <div className="cardg-content">
                            <h3>MEMORY GAME</h3>
                        </div>
                    </Link>
                </div>
                <div className="boxg-button">
                    <Link to="/see" className="cardg">
                        <div className="imageg-wrapper">
                            <img src="https://i.pinimg.com/236x/0d/4a/d9/0d4ad9fb461dd24f81fc7c8c0622eeac.jpg" alt="Swan"/>
                        </div>
                        <div className="cardg-content">
                            <h3>CANDY CRUSH</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default CardLayout;