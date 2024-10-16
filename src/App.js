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
 import CandyHome from './Components/CandyGameHome';
 import CandyGame from './Components/CandyGame';
 import CandyAbout from './Components/CandyAbout';
 import MazeHome from './Components/MazeHome';
 import Levels from './Components/MazeLevels';
 import OneLevel from './Components/OneLevel';
 import TwoLevel from './Components/TwoLevel';
 import ThreeLevel from './Components/ThreeLevel';
 import FourLevel from './Components/FourLevel';
 import FiveLevel from './Components/FiveLevel';
 import SixLevel from './Components/SixLevel';
 import SevenLevel from './Components/SevenLevel';
 import EightLevel from './Components/EightLevel';
 import NineLevel from './Components/NineLevel';
 import TenLevel from './Components/TenLevel';
 import KnowYourRights from './Components/KnowYourRights';
 import DIY from './Components/DiyHome';
 import Pikachu from './Components/Pikachu';
 import Jumpingfrog from './Components/JumpingFrog';
 import Rose from './Components/Rose';
 import DandD from './Components/DandD';
 import RandT from './Components/DandDmainpage';
 import ProfileSelection from './Components/ProfileSelection';
 import Adults from './Components/Adults';
 import Kids from './Components/Kids';
 import DisplayEmoji from './Components/DisplayEmoji';
 import SubmittedInfo from './Components/SubmittedInfo';
 import { Children } from 'react';
 import LoginSignUpPage from './Components/LoginSignUpPage';
 import Login from './Components/Login';
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
       <Route path="/candyhome" element={<CandyHome/>}/>
       <Route path="/candygame" element={<CandyGame/>}/>
       <Route path="/candyabout" element={<CandyAbout/>}/>
       <Route path="/mazehome" element={<MazeHome/>}/>
       <Route path="/level" element={<Levels/>}/>
       <Route path="/one" element={<OneLevel/>}/>
       <Route path="/two" element={<TwoLevel/>}/>
       <Route path="/three" element={<ThreeLevel/>}/>
       <Route path="/four" element={<FourLevel/>}/>
       <Route path="/five" element={<FiveLevel/>}/>
       <Route path="/six" element={<SixLevel/>}/>
       <Route path="/seven" element={<SevenLevel/>}/>
       <Route path="/eight" element={<EightLevel/>}/>
       <Route path="/nine" element={<NineLevel/>}/>
       <Route path="/ten" element={<TenLevel/>}/>
       <Route path="/knowyourrights" element={<KnowYourRights/>}/>
       <Route path="/diy" element={<DIY/>}/>
       <Route path="/pikachu" element={<Pikachu/>}/>
       <Route path="/frog" element={<Jumpingfrog/>}/>
       <Route path="/rose" element={<Rose/>}/>
       <Route path="/DandD" element={<DandD/>}/>
       <Route path="/D" element={<RandT/>}/>
       <Route path="/select" element={<ProfileSelection/>}/>
       <Route path="/adults" element={<Adults/>}/>
       <Route path="/kids" element={<Kids/>}/>
       <Route path='/submitted/:emojiUrl/:name/:age' element={<SubmittedInfo/>}/>
       <Route path="/display-emoji/:emojiUrl" element={<DisplayEmoji/>}/>
       <Route path="/login" element={<Login/>}/>
     </Routes>
     
     
     </div>
   );
 }
 
 export default App;
 