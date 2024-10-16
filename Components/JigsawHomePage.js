import React from "react";
import "./gamehome.css";
import { Link } from "react-router-dom";
const GameHome = () => {
    return ( 
        <div>
        <div className="heading-box">
                Jigsaw Puzzle
            </div>
        <div class="main">
<div class="card1">

<div class="image">
   <img src="https://timemaster.ae/uploads/news_article/how-can-public-speaking-training-for-kids-help_2021_12_28_09_25_23.webp" alt=""/>
</div>
<div class="title">
 <h1>
Right to Participation</h1>
</div>
<div class="des">
<Link to="/part"><button>Let's Play</button></Link>

</div>
</div>


<div class="card1">

<div class="image">
   <img src="https://tse3.mm.bing.net/th?id=OIP.IlYN5ndxJVAgXpxuuJI03AHaE0&pid=Api&P=0&h=180" alt=""/>
</div>
<div class="title">
 <h1>
Child Labour</h1>
</div>
<div class="des">

<Link to="/lab"><button>Let's Play</button></Link>
</div>
</div>



</div>
</div>
     );
}
 
export default GameHome;