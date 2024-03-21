import './App.css';
import { Card } from './Card/Card';
import image1 from './images/black clover.jpg'
import image2 from './images/dragon ball.jpg'
import image3 from './images/naruto-cover.jpg'
import image4 from './images/one-piece-2.jpg'
import image5 from './images/bleach-1.jpg'
import image6 from './images/fairy tail.jpg'
import logo from './images/the weebs nation.png';

function App() {
  const cards = [
    {
      url:image1,
      title:"Black Clover",
      description:"'Black Clover' anime follows Asta, a boy without magic, on his journey to become the Wizard King."
    },
    {
      url:image2,
      title:"Dragon Ball",
      description:"'Dragon Ball' anime chronicles Goku's adventures as he trains, fights powerful foes, and searches for mystical Dragon Balls."
    },
    {
      url:image3,
      title:"Naruto",
      description:"'Naruto' anime depicts Naruto Uzumaki's quest to become a ninja and protect his village, facing challenges and forming bonds."
    },
    {
      url:image4,
      title:"One piece",
      description:"'One Piece' anime follows Monkey D. Luffy and his crew's journey to find the legendary treasure, facing adventures and adversaries."
    },
    {
      url:image5,
      title:"Bleach",
      description:"'Bleach' anime centers on Ichigo Kurosaki's role as a Soul Reaper, battling evil spirits and protecting the living world."
    },
    {
      url:image6,
      title:"Fairy Tail",
      description:"'Fairy Tail' anime features Natsu Dragneel and his guild's magical adventures, friendship bonds, and battles against dark forces."
    },
  ]
  return (
     <div className="app">
        <img src={logo} alt="Logo" className="logo" />
        <div className='card-container'>
         {cards.map((card,index)=><Card key={index} card={card}/>)}
        </div>  
      </div>
  );
}

export default App;