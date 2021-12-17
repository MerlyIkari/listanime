import React from 'react';
import "./CardAnime.css";


export default function CardAnime(props) {
    return (
        <article className="anime-card">
            <a href={props.anime.url} target="_blank" rel="noreferrer">
                <figure>
                    <img src={props.anime.image_url} alt="Imagen Anime" />
                </figure>
                 <h3 >{props.anime.title}</h3>
                 <p>{props.anime.synopsis}</p>
                
            </a>
         </article>
    )
}
