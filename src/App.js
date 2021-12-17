import {useState,useEffect} from 'react';
import axios from 'axios';
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Principal from './Components/Principal';



function App() {
  const [listAnime,SetListAnime]=useState([]);
  const [topAnime,SetTopAnime]=useState([]);
  const [search, SetSearch]=useState("");

  const ListaTop=() =>{
      axios.get(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
      .then(response => {
      
          SetTopAnime(response.data.top.slice(0,5));
      })
  }

  const HandleSearch = e =>{
        e.preventDefault();

        ListaAnime(search);

  }

  const ListaAnime=(query)=>{
    axios.get(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
    .then(response => {
      SetListAnime(response.data.results);
        })
  }
  useEffect(() => {
    ListaTop();
   
  }, []);

  return (
    <div className="App">
      <Header/>
      <div className="container-wrap">
        <Sidebar topAnime={topAnime}/>
        <Principal 
        HandleSearch={HandleSearch}
        search={search}
        SetSearch={SetSearch}
        listAnime={listAnime}
        />
      </div>
    </div>
  );
}

export default App;
