import React from 'react';
import CardAnime from './CardAnime';
import "./Principal.css";

function Principal(props) {
    return (
        <main>
            <div className="main-head">
                <form className="search-box" onSubmit={props.HandleSearch}>

                    <input type="search" placeholder="escribrir el anime a buscar" required value={props.search}
                    onChange={e=> props.SetSearch(e.target.value)}
                    />
                </form>
            </div>
            <div className="anime-list">
                    {props.listAnime.map(anime=>(
                            <CardAnime anime={anime} key={anime.mal_id}/>

                        )) }

                </div>
        </main>
    )
}

export default Principal
