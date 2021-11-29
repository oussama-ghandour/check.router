import MoviesCard from "./components/MoviesCard";
import Home from "./components/NavBar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import React from "react";
import "./App.css";
import "./Css/style.css";
import Search from "./components/Search";
import poster1 from "./Images/101 Dalmatians.jpg";
import poster2 from "./Images/Peter Pan.jpg";
import poster3 from "./Images/Pirates of Caribbean.png";
import poster4 from "./Images/The Hunchback of Notre Dame.jpg";
import poster5 from "./Images/Robin Hood.png";
import poster6 from "./Images/The seven Dwarfs.png";
import poster7 from "./Images/Aladin.jpg";
import poster8 from "./Images/Coco.png";
import poster9 from "./Images/Mulan.jpg";
import poster10 from "./Images/Atlantis.jpg";
import poster11 from "./Images/The Lion King.jpg";
import poster12 from "./Images/Beauty and the Beast.jpg";
import { useState } from "react";
import RatingComp from "./components/Rating";
import {Route} from "react-router-dom"
import HomePage from "./components/Home";
import Trailer from "./components/Trailer";



function App() {
  const [FilterName, setFilterName] = useState("");
  const [Rating, setRating] = useState("");
  const [Movies, setMovies] = useState([
    {
      id: 0,
      title: "101 Dalmatians",
      description:
        "The movie tells the story of two London dalmatians and their human owners who they refer to as “pets” and a villainess named Cruella De Vil, who wants to buy all the dalmatian puppies she can find in order to turn them into fur coats ",
      postUrl: poster1,
      rating: "3",
      genre: "Comedy",
      trailer: "https://www.youtube.com/embed/rKCEyXoPNEU",
    },
    {
      id: 1,
      title: "Peter Pan",
      description:
        " The three children of the Darling family receive a visit from Peter Pan, who takes them to Never Land, where an ongoing war between Peter's gang of rag-tag runaways and the evil Pirate Captain Hook is taking place.",
      postUrl: poster2,
      rating: "4",
      genre: "Fantasy",
      trailer: "https://www.youtube.com/embed/5K83Ix1R9Mc",
    },
    {
      id: 2,
      title: "Pirates of Caribbean",
      description:
        "Pirates of the Caribbean is a sweeping action-adventure story set in an era when villainous pirates scavenged the Caribbean seas. This roller coaster tale teams a young man, Will Turner, with an unlikely ally in rogue pirate Jack Sparrow.",
      postUrl: poster3,
      rating: "4",
      genre: "Adventure",
      trailer: "https://www.youtube.com/embed/Hgeu5rhoxxY",
    },
    {
      id: 3,
      title: "The Hunchback of Notre Dame",
      description:
        "In 15th-century France, a gypsy girl is framed for murder by the infatuated Chief Justice, and only the deformed bellringer of Notre Dame Cathedral can save her.",
      postUrl: poster4,
      rating: "5",
      genre: "Musical",
      trailer: "https://www.youtube.com/embed/O6i3lyx1I_g",
    },
    {
      id: 4,
      title: "Robin Hood",
      description:
        "The story follows the adventures of Robin Hood, Little John, and the inhabitants of Nottingham as they fight against the excessive taxation of Prince John, and Robin Hood wins the hand of Maid Marian.",
      postUrl: poster5,
      rating: "4",
      genre: "Adventure",
      trailer: "https://www.youtube.com/embed/4ksNO_6XiFw",
    },
    {
      id: 5,
      title: "Snow White  and The seven Dwarf",
      description:
        "The beautiful Snow White is forced to flee to the forest to save her life due to the malice and envy of the evil queen.It is important to be of good character and pure soul because such persons will always be rewarded.",
      postUrl: poster6,
      rating: "3",
      genre: "Fantasy",
      trailer: "https://www.youtube.com/embed/0VE2e6QspvI",
    },

    {
      id: 6,
      title: "Aladin",
      description:
        "Aladdin is portrayed as quick-witted, and ultimately a caring person. Like most Disney male protagonists, he is a heroic young man who seeks to win the affection of many other characters, which demonstrates his insecurity.",
      postUrl: poster7,
      rating: "1",
      genre: "Fantasy",
      trailer: "https://www.youtube.com/embed/eTjHiQKJUDY",
    },
    {
      id: 7,
      title: "Coco",
      description:
        "The story follows a 12-year-old boy named Miguel who is accidentally transported to the Land of the Dead, where he seeks the help of his deceased musician great-great-grandfather to return him to his family among the living and to reverse his family's ban on music.",
      postUrl: poster8,
      rating: "2",
      genre: "Mystery",
      trailer: "https://www.youtube.com/embed/Rvr68u6k5sI",
    },
    {
      id: 8,
      title: "Mulan",
      description:
        "Mulan is a girl, the only child of her honored family. When the Huns invade China, one man from every family is called to arms. ... Mulan, who just got rejected by the matchmaker because she had set her on fire, decides to prove that she is worth something and steals away to fit her father's place in the Chinese army.",
      postUrl: poster9,
      rating: "5",
      genre: "Musical",
      trailer: "https://www.youtube.com/embed/HKH7_n425Ss",
    },
    {
      id: 9,
      title: "Atlantis:The Lost Empire",
      description:
        "Set in 1914, the film tells the story of young linguist Milo Thatch, who gains possession of a sacred book, which he believes will guide him and a crew of mercenaries to the lost city of Atlantis.",
      postUrl: poster10,
      rating: "4",
      genre: "Adventure",
      trailer: "https://www.youtube.com/embed/sZIimDPZQwg",
    },
    {
      id: 10,
      title: "The Lion King",
      description:
        "The Lion King tells the story of Simba (Swahili for lion), a young lion who is to succeed his father, Mufasa, as King of the Pride Lands; however, after Simba's paternal uncle Scar murders Mufasa to seize the throne, Simba is manipulated into thinking he was responsible and flees into exile.",
      postUrl: poster11,
      rating: "3",
      genre: "Drama",
      trailer: "https://www.youtube.com/embed/lFzVJEksoDY",
    },
    {
      id: 11,
      title: "Beauty and The Beast",
      description:
        "Beauty and the Beast focuses on the relationship between the Beast (voice of Robby Benson), a prince who is magically transformed into a monster and his servants into household objects as punishment for his arrogance, and Belle (voice of Paige O'Hara), a young woman whom he imprisons in his castle.",
      postUrl: poster12,
      rating: "3.8",
      genre: "Fantasy",
      trailer: "https://www.youtube.com/embed/iurbZwxKFUE",
    },
  ]);

  return (
    <div className="App">
      <Home Movies="movies" setMovies="setMovies" />

      <Route exact path="/" component={HomePage} />

      <Search setFilterName={setFilterName} />
      <RatingComp setRating={setRating} />
      <Route
        path="/movies"
        render={() => (
          <MoviesCard Movies={Movies} FilterName={FilterName} Rating={Rating} />
        )}
      />
      <Route
        exact path="/trailer/:id"
        render={(props) => <Trailer Movies={Movies} {...props} />}
      />
      <Contact />
      <Footer />
    </div>
  );

}
  

export default App;



