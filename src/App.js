 //import logo from './logo.svg';
import './App.css';
import MyNav from './Components/MyNav';
import Home from './Components/Home';
import About from './Components/About';
import S2 from './Components/s2';
import { Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import  CardLayout from './Components/Games';
import GameBoard from './Components/GameBoard';
import QuizPage from './Components/QuizPage';
import YouTubeVideo from './Components/YouTubeVideo';
import Videoquiz from './Components/Videoquiz';
//import { JigsawPuzzle } from 'react-jigsaw-puzzle';
import GameHome from './Components/JigsawHomePage';
import Participation from './Components/JigRightToParticipation';
import Labour from './Components/JigChildLabour';
import Read from './Components/Read';
//import CardLayout from './Components/GameSectionSample';
import Youtubepage from './Components/YoutubePage';
//import Youtubepage from './Components/YouTubepage';

function App() {



  return (
    <div className="App">
      
    <MyNav/>
  

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/s2" element={<S2/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/games" element={<CardLayout/>} />
      <Route path="/memorygame" element={<GameBoard/>}/>
      <Route path="/quiz" element={<QuizPage/>}/>
      <Route path="/see" element={<Youtubepage/>}/>
      <Route path="/yt/:vid" element={<YouTubeVideo/>}/>
      <Route path="/vidquiz" element={<Videoquiz/>}/>
      <Route path="/jigsaw" element={<GameHome/>}/>
      <Route path="/part" element={<Participation/>}/>
      <Route path="/lab" element={<Labour/>}/>
      <Route path="/read" element={<Read/>}/>
      <Route path="/sample" element={<CardLayout/>}/>
    </Routes>
    
    
    </div>
  );
}

export default App;
