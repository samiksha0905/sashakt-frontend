import { Link } from 'react-router-dom';
import "./GamesScreen.css";

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
                    <Link to="/candyhome" className="cardg">
                        <div className="imageg-wrapper">
                            <img src="https://i.pinimg.com/236x/77/b0/5d/77b05d66f6cbd55e6ca1489a1fd2b3eb.jpg" alt="Jumping Frog"/>
                        </div>
                        <div className="cardg-content">
                            <h3>CANDY CRUSH</h3>
                        </div>
                    </Link>
                </div>
                <div className="boxg-button">
                    <Link to="/mazehome" className="cardg">
                        <div className="imageg-wrapper">
                            <img src="https://i.pinimg.com/236x/19/1c/39/191c395bcf3e24f38aa14e74dc131ff7.jpg" alt="Jumping Frog"/>
                        </div>
                        <div className="cardg-content">
                            <h3>MAZE GAME</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default CardLayout;